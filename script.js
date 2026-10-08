/* =========================================================
   R.U.LITT Entertainment — site config
   Fill these in when the client sends the info.
   ========================================================= */
const CONFIG = {
  phone: "",            // e.g. "+12085551234"  (call + text)
  phoneDisplay: "",     // e.g. "(208) 555-1234"
  whatsapp: "",         // digits only, e.g. "12085551234"
  email: "r.u.littentertainment@gmail.com", // temporary until Google Workspace
  hoursEN: "",          // e.g. "Mon–Sat 10am–8pm"
  hoursES: "",          // e.g. "Lun–Sáb 10am–8pm"
  formEndpoint: "https://formsubmit.co/ajax/r.u.littentertainment@gmail.com", // swap for the hashed endpoint after activation
  instagram: "",        // full URL
  facebook: "",
  tiktok: "",
  heroVideo: "media/hero.mp4",        // e.g. "media/hero.mp4" (muted loop behind the hero)
  heroImage: "media/hero.jpg",        // fallback/poster, e.g. "media/hero.jpg"
  featureImages: { wedding: "media/wedding.mp4", quince: "media/quince.mp4", private: "media/gallery/disco-party.jpg" }, // e.g. "media/wedding.jpg"
};

/* Gallery: replace `src` with real photos in media/ (type: wedding | quince | night | production) */
const GALLERY = [
  { type: "night",      size: "wide", label: "Lasers & DJ booth",   src: "media/gallery/lasers-dj.jpg" },
  { type: "wedding",    size: "tall", label: "Wedding couple",      src: "media/gallery/couple-smoke.jpg" },
  { type: "night",      size: "",     label: "Dance cam",           src: "media/gallery/dance-cam.jpg" },
  { type: "wedding",    size: "wide", label: "Wedding dance floor", src: "media/gallery/wedding-party.jpg" },
  { type: "production", size: "",     label: "Laser show",          src: "media/gallery/lasers-bw.jpg" },
  { type: "wedding",    size: "tall", label: "First kiss",          src: "media/gallery/couple-kiss.jpg" },
  { type: "production", size: "wide", label: "Beams & screens",     src: "media/gallery/beams-palms.jpg" },
  { type: "night",      size: "",     label: "Disco party",         src: "media/gallery/disco-party.jpg" },
  { type: "production", size: "wide", label: "Lighting production", src: "media/gallery/gold-ceiling.jpg" },
  { type: "night",      size: "wide", label: "Packed dance floor",  src: "media/gallery/crowd-bw.jpg" },
  { type: "wedding",    size: "tall", label: "First dance lights",  src: "media/gallery/first-dance.jpg" },
  { type: "night",      size: "tall", label: "Live band stage",     src: "media/gallery/band-night.jpg" },
  { type: "production", size: "tall", label: "Stage build",         src: "media/gallery/stage-day.jpg" },
  { type: "production", size: "tall", label: "R.U.LITT DJ booth",   src: "media/gallery/dj-laptop.jpg" },
  { type: "night",      size: "tall", label: "Concert stage",       src: "media/gallery/band-stage.jpg" },
  { type: "production", size: "tall", label: "Truss & lighting",    src: "media/gallery/truss-lights.jpg" },
  { type: "wedding",    size: "tall", label: "Barn venue setup",    src: "media/gallery/barn-setup.jpg" },
  { type: "night",      size: "tall", label: "Bar & club setup",    src: "media/gallery/bar-setup.jpg" },
  { type: "production", size: "tall", label: "Event crew",          src: "media/gallery/crew-setup.jpg" },
  { type: "production", size: "",     label: "DJ controller",       src: "media/gallery/dj-controller.jpg" },
  { type: "production", size: "tall", label: "Outdoor stage",       src: "media/gallery/garden-stage.jpg" },
  { type: "night",      size: "tall", label: "Sports event DJ",     src: "media/gallery/gym-dj.jpg" },
  { type: "production", size: "",     label: "Moving heads",        src: "media/gallery/bar-truss.jpg" },
  { type: "quince",     size: "",     label: "Quinceañera",         src: "https://images.unsplash.com/photo-1763625645366-b12410f63f6a?auto=format&fit=crop&w=1000&q=70" },
  { type: "quince",     size: "wide", label: "Grand entrance",      src: "https://images.unsplash.com/photo-1763959949927-b86ed20b3290?auto=format&fit=crop&w=1000&q=70" },
];

