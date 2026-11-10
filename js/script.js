/* =========================================================
   js/script.js — builds the page from js/data.js.
   You normally do NOT need to edit this file.
   ========================================================= */

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// Builds an element. Text goes in with textContent, so data can never inject HTML.
function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
}

// Only normal web links are allowed (blocks "javascript:" and broken URLs).
function safeUrl(u) {
  try { const x = new URL(u); return /^https?:$/.test(x.protocol) ? x.href : null; } catch (e) { return null; }
}
function extLink(text, href, cls) {
  const a = el("a", cls, text);
  a.href = href; a.target = "_blank"; a.rel = "noopener noreferrer";
  return a;
}

// A photo box. If the image is missing, a placeholder with a caption shows instead.
function picture(src, alt, caption, ratio) {
  const box = el("span", "portrait");
  if (ratio) box.style.aspectRatio = ratio;
  box.append(el("span", "cap", caption));
  if (!src) { box.classList.add("missing"); return box; }
  const img = new Image();
  img.alt = alt;
  img.loading = "lazy";                       // loads only when scrolled near
  img.onerror = () => box.classList.add("missing");
  img.src = src;
  box.prepend(img);
  return box;
}

// A clickable card (used for productions and videos).
function tile(src, title, meta, ratio, onClick) {
  const b = el("button", "card");
  b.type = "button";
  const info = el("span", "info");
  info.append(el("span", "t", title), el("small", "", meta));
  b.append(picture(src, title, title, ratio), info);
  b.onclick = onClick;
  return b;
}

// ---------- Popup: one <dialog> reused for details, photos and videos ----------
const dlg = $("#dlg"), dlgBody = $("#dlg-body");
let step = null;                              // used by the arrow buttons (gallery only)

function openDialog(node, stepFn) {
  step = stepFn || null;
  $("#prev").hidden = $("#next").hidden = !step;
  dlgBody.replaceChildren(node);
  if (!dlg.open) dlg.showModal();             // Esc key + focus handling come built in
}
$("#x").onclick = () => dlg.close();
$("#prev").onclick = () => step && step(-1);
$("#next").onclick = () => step && step(1);
dlg.addEventListener("keydown", (e) => {
  if (step && e.key === "ArrowLeft") step(-1);
  if (step && e.key === "ArrowRight") step(1);
});
dlg.addEventListener("click", (e) => {        // click on the dark area outside = close
  const r = dlg.getBoundingClientRect();
  const outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  if (e.target === dlg && outside) dlg.close();
});
dlg.addEventListener("close", () => { dlgBody.replaceChildren(); step = null; });  // also stops videos

// ---------- Text sections ----------
function renderText() {
  $$(".name").forEach((n) => (n.textContent = SITE.name));
  $("#h-title").textContent = SITE.title;
  $("#h-intro").textContent = SITE.intro;
  SITE.bio.forEach((t) => $("#bio").append(el("p", "", t)));
  $("#year").textContent = new Date().getFullYear();
}

function renderContact() {
  const list = $("#contact-list");
  const mail = (label, addr) => {
    const li = el("li"), ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(addr);
    li.append(el("small", "", label));
    if (ok) { const a = el("a", "", addr); a.href = "mailto:" + addr; li.append(a); }
    else li.append(el("em", "", "[Add a professional email in js/data.js]"));
    return li;
  };
  list.append(mail("Professional email", SITE.email));
  if (SITE.managerEmail) list.append(mail("Management / representative", SITE.managerEmail));
  SITE.socials.forEach((s) => {
    const u = safeUrl(s.url);
    if (!u) return;                           // skip broken links
    const li = el("li"), f = el("li");
    li.append(el("small", "", "Social media"), extLink(s.label, u));
    f.append(extLink(s.label, u));
    list.append(li);
    $("#f-socials").append(f);
  });
}

// ---------- Awards, press, highlights (hide themselves when empty) ----------
function renderExtras() {
  const row = (main, sub, url) => {
    const li = el("li"), u = safeUrl(url);
    li.append(u ? extLink(main, u) : el("strong", "", main), el("small", "", sub));
    return li;
  };
  const fill = (sec, list, items, build) => {
    if (!items.length) return;                // stays hidden
    items.forEach((i) => $(list).append(build(i)));
    $(sec).hidden = false;
  };
  fill("#awards", "#award-list", AWARDS, (a) => row(a.name, [a.org, a.year, a.work].filter(Boolean).join(", "), a.url));
  fill("#press", "#press-list", PRESS, (p) => row(p.title, [p.source, p.date].filter(Boolean).join(", "), p.url));

  if (!SITE.showHighlights) return;           // only when you switch it on
  const counts = {};
  FILMS.filter((p) => !p.sample).forEach((p) => (counts[p.category] = (counts[p.category] || 0) + 1));
  const stats = Object.entries(counts).map(([k, n]) => [n, k + " credits"]);
  if (SITE.yearsActive) stats.push([SITE.yearsActive, "Years active"]);
  if (AWARDS.length) stats.push([AWARDS.length, "Awards"]);
  stats.forEach(([n, label]) => {
    const li = el("li");
    li.append(el("b", "", String(n)), el("span", "", label));
    $("#stats").append(li);
  });
  $("#highlights").hidden = !stats.length;
}

// ---------- Productions: full filmography ----------
// Duplicate ids are skipped (a warning shows in the browser console).
const seen = new Set();
const FILMS = PRODUCTIONS.filter((p) => {
  if (seen.has(p.id)) { console.warn("Duplicate id skipped:", p.id); return false; }
  seen.add(p.id);
  return true;
});

