/* =========================================================
   Event tickets paid directly to R.U.LITT's Venmo (business profile).
   ========================================================= */
const EVENT = {
  id: "APAGON",                 // short tag used in ticket codes
  name: "El Apagón Halloween Party",
  date: "Fri Oct 30, 2026 · 9PM–2AM",
  venue: "La Cabañita at The Mint, 116 S. Main St., Hailey, ID",
  venmoUser: "REntertainment100",       // venmo.com/u/REntertainment100 (business)
  tiers: [                               // sold online
    { id: "EB",  en: "Early Bird", es: "Early Bird (preventa)", price: 20 },
    { id: "VIP", en: "VIP",        es: "VIP",                   price: 150 },
  ],
  doorPrice: 30,                         // shown as info only (paid at the door)
  maxPerOrder: 10,
  flyer: "media/events/apagon.jpg",
  salesEnd: "2026-10-31T02:00:00-06:00", // sales close automatically after this
};

(() => {
  const form = $("#tixForm"); if (!form) return;
  const qty = $("#tixQty"), money = (n) => "$" + n.toFixed(2).replace(/\.00$/, "");
  const open = EVENT.venmoUser && EVENT.tiers.length && Date.now() < new Date(EVENT.salesEnd).getTime();
  const tier = () => EVENT.tiers.find((x) => x.id === (form.tier?.value || EVENT.tiers[0].id)) || EVENT.tiers[0];

  if (EVENT.flyer) {
    $("#tixFlyer").innerHTML = `<img src="${EVENT.flyer}" alt="${esc(EVENT.name)}">`;
    $("#tixFlyer").classList.add("has-img");
  }

  const renderTiers = () => {
    const cur = form.tier?.value || EVENT.tiers[0].id;
    $("#tixTiers").innerHTML = EVENT.tiers.map((x) => `
      <label class="tix-tier"><input type="radio" name="tier" value="${x.id}"${x.id === cur ? " checked" : ""}>
        <span class="tt-name">${t(x.en, x.es)}</span><span class="tt-price">${money(x.price)}</span></label>`).join("")
      + `<p class="tix-door">${t("At the door", "En la puerta")}: <b>${money(EVENT.doorPrice)}</b> · ${t("buy online and save", "compra en línea y ahorra")}</p>`;
  };
  const fillUser = () => $$(".tix-note").forEach((p) => {
    if (p.textContent.includes("@USER")) p.textContent = p.textContent.replace("@USER", "@" + EVENT.venmoUser);
  });
  const update = () => {
    const q = Math.max(1, Math.min(EVENT.maxPerOrder, parseInt(qty.value, 10) || 1));
    qty.value = q;
    $("#tixTotal").textContent = money(tier().price * q);
  };
  const closedMsg = () => {
    $("#tixMsg").className = "form-msg err";
    $("#tixMsg").textContent = Date.now() >= new Date(EVENT.salesEnd).getTime()
      ? t("Online ticket sales are closed.", "La venta de entradas en línea ya cerró.")
      : t("Ticket sales open soon.", "La venta de entradas abre muy pronto.");
  };

  form.addEventListener("click", (e) => {
    const b = e.target.closest("[data-q]"); if (!b) return;
    qty.value = (parseInt(qty.value, 10) || 1) + +b.dataset.q; update();
  });
  form.addEventListener("change", (e) => { if (e.target.name === "tier") update(); });
  qty.addEventListener("input", update);
  $("#langBtn")?.addEventListener("click", () => setTimeout(() => { renderTiers(); fillUser(); update(); if (!open) closedMsg(); }, 0));
  renderTiers(); fillUser(); update();
  if (!open) { closedMsg(); $("#tixBtn").disabled = true; }

  // Resume a pending order after a reload
  try { const saved = JSON.parse(localStorage.getItem("rulitt-ticket-" + EVENT.id) || "null"); if (saved && saved.tier && open) showDone(saved); } catch (e) {}

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!open) return closedMsg();
    if (form._honey.value) return;
    let bad = false;
    $$("[required]", form).forEach((f) => { const ok = f.type === "checkbox" ? f.checked : f.checkValidity(); f.classList.toggle("invalid", !ok); if (!ok) bad = true; });
    if (bad) { $("#tixMsg").className = "form-msg err"; $("#tixMsg").textContent = t("Please complete all fields and confirm 21+.", "Completa todos los campos y confirma que son 21+."); return; }

    update();
    const tr = tier(), q = +qty.value, total = tr.price * q;
    const code = `${EVENT.id}-${tr.id}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    const order = { code, tier: tr.id, tierName: tr.en, unit: tr.price, name: form.name.value.trim(), email: form.email.value.trim(), phone: form.phone.value.trim(), qty: q, total };
    const btn = $("#tixBtn"); btn.disabled = true;

    // Send the reservation to R.U.LITT's email (FormSubmit) so they can match it with Venmo payments
    if (CONFIG.formEndpoint) {
      try {
        await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ _subject: `TICKET ${code} — ${order.name} — ${q} × ${tr.en} ${money(tr.price)} = ${money(total)}`, _template: "table",
            type: "Event ticket (pending Venmo payment)", event: EVENT.name, ticket_type: tr.en, code, name: order.name, email: order.email, phone: order.phone,
            tickets: q, total: money(total), venmo_to: "@" + EVENT.venmoUser, language: lang.toUpperCase() }) });
      } catch (err) { /* still let them pay; the Venmo note carries the code */ }
    }
    try { localStorage.setItem("rulitt-ticket-" + EVENT.id, JSON.stringify(order)); } catch (e) {}
    btn.disabled = false;
    showDone(order);
  });

  $("#tixNew")?.addEventListener("click", () => {
    try { localStorage.removeItem("rulitt-ticket-" + EVENT.id); } catch (e) {}
    form.reset(); qty.value = 1; renderTiers(); update(); form.hidden = false; $("#tixDone").hidden = true;
  });

  function showDone(o) {
    const note = `${EVENT.name} – ${o.qty} ${o.tierName} – ${o.code} – ${o.name}`;
    const url = `https://venmo.com/${encodeURIComponent(EVENT.venmoUser)}?txn=pay&amount=${o.total.toFixed(2)}&note=${encodeURIComponent(note)}`;
    $("#tixCode").textContent = o.code;
    $("#tixDoneQty").textContent = `${o.qty} × ${o.tierName} ${money(o.unit)}`;
    $("#tixDoneTotal").textContent = money(o.total);
    $("#tixVenmo").href = url;
    $("#tixQr").innerHTML = "";
    if (window.QRCode) new QRCode($("#tixQr"), { text: url, width: 160, height: 160, colorDark: "#000", colorLight: "#fff" });
    form.hidden = true; $("#tixDone").hidden = false;
    $("#tixDone").scrollIntoView({ behavior: "smooth", block: "start" });
  }
})();