/* Videos: local mp4 (src) or embed URL (embed) */
const VIDEOS = [
  { poster: "media/wedding-recap.jpg", label: "Wedding recap", wide: true, src: "media/wedding-recap.mp4", embed: "" },
  { poster: "media/party-recap.jpg",   label: "Event highlights", loop: true, src: "media/party-recap.mp4", embed: "" },
  { poster: "media/lasers.jpg",        label: "Laser show",       loop: true, src: "media/lasers.mp4", embed: "" },
];

/* Reviews: add real ones only — { text, textES?, name, event } */
const REVIEWS = [];

/* ========================================================= */

let lang = "en";
try { lang = localStorage.getItem("rulitt-lang") || (navigator.language || "").startsWith("es") && "es" || "en"; } catch (e) {}
const t = (en, es) => (lang === "es" ? es : en);

const ICONS = {
  ring: '<circle cx="12" cy="14" r="6"/><path d="M9 4h6l-1.5 3h-3z"/>',
  crown: '<path d="M3 18h18M4 18 3 7l5 4 4-6 4 6 5-4-1 11"/>',
  party: '<path d="M4 20 9 7l8 8z"/><path d="M14 4v2M19 9h2M17 6l1.5-1.5"/>',
  disco: '<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4v16M6.5 6.5c3 2 8 2 11 0M6.5 17.5c3-2 8-2 11 0"/>',
  mega: '<path d="M3 10v4h3l7 5V5L6 10z"/><path d="M17 9a4 4 0 0 1 0 6M19.5 6.5a8 8 0 0 1 0 11"/>',
  speaker: '<rect x="6" y="2" width="12" height="20" rx="2"/><circle cx="12" cy="14" r="3.5"/><circle cx="12" cy="6.5" r="1.2"/>',
  light: '<path d="M8 3h8l-1 7H9z"/><path d="M9 10 5 21M15 10l4 11M12 10v11"/>',
  spark: '<path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4"/>',
  cloud: '<path d="M6 19a4 4 0 0 1 0-8 6 6 0 0 1 11.5-1.5A4.5 4.5 0 0 1 18 19z"/>',
  cam: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
};

const SERVICES = [
  { ic: "ring",  href: "#weddings", en: ["Wedding DJ & MC", "Music coordination, announcements, introductions, dances and reception entertainment."], es: ["DJ y MC para bodas", "Coordinación musical, anuncios, presentaciones, bailes y entretenimiento de recepción."], price: ["Package from $2,500", "Paquete desde $2,500"] },
  { ic: "crown", href: "#quinceaneras", en: ["Quinceañeras", "DJ, MC, lighting, sound and music coordination for quinceañeras and family celebrations."], es: ["Quinceañeras", "DJ, MC, luces, sonido y coordinación musical para quinceañeras y celebraciones familiares."] },
  { ic: "party", href: "#private", en: ["Private Events", "Birthdays, anniversaries, corporate events, celebrations and private parties."], es: ["Eventos privados", "Cumpleaños, aniversarios, eventos corporativos, celebraciones y fiestas privadas."] },
  { ic: "disco", href: "#nightlife", en: ["Nightclub & Bar Events", "DJ entertainment and nightlife promotion for bars, lounges, clubs and special events."], es: ["Clubs y bares", "DJ y promoción de nightlife para bares, lounges, clubs y eventos especiales."] },
  { ic: "mega",  href: "#nightlife", en: ["Event Promotion", "Event marketing, nightlife promotion, flyer campaigns, social media and event branding."], es: ["Promoción de eventos", "Marketing de eventos, promoción de nightlife, flyers, redes sociales y branding."] },
  { ic: "speaker", en: ["Professional Sound System", "Pro speakers and audio equipment for weddings, clubs, private events and larger venues."], es: ["Sistema de sonido profesional", "Bocinas y equipo de audio profesional para bodas, clubs, eventos privados y venues grandes."] },
  { ic: "light", en: ["Event Lighting", "Moving-head lighting, dance-floor lighting, uplighting and production lighting options."], es: ["Iluminación de eventos", "Cabezas móviles, luces de pista, uplighting y opciones de iluminación de producción."] },
  { ic: "spark", en: ["Cold Sparks / Special Effects", "Cold spark effects and other event enhancements, depending on the venue."], es: ["Chispas frías / Efectos", "Chispas frías y otros efectos especiales, según el venue."] },
  { ic: "cloud", href: "#effects", en: ["CO₂ Club Cannon", "High-energy CO₂ bursts for peak dance-floor moments."], es: ["Cañón de CO₂", "Ráfagas de CO₂ para los momentos pico de la pista."] },
  { ic: "light", href: "#effects", en: ["Uplighting", "Professional LED uplighting to match your colors, theme or venue décor."], es: ["Uplighting", "Uplighting LED profesional con los colores de tu evento, tema o decoración."] },
  { ic: "cloud", href: "#effects", en: ["Dancing on the Clouds", "Low-lying cloud effect for first dances, waltzes and grand entrances."], es: ["Bailando en las nubes", "Nube baja sobre la pista para primer baile, vals y entradas especiales."] },
  { ic: "cam",   en: ["360 Photo Booth", "360 photo booth available as an add-on for select events."], es: ["Cabina 360", "Cabina de fotos 360 disponible como extra para eventos seleccionados."] },
];

