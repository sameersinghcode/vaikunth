/* VAIKUNTH renderer — reads config.js. You should not need to edit this file. */
const inr = n => "₹ " + n.toLocaleString("en-IN");
const wa = msg => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
const q = s => document.querySelector(s);
const primary = p => (p.images && p.images[0]) || p.image || "images/placeholder.svg";

function shell(active){
  q("#announce").textContent = SITE.announcement;
  const navItems = [
    { id:"index",       href:"index.html",              label:"Home" },
    { id:"collections", href:"collections.html",        label:"Collections" },
    { id:"atelier",     href:"index.html#atelier-hero", label:"The Atelier" },
    { id:"about",       href:"about.html",              label:"Our Story" },
    { id:"contact",     href:"contact.html",            label:"Contact" }
  ];
  q("#nav").innerHTML = `<div class="wrap nav-in">
    <a class="logo" href="index.html">${SITE.brand}</a>
    <button class="burger" onclick="document.querySelector('.nav-links').classList.toggle('open')">☰</button>
    <div class="nav-links">
      ${navItems.map(n=>`<a href="${n.href}" class="${active===n.id?"on":""}">${n.label}</a>`).join("")}
    </div></div>`;
  q("#footer").innerHTML = `<div class="wrap">
    <div class="f-grid">
      <div><span class="logo">${SITE.brand}</span><p>${SITE.tagline}. Handcrafted solid wood furniture from ${SITE.address}.</p></div>
      <div><div class="f-head">Explore</div><a href="collections.html">Collections</a><a href="index.html#atelier-hero">The Atelier</a><a href="about.html">Our Story</a><a href="contact.html">Contact</a></div>
      <div><div class="f-head">Reach Us</div><a href="${wa("Namaste Vaikunth, I would like to know more.")}">WhatsApp</a><a href="mailto:${SITE.email}">${SITE.email}</a><a href="${SITE.instagram}" target="_blank">Instagram</a></div>
    </div>
    <div class="f-bottom"><span>© ${new Date().getFullYear()} ${SITE.brand} · A Grace of God Organic company</span><span>${SITE.address}</span></div>
  </div>`;
  document.body.insertAdjacentHTML("beforeend",
    `<a class="wa-float" aria-label="Chat on WhatsApp" href="${wa("Namaste Vaikunth, I am interested in your furniture.")}" target="_blank">✆</a>`);
}

/* Product card — carries all 5 image URLs for hover cycling */
const productCard = p => {
  const imgs = p.images || (p.image ? [p.image] : []);
  const dataImgs = imgs.map(encodeURIComponent).join("|");
  return `<a class="card rv" href="product.html?id=${p.id}" data-imgs="${dataImgs}">
    <div class="card-in"><div class="frame"><img src="${primary(p)}" alt="${p.name}" loading="lazy"></div>
    <div class="card-body"><div class="coll-name">${SITE.collections.find(c=>c.id===p.collection).name}</div>
    <h3>${p.name}</h3><div class="price">${inr(p.price)}</div></div></div></a>`;
};

/* ------- HOME ------- */
function renderHome(){
  const h = SITE.hero;
  const heroImg = q("#hero-img");
  const poster = h.poster || h.image;
  if (h.video) {
    heroImg.innerHTML = `<video autoplay muted loop playsinline preload="metadata" poster="${poster}"><source src="${h.video}" type="video/mp4"></video>`;
  } else {
    heroImg.style.backgroundImage = `url(${poster})`;
  }
  q("#hero-eyebrow").textContent = h.eyebrow;
  q("#hero-title").textContent = h.title;
  q("#hero-sub").textContent = h.sub;
  q("#hero-cta").textContent = h.cta;
  q("#featured").innerHTML = SITE.collections.map(c => productCard(SITE.products.find(p=>p.collection===c.id))).join("");
  q("#story-title").textContent = SITE.story.title;
  q("#story-text").textContent = SITE.story.text;
  renderAtelier();
  // parallax on hero arches
  const arches = document.querySelectorAll(".hero-arch");
  addEventListener("scroll",()=>{const y=scrollY;arches.forEach((a,i)=>a.style.transform=`translateY(${y*(i?.06:.1)}px)`)},{passive:true});
}

