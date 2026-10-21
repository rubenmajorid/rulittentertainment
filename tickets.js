/* =========================================================
   Event tickets paid directly to R.U.LITT's Venmo.
   Fill VENMO_USER and PRICE, then publish.
   ========================================================= */
const EVENT = {
  id: "APAGON",                 // short tag used in ticket codes
  name: "El Apagón Halloween Party",
  date: "Fri Oct 30, 2026 · 9PM–2AM",
  venue: "La Cabañita at The Mint, 116 S. Main St., Hailey, ID",
  venmoUser: "",                        // Venmo username WITHOUT @, e.g. "RULITT-Entertainment"
  price: 0,                     // price per ticket in USD, e.g. 20
  maxPerOrder: 10,
  flyer: "media/events/apagon.jpg",                    // e.g. "media/events/apagon.jpg"
  salesEnd: "2026-10-31T02:00:00-06:00", // sales close automatically after this
};

(() => {
  const form = $("#tixForm"); if (!form) return;
  const qty = $("#tixQty"), money = (n) => "$" + n.toFixed(2).replace(/\.00$/, "");
  const open = EVENT.venmoUser && EVENT.price > 0 && Date.now() < new Date(EVENT.salesEnd).getTime();

  if (EVENT.flyer) {
    $("#tixFlyer").innerHTML = `<img src="${EVENT.flyer}" alt="${esc(EVENT.name)}">`;
    $("#tixFlyer").classList.add("has-img");
  }

  const fillUser = () => $$(".tix-note").forEach((p) => {
    if (p.textContent.includes("@USER")) p.textContent = p.textContent.replace("@USER", EVENT.venmoUser ? "@" + EVENT.venmoUser : "R.U.LITT");
  });
  const update = () => {
    let q = Math.max(1, Math.min(EVENT.maxPerOrder, parseInt(qty.value, 10) || 1));
    qty.value = q;
    $("#tixUnit").textContent = EVENT.price ? money(EVENT.price) : "—";
    $("#tixTotal").textContent = EVENT.price ? money(EVENT.price * q) : "—";
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
  qty.addEventListener("input", update);
  $("#langBtn")?.addEventListener("click", () => setTimeout(() => { fillUser(); update(); if (!open) closedMsg(); }, 0));
  fillUser(); update();
  if (!open) { closedMsg(); $("#tixBtn").disabled = true; }

  // Resume a pending order after a reload
  try { const saved = JSON.parse(localStorage.getItem("rulitt-ticket-" + EVENT.id) || "null"); if (saved && open) showDone(saved); } catch (e) {}

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!open) return closedMsg();
    if (form._honey.value) return;
    let bad = false;
    $$("[required]", form).forEach((f) => { const ok = f.type === "checkbox" ? f.checked : f.checkValidity(); f.classList.toggle("invalid", !ok); if (!ok) bad = true; });
    if (bad) { $("#tixMsg").className = "form-msg err"; $("#tixMsg").textContent = t("Please complete all fields and confirm 21+.", "Completa todos los campos y confirma que son 21+."); return; }

    update();
    const q = +qty.value, total = EVENT.price * q;
    const code = `${EVENT.id}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    const order = { code, name: form.name.value.trim(), email: form.email.value.trim(), phone: form.phone.value.trim(), qty: q, total };
    const btn = $("#tixBtn"); btn.disabled = true;

    // Send the reservation to R.U.LITT's email (FormSubmit) so they can match it with Venmo payments
    if (CONFIG.formEndpoint) {
      try {
        await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ _subject: `TICKET ${code} — ${order.name} — ${q} × ${money(EVENT.price)} = ${money(total)}`, _template: "table",
            type: "Event ticket (pending Venmo payment)", event: EVENT.name, code, name: order.name, email: order.email, phone: order.phone,
            tickets: q, total: money(total), venmo_to: "@" + EVENT.venmoUser, language: lang.toUpperCase() }) });
      } catch (err) { /* still let them pay; the Venmo note carries the code */ }
    }
    try { localStorage.setItem("rulitt-ticket-" + EVENT.id, JSON.stringify(order)); } catch (e) {}
    btn.disabled = false;
    showDone(order);
  });

  $("#tixNew")?.addEventListener("click", () => {
    try { localStorage.removeItem("rulitt-ticket-" + EVENT.id); } catch (e) {}
    form.reset(); qty.value = 1; update(); form.hidden = false; $("#tixDone").hidden = true;
  });

  function showDone(o) {
    const note = `${EVENT.name} – ${o.qty} ticket${o.qty > 1 ? "s" : ""} – ${o.code} – ${o.name}`;
    const url = `https://venmo.com/${encodeURIComponent(EVENT.venmoUser)}?txn=pay&amount=${o.total.toFixed(2)}&note=${encodeURIComponent(note)}`;
    $("#tixCode").textContent = o.code;
    $("#tixDoneQty").textContent = `${o.qty} × ${money(EVENT.price)}`;
    $("#tixDoneTotal").textContent = money(o.total);
    $("#tixVenmo").href = url;
    $("#tixQr").innerHTML = "";
    if (window.QRCode) new QRCode($("#tixQr"), { text: url, width: 160, height: 160, colorDark: "#000", colorLight: "#fff" });
    form.hidden = true; $("#tixDone").hidden = false;
    $("#tixDone").scrollIntoView({ behavior: "smooth", block: "start" });
  }
})();