const FORM_SERVICES = [
  ["DJ", "DJ"], ["MC", "MC"], ["Sound system", "Sonido"], ["Lighting", "Iluminación"],
  ["Ceremony audio", "Audio de ceremonia"], ["Uplighting", "Uplighting"], ["Dancing on the Clouds", "Bailando en las nubes"],
  ["Cold sparks", "Chispas frías"], ["CO₂ effects", "Cañón de CO₂"],
  ["360 photo booth", "Cabina 360"], ["Event promotion", "Promoción de evento"], ["Not sure yet", "Aún no sé"],
];

const FAQ = [
  ["What types of events do you DJ?", "We provide entertainment for weddings, quinceañeras, birthdays, private parties, nightclub events, corporate events and other special occasions.",
   "¿Para qué tipo de eventos hacen DJ?", "Ofrecemos entretenimiento para bodas, quinceañeras, cumpleaños, fiestas privadas, eventos de club, eventos corporativos y otras ocasiones especiales."],
  ["What type of music do you play?", "Open format: Reggaeton, Hip-Hop, Regional Mexicano, Banda, Cumbia, Norteñas, Bachata, Latin, EDM, House, R&B, throwbacks and much more.",
   "¿Qué tipo de música tocan?", "Open format: reggaeton, hip-hop, regional mexicano, banda, cumbia, norteñas, bachata, música latina, EDM, house, R&B, throwbacks y mucho más."],
  ["Do you take song requests?", "Yes. We work with you before the event to understand your preferred music, must-play songs and songs you don't want played.",
   "¿Aceptan peticiones de canciones?", "Sí. Trabajamos contigo antes del evento para conocer tu música preferida, las canciones obligatorias y las que no quieres que suenen."],
  ["Do you provide MC services?", "Yes. MC services are available for weddings, quinceañeras, private events and other celebrations.",
   "¿Ofrecen servicio de MC?", "Sí. Tenemos MC para bodas, quinceañeras, eventos privados y otras celebraciones."],
  ["Do you provide your own sound system?", "Yes. Professional sound equipment can be included depending on the event package.",
   "¿Llevan su propio sistema de sonido?", "Sí. El equipo de sonido profesional puede incluirse según el paquete del evento."],
  ["Do you provide lighting?", "Yes. Different lighting packages are available depending on the size and style of the event.",
   "¿Ofrecen iluminación?", "Sí. Hay distintos paquetes de iluminación según el tamaño y estilo del evento."],
  ["Do you travel?", "Yes. Travel is available throughout Idaho and potentially outside Idaho depending on the event.",
   "¿Viajan?", "Sí. Viajamos por todo Idaho y posiblemente fuera del estado, según el evento."],
  ["How far in advance should I book?", "As early as possible — especially for weddings and popular weekend dates.",
   "¿Con cuánta anticipación debo reservar?", "Lo antes posible, sobre todo para bodas y fechas populares de fin de semana."],
  ["How do I reserve my date?", "Request availability through the website. A deposit and signed agreement may be required to officially reserve your date.",
   "¿Cómo aparto mi fecha?", "Solicita disponibilidad desde la web. Puede requerirse un depósito y un contrato firmado para apartar oficialmente tu fecha."],
  ["Can you DJ bilingual events?", "Yes. R.U.LITT Entertainment can accommodate events with both English- and Spanish-speaking guests.",
   "¿Pueden hacer eventos bilingües?", "Sí. R.U.LITT Entertainment atiende eventos con invitados que hablan inglés y español."],
];

