/* Builds the menu, footer and unit pages from content.js. No need to edit. */
(function () {
  const P = window.PORTFOLIO;
  const page = document.body.dataset.page;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const statusText = { complete: "Complete", "in-progress": "In progress", upcoming: "Upcoming" };
  const pill = (s) => `<span class="pill ${s}">${statusText[s] || s}</span>`;
  const done = (sec) => sec.evidence.filter((e) => e.file).length + sec.reflection.questions.filter((q) => q.answer.trim()).length;
  const total = (sec) => sec.evidence.length + sec.reflection.questions.length;

  /* ── Nav ── */
  const nav = document.createElement("header");
  nav.className = "nav";
  const isUnit = P.sections.some((s) => s.id === page);
  nav.innerHTML = `
    <div class="wrap nav-inner">
      <a class="brand" href="index.html">${esc(P.owner.name)} <span>· Teaching Portfolio</span></a>
      <button class="burger" aria-label="Menu" aria-expanded="false"><span></span></button>
      <ul class="menu">
        <li><a href="index.html" class="${page === "home" ? "active" : ""}">Overview</a></li>
        <li><a href="profile.html" class="${page === "profile" ? "active" : ""}">Career Profile</a></li>
        <li class="has-drop">
          <button class="${isUnit ? "active" : ""}" aria-expanded="false">Units</button>
          <ul class="drop">
            ${P.sections.map((s) => `
              <li><a href="${s.id}.html">
                <span><span class="d-title">${esc(s.label)}</span><span class="d-sub">${esc(s.title)}</span></span>
                ${pill(s.status)}
              </a></li>`).join("")}
          </ul>
        </li>
        <li><a href="index.html#contact">Contact</a></li>
      </ul>
    </div>`;
  document.body.prepend(nav);

  const burger = nav.querySelector(".burger");
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open);
  });
  const drop = nav.querySelector(".has-drop");
  const dropBtn = drop.querySelector("button");
  dropBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = drop.classList.toggle("open");
    dropBtn.setAttribute("aria-expanded", open);
  });
  if (window.matchMedia("(hover: hover)").matches) {
    let t;
    drop.addEventListener("mouseenter", () => { clearTimeout(t); drop.classList.add("open"); });
    drop.addEventListener("mouseleave", () => { t = setTimeout(() => drop.classList.remove("open"), 180); });
  }
  document.addEventListener("click", (e) => { if (!drop.contains(e.target)) drop.classList.remove("open"); });
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Footer ── */
  const foot = document.createElement("footer");
  foot.className = "footer";
  foot.innerHTML = `<div class="wrap"><span>© ${new Date().getFullYear()} ${esc(P.owner.name)} · ${esc(P.owner.qualification)}</span><span>${esc(P.owner.provider)}</span></div>`;
  document.body.append(foot);

  /* ── Home: journey cards + progress ── */
  const journey = document.getElementById("journey");
  if (journey) {
    journey.innerHTML = P.sections.map((s, i) => `
      <a class="card" href="${s.id}.html">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
          <span class="k">${String(i + 1).padStart(2, "0")} · ${esc(s.label)}</span>${pill(s.status)}
        </div>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.summary)}</p>
        <div class="foot"><span>${done(s)} of ${total(s)} items added</span><span class="more">View ›</span></div>
      </a>`).join("");
    const all = P.sections.reduce((a, s) => a + total(s), 0);
    const got = P.sections.reduce((a, s) => a + done(s), 0);
    const pct = Math.round((got / all) * 100);
    const lab = document.getElementById("progress-text");
    if (lab) lab.textContent = `${got} of ${all} items · ${pct}%`;
    const bar = document.getElementById("progress-bar");
    if (bar) requestAnimationFrame(() => setTimeout(() => (bar.style.width = pct + "%"), 400));
  }

  /* ── Unit pages ── */
  const sec = P.sections.find((s) => s.id === page);
  const main = document.getElementById("unit");
  if (sec && main) {
    document.title = `${sec.label} — ${sec.title} · ${P.owner.name}`;
    const idx = P.sections.indexOf(sec);
    const prev = P.sections[idx - 1], next = P.sections[idx + 1];
    const icon = (f) => {
      if (!f) return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
      if (/youtu|vimeo|\.mp4|\.mov|stream|video/i.test(f)) return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/></svg>';
      if (/^https?:/i.test(f)) return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1"/><path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"/></svg>';
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>';
    };
    const paras = (t) => t.trim().split(/\n\s*\n/).map((p) => `<p>${esc(p.trim())}</p>`).join("");
    main.innerHTML = `
      <section class="page-hero">
        <div class="wrap hero-anim">
          <div class="eyebrow">${esc(sec.label)} ${pill(sec.status)}</div>
          <h1>${esc(sec.title)}</h1>
          <p class="lead">${esc(sec.summary)}</p>
          <div class="units">${sec.units.map(([c, n]) => `<div class="unit-chip"><b>${esc(c)}</b>${n ? `<span>${esc(n)}</span>` : ""}</div>`).join("")}</div>
        </div>
      </section>

      <section class="section alt">
        <div class="wrap">
          <div class="section-head reveal"><h2>Collected evidence</h2><p>Completed work from my assessments in this unit.</p></div>
          <div class="evidence stagger">
            ${sec.evidence.map((e) => {
              const tag = e.file ? "a" : "div";
              const attrs = e.file ? ` href="${esc(e.file)}" target="_blank" rel="noopener"` : "";
              return `<${tag} class="ev ${e.file ? "" : "pending"}"${attrs}>
                <div class="ic">${icon(e.file)}</div>
                <div><div class="code">${esc(e.code)}</div><h3>${esc(e.title)}</h3><div class="src">${esc(e.source)}</div></div>
                <div class="act">${e.file ? "Open ↗" : "To be added"}</div>
              </${tag}>`;
            }).join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap narrow">
          <div class="section-head reveal"><h2>${esc(sec.reflection.title)}</h2><p>My reflection on this part of the course.</p></div>
          ${sec.reflection.media ? `<p class="media-link reveal"><a class="btn ghost" href="${esc(sec.reflection.media)}" target="_blank" rel="noopener">Watch / listen to my reflection ↗</a></p>` : ""}
          <div class="refl stagger">
            ${sec.reflection.questions.map((q, i) => `
              <details class="q"${i === 0 ? " open" : ""}>
                <summary>${esc(q.q)}<span class="plus"></span></summary>
                <div class="body">
                  <p class="prompt">${esc(q.prompt)}</p>
                  <div class="answer ${q.answer.trim() ? "" : "empty"}">${q.answer.trim() ? paras(q.answer) : "<p>Reflection to be added.</p>"}</div>
                </div>
              </details>`).join("")}
          </div>
          <nav class="pager">
            ${prev ? `<a href="${prev.id}.html"><small>‹ Previous</small><b>${esc(prev.label)}</b></a>` : `<a href="index.html"><small>‹ Back</small><b>Overview</b></a>`}
            ${next ? `<a class="next" href="${next.id}.html"><small>Next ›</small><b>${esc(next.label)}</b></a>` : ""}
          </nav>
        </div>
      </section>`;
  }

  /* ── Scroll reveal ── */
  const els = document.querySelectorAll(".reveal, .stagger");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("in"));
  }

  /* Hero parallax (home) */
  const hero = document.querySelector(".hero .wrap");
  if (hero && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("scroll", () => {
      const y = Math.min(window.scrollY, 600);
      hero.style.transform = `translateY(${y * 0.25}px) scale(${1 - y / 4000})`;
      hero.style.opacity = String(1 - y / 700);
    }, { passive: true });
  }
})();