/* ------- ATELIER (cinematic making-of section on the homepage) ------- */
function renderAtelier(){
  const a = SITE.atelier; if(!a) return;
  const heroEl = q("#atelier-hero"); if(!heroEl) return;
  const h = a.hero;
  const heroMedia = h.video
    ? `<video autoplay muted loop playsinline preload="metadata" poster="${h.poster||''}"><source src="${h.video}" type="video/mp4"></video>`
    : `<div class="poster" style="background:url('${h.poster||''}') center/cover"></div>`;
  heroEl.innerHTML = `${heroMedia}
    <div class="wrap rv">
      <div class="eyebrow">${h.eyebrow}</div>
      <h2>${h.title}</h2>
      <p>${h.text}</p>
    </div>`;
  q("#atelier-process").innerHTML = a.steps.map(s => {
    const media = s.video
      ? `<video autoplay muted loop playsinline preload="metadata" poster="${s.poster||''}"><source src="${s.video}" type="video/mp4"></video>`
      : `<img src="${s.poster||'images/placeholder.svg'}" alt="${s.title}" loading="lazy">`;
    return `<div class="process-row rv">
      <div class="process-media">${media}</div>
      <div class="process-text">
        <div class="eyebrow">${s.eyebrow}</div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </div>
    </div>`;
  }).join("");
}

/* ------- COLLECTIONS ------- */
function renderCollections(){
  const cid = new URLSearchParams(location.search).get("c");
  const tabs = [{id:"",name:"All"},...SITE.collections];
  q("#coll-tabs").innerHTML = tabs.map(c=>`<a class="btn ghost" style="${(cid||"")===c.id?"background:var(--brass);color:var(--ink)":""}" href="collections.html${c.id?"?c="+c.id:""}">${c.name}</a>`).join("");
  const list = cid ? SITE.products.filter(p=>p.collection===cid) : SITE.products;
  const c = SITE.collections.find(x=>x.id===cid);
  q("#coll-title").textContent = c ? c.name : "All Collections";
  q("#coll-desc").textContent = c ? c.desc : "Every piece, every room.";
  q("#coll-grid").innerHTML = list.map(productCard).join("");
}

/* ------- PRODUCT DETAIL ------- */
function renderProduct(){
  const p = SITE.products.find(x=>x.id===new URLSearchParams(location.search).get("id"));
  if(!p){ location.href="collections.html"; return; }
  document.title = p.name + " — " + SITE.brand;
  const imgs = (p.images && p.images.length) ? p.images : [p.image || "images/placeholder.svg"];
  q("#pd").innerHTML = `
    <div class="rv">
      <div class="pd-gallery">
        <div class="frame-main" id="pd-main"><img src="${imgs[0]}" alt="${p.name}" id="pd-main-img"></div>
        <div class="pd-thumbs" id="pd-thumbs">
          ${imgs.map((u,i)=>`<div class="thumb ${i===0?'on':''}" data-i="${i}" data-src="${u}"><img src="${u}" alt="" loading="lazy"></div>`).join("")}
        </div>
      </div>
    </div>
    <div class="rv">
      <div class="eyebrow">${SITE.collections.find(c=>c.id===p.collection).name}</div>
      <h1>${p.name}</h1><div class="price">${inr(p.price)}</div>
      <p class="desc">${p.desc}</p>
      <dl class="spec">
        <dt>Wood</dt><dd>${p.wood}</dd>
        <dt>Dimensions</dt><dd>${p.dimensions}</dd>
        <dt>Finish</dt><dd>${p.finish}</dd>
        <dt>Delivery</dt><dd>White glove delivery and placement, 4 to 6 weeks, made to order</dd>
        <dt>Warranty</dt><dd>5 year structural warranty</dd>
      </dl>
      <div class="cta-row">
        <a class="btn" target="_blank" href="${wa(`Namaste Vaikunth, I am interested in the ${p.name} (${inr(p.price)}). Please share details.`)}">Order on WhatsApp</a>
        <a class="btn ghost" href="contact.html">Ask a Question</a>
      </div>
    </div>`;
  // Thumb clicks swap the main image
  const mainImg = document.getElementById("pd-main-img");
  document.querySelectorAll("#pd-thumbs .thumb").forEach(t => {
    t.addEventListener("click", () => {
      document.querySelectorAll("#pd-thumbs .thumb").forEach(x=>x.classList.remove("on"));
      t.classList.add("on");
      mainImg.src = t.dataset.src;
    });
  });
  // Click main image → lightbox
  document.getElementById("pd-main").addEventListener("click", () => {
    const active = document.querySelector("#pd-thumbs .thumb.on");
    openLightbox(imgs, active ? parseInt(active.dataset.i) : 0);
  });
  // Story
  if (p.made) {
    q("#pd-story").innerHTML = `<div class="wrap rv">
      <div class="eyebrow">How It Was Made</div>
      <h3>The Making of ${p.name}</h3>
      <p>${p.made}</p>
    </div>`;
  }
  // Scenes — coverflow carousel
  const scenes = (p.scenes && p.scenes.length) ? p.scenes : (SITE.scenes || []);
  if (scenes.length) {
    q("#pd-scenes").innerHTML = `
      <div class="wrap">
        <div class="sec-head rv"><div class="eyebrow">In Your Home</div><h2>Imagined In Every Setting</h2></div>
      </div>
      <div class="scene-stage rv" id="scene-stage">
        ${scenes.map((s,i) => `<div class="scene-slide" data-i="${i}">
          <img src="${s.image}" alt="${s.name}" loading="lazy">
          <div class="scene-label">
            <div class="s-eye">The Setting</div>
            <h4>${s.name}</h4>
            ${s.desc ? `<p>${s.desc}</p>` : ""}
          </div>
        </div>`).join("")}
      </div>
      <div class="scene-controls rv">
        <button class="scene-arrow scene-prev" type="button" aria-label="Previous scene">‹</button>
        <div class="scene-dots">${scenes.map((_,i)=>`<span data-i="${i}" role="button" aria-label="Go to scene ${i+1}"></span>`).join("")}</div>
        <button class="scene-arrow scene-next" type="button" aria-label="Next scene">›</button>
      </div>`;
    initSceneCarousel(document.getElementById("pd-scenes"));
  }
  // Related
  q("#more").innerHTML = SITE.products.filter(x=>x.collection===p.collection && x.id!==p.id).slice(0,3).map(productCard).join("");
}