const SOCIAL_SVG = {
  instagram: '<path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 3.8c2.7 0 3 0 4 .1 2.7.1 4 1.4 4.1 4.1.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.7-1.4 4-4.1 4.1-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1-.1-1.3-.1-4s0-3 .1-4C4 5.3 5.3 4 8 3.9c1 0 1.3-.1 4-.1ZM12 2c-2.7 0-3.1 0-4.1.1C4.3 2.2 2.2 4.3 2.1 7.9 2 8.9 2 9.3 2 12s0 3.1.1 4.1c.1 3.6 2.2 5.7 5.8 5.8 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c3.6-.1 5.7-2.2 5.8-5.8.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-3.6-2.2-5.7-5.8-5.8C15.1 2 14.7 2 12 2Z"/>',
  facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z"/>',
  tiktok: '<path d="M16.6 2h-3.4v13.6a2.9 2.9 0 1 1-2-2.8V9.4a6.3 6.3 0 1 0 5.4 6.2V8.8a7.9 7.9 0 0 0 4.4 1.4V6.8a4.5 4.5 0 0 1-4.4-4.8Z"/>',
};

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- renderers ---------- */
const svcHref = (h) => {
  if (!h) return $("#quote") ? "#quote" : "index.html#quote";
  return h.startsWith("#") && !$(h) ? "index.html" + h : h;
};
function renderServices() {
  if (!$("#svcGrid")) return;
  $("#svcGrid").innerHTML = SERVICES.map((s) => {
    const [title, desc] = s[lang];
    const price = s.price ? `<span class="price">${t(...s.price)}</span>` : `<span class="price q">${t("Request a Quote", "Solicita cotización")} →</span>`;
    return `<article class="svc reveal"${s.wide ? ' style="grid-column:span 2"' : ""}>
      <div class="svc-ic"><svg viewBox="0 0 24 24">${ICONS[s.ic]}</svg></div>
      <h3>${title}</h3><p>${desc}</p>${price}
      <a class="svc-link" href="${svcHref(s.href)}" aria-label="${esc(title)}"></a></article>`;
  }).join("");
}

const PH_GRAD = {
  wedding: "linear-gradient(160deg,rgba(242,198,109,.35),#0a0a0a)",
  quince: "linear-gradient(160deg,rgba(255,255,255,.35),#0a0a0a)",
  night: "linear-gradient(160deg,rgba(255,255,255,.22),#060606)",
  production: "linear-gradient(160deg,rgba(255,255,255,.28),#060606)",
};
function renderGallery() {
  if (!$("#galGrid")) return;
  $("#galGrid").innerHTML = GALLERY.map((g, i) => `
    <figure class="gal-item ${g.size} reveal" data-type="${g.type}" data-i="${i}" ${g.src ? "" : `style="background:${PH_GRAD[g.type]}"`}>
      ${g.src ? `<img src="${g.src}" alt="${esc(g.label)}" loading="lazy">` : `<div class="ph">${esc(g.label)}</div>`}
    </figure>`).join("");
}
function renderVideos() {
  if (!$("#vidGrid")) return;
  $("#vidGrid").innerHTML = VIDEOS.map((v) => `<div class="vid reveal${v.wide ? " wide" : ""}">${
    v.src ? `<video src="${v.src}"${v.poster ? ` poster="${v.poster}"` : ""} ${v.loop ? "autoplay muted loop" : "controls preload=\"none\""} playsinline></video>`
    : v.embed ? `<iframe src="${v.embed}" allow="autoplay; encrypted-media" allowfullscreen loading="lazy"></iframe>`
    : `${v.poster ? `<img class="vid-poster" src="${v.poster}" alt="" loading="lazy">` : ""}<div class="play">${esc(v.label)}<br>${t("Video coming soon", "Video próximamente")}</div>`}</div>`).join("");
}
function renderReviews() {
  const g = $("#revGrid"); if (!g) return;
  if (!REVIEWS.length) {
    g.innerHTML = `<div class="rev-empty">${t("Reviews from our clients are coming soon. Worked with us? We'd love to hear from you.", "Pronto publicaremos reseñas de nuestros clientes. ¿Ya trabajaste con nosotros? Nos encantaría saber tu opinión.")}
      ${CONFIG.instagram ? `<br><a class="btn btn-ghost btn-sm" href="${CONFIG.instagram}" target="_blank" rel="noopener">Instagram</a>` : ""}</div>`;
    return;
  }
  g.innerHTML = REVIEWS.map((r) => `<blockquote class="rev reveal"><div class="stars">★★★★★</div><p>“${esc(lang === "es" && r.textES ? r.textES : r.text)}”</p><cite>— ${esc(r.name)}${r.event ? ` · ${esc(r.event)}` : ""}</cite></blockquote>`).join("");
}
function renderFAQ() {
  if (!$("#faqList")) return;
  $("#faqList").innerHTML = FAQ.map(([qEn, aEn, qEs, aEs]) => `
    <div class="faq-item"><button class="faq-q" aria-expanded="false">${t(qEn, qEs)}</button><div class="faq-a"><div>${t(aEn, aEs)}</div></div></div>`).join("");
}
function renderFormServices() {
  if (!$("#svcChecks")) return;
  const checked = new Set($$("#svcChecks input:checked").map((i) => i.value));
  $("#svcChecks").innerHTML = FORM_SERVICES.map(([en, es]) => `<label><input type="checkbox" name="services" value="${en}"${checked.has(en) ? " checked" : ""}> ${t(en, es)}</label>`).join("");
}