function showProduction(p) {
  const text = el("div");
  text.append(el("h3", "", p.title), el("p", "muted", [p.category, p.year].filter(Boolean).join(", ")));
  if (p.role) text.append(el("p", "", "Role: " + p.role));
  if (p.director) text.append(el("p", "", "Director: " + p.director));
  if (p.description) text.append(el("p", "muted", p.description));
  const url = safeUrl(p.externalUrl);
  if (url) text.append(extLink("Watch or learn more", url, "btn gold"));
  if (p.sample) text.append(el("p", "note", "Sample entry: replace it in js/data.js"));
  const box = el("div", "detail");
  box.append(picture(p.poster, p.title, p.title, "2/3"), text);
  openDialog(box);
}

function card(p) {
  const meta = [p.category, p.year, p.role].filter(Boolean).join(", ") + (p.sample ? " (sample)" : "");
  return tile(p.poster, p.title, meta, "2/3", () => showProduction(p));
}

const PAGE = 8;                               // cards shown before "Load more"
let cat = "All", shown = PAGE;

function matches(p) {
  const q = $("#q").value.trim().toLowerCase();
  const inCat = cat === "All" || p.category === cat;
  return inCat && (!q || [p.title, p.role, p.director].some((t) => (t || "").toLowerCase().includes(q)));
}

function drawGrid() {
  const list = FILMS.filter(matches).sort((a, b) => (b.year || 0) - (a.year || 0));  // newest first
  $("#grid").replaceChildren(...list.slice(0, shown).map(card));
  $("#empty").hidden = list.length > 0;
  $("#more").hidden = list.length <= shown;
}

function setCat(c) {
  cat = c;
  shown = PAGE;
  $$("#filters button").forEach((b) => b.setAttribute("aria-pressed", b.textContent === c));
  drawGrid();
}

function renderFilmography() {
  ["All", ...new Set(FILMS.map((p) => p.category))].forEach((c) => {
    const b = el("button", "chip", c);
    b.type = "button";
    b.onclick = () => setCat(c);
    $("#filters").append(b);
  });
  $("#q").addEventListener("input", () => { shown = PAGE; drawGrid(); });
  $("#clear").onclick = () => { $("#q").value = ""; setCat("All"); };
  $("#more").onclick = () => { shown += PAGE; drawGrid(); };
  setCat("All");
}

// ---------- Gallery + lightbox ----------
let idx = 0;
function showPhoto(i) {
  idx = (i + GALLERY.length) % GALLERY.length;
  const g = GALLERY[idx], img = new Image();
  img.className = "big-img";
  img.alt = g.alt;
  img.onerror = () => dlgBody.replaceChildren(el("p", "empty", "Photo not found: " + g.src));
  img.src = g.src;
  const box = el("div");
  box.append(img, el("p", "muted", g.alt));
  openDialog(box, GALLERY.length > 1 ? (d) => showPhoto(idx + d) : null);
}

function renderGallery() {
  GALLERY.forEach((g, i) => {
    const b = el("button");
    b.type = "button";
    b.setAttribute("aria-label", "Open photo: " + g.alt);
    b.append(picture(g.src, g.alt, "Add " + g.src.split("/").pop(), g.ratio || "4/5"));
    b.onclick = () => showPhoto(i);
    $("#gallery-grid").append(b);
  });
}

// ---------- Videos (YouTube only) ----------
const ytId = (id) => /^[\w-]{11}$/.test(id || "");

function videoTile(v) {
  return tile("https://i.ytimg.com/vi/" + v.id + "/hqdefault.jpg", v.title || "Video", "Play: " + (v.type || "video"), "16/9", () => {
    const wrap = el("div", "video"), f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + v.id;   // no autoplay
    f.title = v.title || "Video";
    f.allow = "encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    wrap.append(f);
    openDialog(wrap);
  });
}

function renderVideos() {
  const reel = ytId(SITE.showreel) ? { id: SITE.showreel, title: "Showreel", type: "acting showreel" } : null;
  const list = VIDEOS.filter((v) => ytId(v.id));
  if (!reel && !list.length) {
    $("#showreel").append(el("p", "empty", "No videos yet. Add official YouTube IDs in js/data.js (SITE.showreel and VIDEOS)."));
    return;
  }
  if (reel) $("#showreel").append(videoTile(reel));
  list.forEach((v) => $("#video-grid").append(videoTile(v)));
}

// ---------- Menu, scroll effects, missing hero photos ----------
function initNav() {
  const nav = $("#nav"), menu = $("#menu"), burger = $("#burger");
  const setMenu = (open) => {
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    burger.textContent = open ? "✕" : "☰";
  };
  burger.onclick = () => setMenu(!menu.classList.contains("open"));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  const onScroll = () => nav.classList.toggle("solid", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach((s) => s.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { rootMargin: "0px 0px -10% 0px" });
  items.forEach((s) => io.observe(s));
}

function guardStaticImages() {                // hero + about photos written in index.html
  $$("#home .portrait img, #about .portrait img").forEach((img) => {
    const miss = () => img.parentElement.classList.add("missing");
    img.addEventListener("error", miss);
    if (img.complete && img.naturalWidth === 0) miss();
  });
}

// Run every part separately, so one problem never breaks the rest of the page.
[renderText, renderContact, renderExtras, renderFilmography,
 renderGallery, renderVideos, initNav, initReveal, guardStaticImages].forEach((fn) => {
  try { fn(); } catch (err) { console.warn("Skipped:", fn.name, err); }
});