/* Coverflow scene carousel — auto-rotate, click side to jump, hover pauses.
   Position class: pos-0 (center), pos-p1/pos-n1 (adjacent), pos-p2/pos-n2 (far). */
function initSceneCarousel(root){
  const slides = [...root.querySelectorAll(".scene-slide")];
  const dots = [...root.querySelectorAll(".scene-dots span")];
  const stage = root.querySelector(".scene-stage");
  const N = slides.length;
  if (!N) return;
  let center = 0, timer;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const arrange = () => {
    slides.forEach((el, i) => {
      const raw = (i - center + N) % N;
      const rel = raw > N/2 ? raw - N : raw;      // -2 … +2 for N=5
      const cls = rel === 0 ? "pos-0" : (rel > 0 ? "pos-p" : "pos-n") + Math.abs(rel);
      el.className = "scene-slide " + cls;
    });
    dots.forEach((d, i) => d.classList.toggle("on", i === center));
  };
  arrange();

  const step = d => { center = (center + d + N) % N; arrange(); };
  const goTo = i => { center = ((i % N) + N) % N; arrange(); };
  const play = () => { if (reduced) return; clearInterval(timer); timer = setInterval(() => step(1), 5200); };
  const pause = () => clearInterval(timer);

  // Click any side slide to bring it to center; center click does nothing.
  slides.forEach((el, i) => el.addEventListener("click", () => {
    if (i !== center) { goTo(i); play(); }
  }));
  root.querySelector(".scene-prev").addEventListener("click", () => { step(-1); play(); });
  root.querySelector(".scene-next").addEventListener("click", () => { step(1); play(); });
  dots.forEach((d, i) => d.addEventListener("click", () => { goTo(i); play(); }));

  stage.addEventListener("mouseenter", pause);
  stage.addEventListener("mouseleave", play);

  // Only auto-play when the section is on screen (perf).
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting ? play() : pause());
    }, { threshold: 0.25 }).observe(stage);
  } else {
    play();
  }
}