/* ---------- language ---------- */
function applyLang() {
  document.documentElement.lang = lang;
  $$("[data-es]").forEach((el) => {
    if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
    el.innerHTML = lang === "es" ? el.dataset.es : el.dataset.en;
  });
  $$("[data-ph-es]").forEach((el) => {
    if (el.dataset.phEn === undefined) el.dataset.phEn = el.placeholder;
    el.placeholder = lang === "es" ? el.dataset.phEs : el.dataset.phEn;
  });
  $("#langBtn").textContent = lang === "es" ? "EN" : "ES";
  $("#langBtn").setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
  renderServices(); renderGallery(); renderVideos(); renderReviews(); renderFAQ(); renderFormServices();
  applyContact(); observeReveal(); applyFilter(currentFilter);
}

/* ---------- contact wiring ---------- */
const QUOTE = $("#quote") ? "#quote" : "index.html#quote";
function waLink(msg) {
  const text = msg || t("Hi R.U.LITT! I'd like to check availability for my event.", "¡Hola R.U.LITT! Quiero revisar disponibilidad para mi evento.");
  return CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}` : QUOTE;
}
function applyContact() {
  $$(".js-whatsapp").forEach((a) => { a.href = waLink(); if (CONFIG.whatsapp) { a.target = "_blank"; a.rel = "noopener"; } });
  $$(".js-call").forEach((a) => (a.href = CONFIG.phone ? `tel:${CONFIG.phone}` : QUOTE));
  $$(".js-sms").forEach((a) => (a.href = CONFIG.phone ? `sms:${CONFIG.phone}` : QUOTE));
  $$(".js-email").forEach((a) => (a.href = CONFIG.email ? `mailto:${CONFIG.email}` : QUOTE));
  $$(".js-phone-text").forEach((a) => (a.textContent = CONFIG.phoneDisplay || t("Call / Text", "Llamar / Texto")));
  $$(".js-email-text").forEach((a) => (a.textContent = CONFIG.email || "Email"));
  $$(".js-hours").forEach((s) => (s.textContent = t(CONFIG.hoursEN, CONFIG.hoursES) || t("by appointment", "con cita")));
  $("#socials").innerHTML = ["instagram", "facebook", "tiktok"].filter((k) => CONFIG[k])
    .map((k) => `<a href="${CONFIG[k]}" target="_blank" rel="noopener" aria-label="${k}"><svg viewBox="0 0 24 24">${SOCIAL_SVG[k]}</svg></a>`).join("");
}

/* ---------- media from config ---------- */
function applyMedia() {
  const hero = $(".hero"); if (!hero) return;
  if (CONFIG.heroVideo) {
    hero.insertAdjacentHTML("afterbegin", `<video class="hero-media" src="${CONFIG.heroVideo}" ${CONFIG.heroImage ? `poster="${CONFIG.heroImage}"` : ""} autoplay muted loop playsinline></video>`);
    hero.classList.add("has-media");
  } else if (CONFIG.heroImage) {
    hero.insertAdjacentHTML("afterbegin", `<img class="hero-media" src="${CONFIG.heroImage}" alt="">`);
    hero.classList.add("has-media");
  }
  Object.entries(CONFIG.featureImages).forEach(([k, src]) => {
    const el = $(`.vis-${k}`);
    if (!src || !el) return;
    el.insertAdjacentHTML("afterbegin", /\.(mp4|webm)$/i.test(src)
      ? `<video src="${src}" poster="${src.replace(/\.\w+$/, ".jpg")}" autoplay muted loop playsinline></video>`
      : `<img src="${src}" alt="" loading="lazy">`);
    el.classList.add("has-img");
  });
}

/* ---------- gallery filter + lightbox ---------- */
let currentFilter = "all";
function applyFilter(f) {
  currentFilter = f;
  $$("#filters .chip").forEach((c) => c.classList.toggle("active", c.dataset.f === f));
  $$(".gal-item").forEach((it) => it.classList.toggle("hide", f !== "all" && it.dataset.type !== f));
}
$("#filters")?.addEventListener("click", (e) => { const c = e.target.closest(".chip"); if (c) applyFilter(c.dataset.f); });
/* Lightbox walks through the photos visible under the current filter */
let lbList = [], lbPos = 0;
function lbShow(pos) {
  lbPos = (pos + lbList.length) % lbList.length;
  const g = GALLERY[lbList[lbPos]];
  $("#lbBody").innerHTML = `<img src="${g.src}" alt="${esc(g.label)}">`;
  $("#lbCount").textContent = `${lbPos + 1} / ${lbList.length}`;
}
const lbClose = () => { if ($("#lightbox")) $("#lightbox").hidden = true; document.body.style.overflow = ""; };
$("#galGrid")?.addEventListener("click", (e) => {
  const it = e.target.closest(".gal-item"); if (!it || !GALLERY[it.dataset.i].src) return;
  lbList = $$(".gal-item:not(.hide)").map((el) => +el.dataset.i).filter((i) => GALLERY[i].src);
  lbShow(lbList.indexOf(+it.dataset.i));
  $("#lightbox").hidden = false;
  document.body.style.overflow = "hidden";
});
$("#lightbox")?.addEventListener("click", (e) => {
  if (e.target.closest(".lb-prev")) return lbShow(lbPos - 1);
  if (e.target.closest(".lb-next")) return lbShow(lbPos + 1);
  if (e.target.closest(".lb-close") || e.target.id === "lightbox" || e.target.id === "lbBody") lbClose();
});
document.addEventListener("keydown", (e) => {
  if (!$("#lightbox") || $("#lightbox").hidden) return;
  if (e.key === "Escape") lbClose();
  if (e.key === "ArrowLeft") lbShow(lbPos - 1);
  if (e.key === "ArrowRight") lbShow(lbPos + 1);
});
/* Swipe on phones */
let lbX = null;
$("#lightbox")?.addEventListener("touchstart", (e) => { lbX = e.touches[0].clientX; }, { passive: true });
$("#lightbox")?.addEventListener("touchend", (e) => {
  if (lbX === null) return;
  const dx = e.changedTouches[0].clientX - lbX; lbX = null;
  if (Math.abs(dx) > 40) lbShow(lbPos + (dx < 0 ? 1 : -1));
});

/* ---------- FAQ ---------- */
$("#faqList")?.addEventListener("click", (e) => {
  const q = e.target.closest(".faq-q"); if (!q) return;
  const item = q.parentElement; const open = !item.classList.contains("open");
  item.classList.toggle("open", open); q.setAttribute("aria-expanded", open);
});

/* ---------- nav ---------- */
const nav = $("#nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 30), { passive: true });
$("#burger").addEventListener("click", () => nav.classList.toggle("open"));
$("#navLinks").addEventListener("click", (e) => { if (e.target.closest("a")) nav.classList.remove("open"); });
$("#langBtn").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("rulitt-lang", lang); } catch (e) {}
  applyLang();
});

/* Buttons with data-type pre-select the event type in the form */
document.addEventListener("click", (e) => {
  const s = e.target.closest("a[data-svc]");
  if (s && !$("#svcChecks")) { e.preventDefault(); location.href = "index.html?svc=" + encodeURIComponent(s.dataset.svc) + "#quote"; return; }
  if (s) $$(`#svcChecks input[value="${s.dataset.svc}"]`).forEach((i) => (i.checked = true));
  const b = e.target.closest("a[data-type]"); if (!b) return;
  if ($("#eventType")) $("#eventType").value = b.dataset.type;
});