/* ------- LIGHTBOX ------- */
function openLightbox(imgs, start){
  let i = parseInt(start) || 0;
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `
    <button class="lb-btn lb-close" aria-label="Close">×</button>
    <button class="lb-btn lb-prev" aria-label="Previous">‹</button>
    <img id="lb-img" src="${imgs[i]}" alt="">
    <button class="lb-btn lb-next" aria-label="Next">›</button>
    <div class="lb-btn lb-count">${i+1} / ${imgs.length}</div>`;
  document.body.appendChild(lb);
  document.body.style.overflow = "hidden";
  const img = lb.querySelector("#lb-img");
  const count = lb.querySelector(".lb-count");
  const show = () => { img.src = imgs[i]; count.textContent = `${i+1} / ${imgs.length}`; };
  const prev = e => { e && e.stopPropagation(); i = (i - 1 + imgs.length) % imgs.length; show(); };
  const next = e => { e && e.stopPropagation(); i = (i + 1) % imgs.length; show(); };
  lb.querySelector(".lb-prev").onclick = prev;
  lb.querySelector(".lb-next").onclick = next;
  const close = () => { lb.remove(); document.body.style.overflow = ""; document.removeEventListener("keydown", key); };
  lb.querySelector(".lb-close").onclick = close;
  lb.onclick = e => { if (e.target === lb) close(); };
  const key = e => {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
  };
  document.addEventListener("keydown", key);
}

function renderAbout(){
  q("#about-title").textContent = SITE.about.title;
  q("#about-body").innerHTML = SITE.about.paras.map(t=>`<p class="rv">${t}</p>`).join("");
  q("#promise").innerHTML = SITE.about.promise.map(t=>`<div class="rv">${t}</div>`).join("");
}

function renderContact(){
  q("#c-info").innerHTML = [
    ["WhatsApp", SITE.phone, wa("Namaste Vaikunth, I have a question.")],
    ["Email", SITE.email, "mailto:"+SITE.email],
    ["Visit", SITE.address, null]
  ].map(([l,v,h])=>`<div class="c-item"><div class="eyebrow">${l}</div>${h?`<a href="${h}" target="_blank">${v}</a>`:`<a>${v}</a>`}</div>`).join("");
  q("#c-form").addEventListener("submit",e=>{
    e.preventDefault();
    const f = new FormData(e.target);
    location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Inquiry from "+f.get("name"))}&body=${encodeURIComponent(f.get("message")+"\n\nPhone: "+f.get("phone"))}`;
  });
}

/* ------- EFFECTS: reveal, 3D tilt, hover-cycle, pause off-screen videos ------- */
function fx(){
  const io = new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("in")),{threshold:.12});
  document.querySelectorAll(".rv").forEach(el=>io.observe(el));

  // Pause videos when off-screen (perf on the atelier/process section)
  if ("IntersectionObserver" in window) {
    const vio = new IntersectionObserver(entries=>{
      entries.forEach(e => {
        const v = e.target.matches("video") ? e.target : e.target.querySelector("video");
        if (!v) return;
        if (e.isIntersecting) { v.play().catch(()=>{}); }
        else { v.pause(); }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".atelier-hero, .process-media, .hero-img").forEach(el=>vio.observe(el));
  }

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Card image hover cycling (skip on touch — the tap opens the product page)
  if (!matchMedia("(pointer: coarse)").matches) {
    document.querySelectorAll(".card[data-imgs]").forEach(card => {
      const imgs = card.dataset.imgs.split("|").map(decodeURIComponent).filter(Boolean);
      if (imgs.length < 2) return;
      const imgEl = card.querySelector(".frame img");
      let i = 0, timer;
      card.addEventListener("mouseenter", () => {
        clearInterval(timer);
        timer = setInterval(() => {
          i = (i + 1) % imgs.length;
          imgEl.style.opacity = "0";
          setTimeout(()=>{ imgEl.src = imgs[i]; imgEl.style.opacity = "1"; }, 180);
        }, 950);
      });
      card.addEventListener("mouseleave", () => {
        clearInterval(timer);
        i = 0;
        imgEl.style.opacity = "1";
        imgEl.src = imgs[0];
      });
    });

    // 3D tilt on product cards
    document.querySelectorAll(".card").forEach(card=>{
      const inner = card.querySelector(".card-in");
      card.addEventListener("mousemove",e=>{
        const r = card.getBoundingClientRect();
        const x = (e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
        inner.style.transform = `rotateY(${x*5}deg) rotateX(${-y*5}deg) translateZ(6px)`;
      });
      card.addEventListener("mouseleave",()=>inner.style.transform="");
    });
  }
}

function boot(page){
  shell(page);
  ({index:renderHome,collections:renderCollections,product:renderProduct,about:renderAbout,contact:renderContact})[page]();
  fx();
}