/* ---------- reveal on scroll ---------- */
let io;
function observeReveal() {
  if (!("IntersectionObserver" in window)) { $$(".reveal").forEach((el) => el.classList.add("in")); return; }
  io ||= new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12 });
  $$(".reveal:not(.in)").forEach((el) => io.observe(el));
}

/* ---------- quote form ---------- */
const form = $("#quoteForm");
const msg = $("#formMsg");
if (form) {
form.event_date.min = new Date().toISOString().slice(0, 10);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (form._honey.value) return;
  let bad = false;
  $$("[required]", form).forEach((f) => { const ok = f.checkValidity(); f.classList.toggle("invalid", !ok); if (!ok) bad = true; });
  if (bad) { msg.className = "form-msg err"; msg.textContent = t("Please fill in the required fields.", "Por favor completa los campos obligatorios."); return; }

  const fd = new FormData(form);
  const data = Object.fromEntries([...fd.entries()].filter(([k]) => k !== "services" && k !== "_honey"));
  data.services = fd.getAll("services").join(", ") || "-";
  data.language = lang.toUpperCase();
  data._subject = `New ${data.event_type} inquiry — ${data.event_date} — ${data.name}`;
  data._template = "table";

  const btn = form.querySelector("button[type=submit]");
  btn.disabled = true;

  if (CONFIG.formEndpoint) {
    try {
      const r = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error(r.status);
      form.reset(); renderFormServices();
      msg.className = "form-msg ok";
      msg.textContent = t("Thanks! Your inquiry was sent. We'll get back to you soon with availability.", "¡Gracias! Tu solicitud fue enviada. Te contactaremos pronto con la disponibilidad.");
    } catch (err) {
      msg.className = "form-msg err";
      msg.textContent = t("Something went wrong. Please try WhatsApp or call us.", "Algo salió mal. Intenta por WhatsApp o llámanos.");
    }
  } else if (CONFIG.whatsapp) {
    const lines = [
      t("New event inquiry", "Nueva solicitud de evento"),
      `${t("Name", "Nombre")}: ${data.name}`, `${t("Phone", "Teléfono")}: ${data.phone}`, `Email: ${data.email}`,
      `${t("Event", "Evento")}: ${data.event_type} — ${data.event_date}`, `${t("Venue/city", "Lugar")}: ${data.venue_city}`,
      `${t("Guests", "Invitados")}: ${data.guest_count || "-"}`, `${t("Time", "Hora")}: ${data.start_time || "?"}–${data.end_time || "?"}`,
      `${t("Services", "Servicios")}: ${data.services}`, `${t("Music", "Música")}: ${data.music || "-"}`, data.message || "",
    ];
    window.open(waLink(lines.join("\n")), "_blank");
    msg.className = "form-msg ok";
    msg.textContent = t("Opening WhatsApp with your inquiry…", "Abriendo WhatsApp con tu solicitud…");
  } else {
    msg.className = "form-msg err";
    msg.textContent = t("Preview: the form will be connected once the business email is added.", "Vista previa: el formulario se conectará cuando se agregue el correo del negocio.");
  }
  btn.disabled = false;
});
$$("[required]", form).forEach((f) => f.addEventListener("input", () => f.classList.remove("invalid")));
}

/* ---------- init ---------- */
$("#year").textContent = new Date().getFullYear();
applyMedia();
applyLang();
$$(".section .h2, .section .kicker, .feature-visual, .night-card, .pillars li").forEach((el) => el.classList.add("reveal"));
observeReveal();

/* Logo: show media/logo.png if present, else keep the text wordmark */
$$(".logo-img").forEach((img) => {
  const show = () => { img.hidden = false; img.closest(".brand")?.classList.add("has-logo"); };
  if (img.complete && img.naturalWidth) show(); else img.addEventListener("load", show);
});

/* ---------- intro: "Welcome to" + logo, then blur/fade out ---------- */
(() => {
  const intro = $("#intro"); if (!intro) return;
  // Show the welcome intro only once per visit (not when coming back from another page)
  let seen = false;
  try { seen = sessionStorage.getItem("rulitt-intro") === "1"; sessionStorage.setItem("rulitt-intro", "1"); } catch (e) {}
  if (seen) { intro.remove(); document.body.classList.remove("intro-on"); return; }
  const logo = $(".intro-logo");
  const showLogo = () => { logo.hidden = false; intro.classList.add("has-logo"); };
  if (logo.complete && logo.naturalWidth) showLogo(); else logo.addEventListener("load", showLogo);
  const close = () => {
    if (intro.classList.contains("out")) return;
    intro.classList.add("out");
    document.body.classList.remove("intro-on");
    setTimeout(() => intro.remove(), 1300);
  };
  // If sound is blocked the intro shows "Tap to enter" and waits for the tap (max 9s)
  setTimeout(() => { if ($("#introTap")?.hidden !== false) close(); }, 3200);
  setTimeout(close, 9000);
  intro.addEventListener("click", close);
})();

/* ---------- music player ---------- */
(() => {
  const audio = $("#bgMusic"), player = $("#player"), vol = $("#plVol");
  if (!audio) return;
  try {
    const v = sessionStorage.getItem("rulitt-vol"); if (v !== null) vol.value = v;
    const tm = +sessionStorage.getItem("rulitt-time"); if (tm) audio.currentTime = tm;
  } catch (e) {}
  audio.volume = +vol.value;
  addEventListener("pagehide", () => { try { sessionStorage.setItem("rulitt-time", audio.currentTime); sessionStorage.setItem("rulitt-vol", vol.value); } catch (e) {} });
  let userPaused = false;
  const sync = () => player.classList.toggle("playing", !audio.paused);
  audio.addEventListener("play", sync); audio.addEventListener("pause", sync);
  const play = () => audio.play().catch(() => {});
  $("#plToggle").addEventListener("click", (e) => {
    e.stopPropagation();
    if (audio.paused) { userPaused = false; play(); } else { userPaused = true; audio.pause(); }
  });
  vol.addEventListener("input", () => (audio.volume = +vol.value));
  vol.addEventListener("click", (e) => e.stopPropagation());

  // Try autoplay; browsers usually block sound until the first tap/click,
  // so start on the first interaction (the intro asks for a tap).
  audio.play().catch(() => {
    const tap = $("#introTap"); if (tap) tap.hidden = false;
    const start = () => { if (!userPaused) play(); ["pointerdown", "keydown", "touchend"].forEach((ev) => removeEventListener(ev, start)); };
    ["pointerdown", "keydown", "touchend"].forEach((ev) => addEventListener(ev, start));
  });
})();

/* ---------- back to top ---------- */
(() => {
  const btn = $("#toTop"); if (!btn) return;
  addEventListener("scroll", () => btn.classList.toggle("show", scrollY > 700), { passive: true });
  btn.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
})();

/* ---------- cookie consent (essential vs. all) ---------- */
(() => {
  const bar = $("#cookieBar");
  const get = () => { try { return localStorage.getItem("rulitt-cookies"); } catch (e) { return null; } };
  const loadMap = () => {
    const f = $(".map iframe[data-src]"); if (!f) return;
    f.src = f.dataset.src; f.removeAttribute("data-src"); f.hidden = false;
    $("#mapPh")?.remove();
  };
  const choose = (v) => {
    try { localStorage.setItem("rulitt-cookies", v); } catch (e) {}
    if (bar) bar.hidden = true;
    if (v === "all") loadMap();
  };
  if (get() === "all") loadMap();
  if (bar && !get()) setTimeout(() => (bar.hidden = false), $("#intro") ? 3800 : 600);
  $("#cookieAll")?.addEventListener("click", () => choose("all"));
  $("#cookieEssential")?.addEventListener("click", () => choose("essential"));
  $("#mapLoad")?.addEventListener("click", () => choose("all"));
  $$(".js-cookie-settings").forEach((b) => b.addEventListener("click", () => { if (bar) bar.hidden = false; }));
})();

/* Pause background music when a video with sound starts */
document.addEventListener("play", (e) => {
  const v = e.target;
  if (v.tagName === "VIDEO" && v.controls && !v.muted) $("#bgMusic")?.pause();
}, true);

/* Pre-check a service passed from services.html (?svc=...) */
(() => {
  const v = new URLSearchParams(location.search).get("svc");
  if (v) $$("#svcChecks input").forEach((i) => { if (i.value === v) i.checked = true; });
})();

/* ---------- newsletter subscribe (FormSubmit) ---------- */
(() => {
  const f = $("#subForm"); if (!f) return;
  const msg = f.querySelector(".sub-msg");
  f.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (f._honey.value) return;
    const email = f.email.value.trim();
    if (!f.email.checkValidity() || !email) { msg.className = "sub-msg err"; msg.textContent = t("Enter a valid email.", "Escribe un correo válido."); return; }
    if (!CONFIG.formEndpoint) { msg.className = "sub-msg err"; msg.textContent = t("Coming soon.", "Muy pronto."); return; }
    const btn = f.querySelector("button"); btn.disabled = true;
    try {
      const r = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, type: "Newsletter subscriber", language: lang.toUpperCase(), page: location.pathname, _subject: "New subscriber — R.U.LITT website", _template: "table" }) });
      if (!r.ok) throw new Error(r.status);
      f.reset(); msg.className = "sub-msg ok"; msg.textContent = t("You're in! Thanks for subscribing.", "¡Listo! Gracias por suscribirte.");
    } catch (err) { msg.className = "sub-msg err"; msg.textContent = t("Something went wrong. Try again.", "Algo salió mal. Intenta de nuevo."); }
    btn.disabled = false;
  });
})();
