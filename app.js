/* VAIKUNTH renderer — reads config.js. You should not need to edit this file. */
const inr = n => "₹ " + n.toLocaleString("en-IN");
const wa = msg => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
const q = s => document.querySelector(s);

function shell(active){
  q("#announce").textContent = SITE.announcement;
  q("#nav").innerHTML = `<div class="wrap nav-in">
    <a class="logo" href="index.html">${SITE.brand}</a>
    <button class="burger" onclick="document.querySelector('.nav-links').classList.toggle('open')">☰</button>
    <div class="nav-links">
      ${[["index","Home"],["collections","Collections"],["about","Our Story"],["contact","Contact"]]
        .map(([p,t])=>`<a href="${p}.html" class="${active===p?"on":""}">${t}</a>`).join("")}
    </div></div>`;
  q("#footer").innerHTML = `<div class="wrap">
    <div class="f-grid">
      <div><span class="logo">${SITE.brand}</span><p>${SITE.tagline}. Handcrafted solid wood furniture from ${SITE.address}.</p></div>
      <div><div class="f-head">Explore</div><a href="collections.html">Collections</a><a href="about.html">Our Story</a><a href="contact.html">Contact</a></div>
      <div><div class="f-head">Reach Us</div><a href="${wa("Namaste Vaikunth, I would like to know more.")}">WhatsApp</a><a href="mailto:${SITE.email}">${SITE.email}</a><a href="${SITE.instagram}" target="_blank">Instagram</a></div>
    </div>
    <div class="f-bottom"><span>© ${new Date().getFullYear()} ${SITE.brand} · A Grace of God Organic company</span><span>${SITE.address}</span></div>
  </div>`;
  document.body.insertAdjacentHTML("beforeend",
    `<a class="wa-float" aria-label="Chat on WhatsApp" href="${wa("Namaste Vaikunth, I am interested in your furniture.")}" target="_blank">✆</a>`);
}

const productCard = p => `<a class="card rv" href="product.html?id=${p.id}">
  <div class="card-in"><div class="frame"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
  <div class="card-body"><div class="coll-name">${SITE.collections.find(c=>c.id===p.collection).name}</div>
  <h3>${p.name}</h3><div class="price">${inr(p.price)}</div></div></div></a>`;

function renderHome(){
  const h = SITE.hero;
  q("#hero-img").style.backgroundImage = `url(${h.image})`;
  q("#hero-eyebrow").textContent = h.eyebrow;
  q("#hero-title").textContent = h.title;
  q("#hero-sub").textContent = h.sub;
  q("#hero-cta").textContent = h.cta;
  q("#featured").innerHTML = SITE.collections.map(c => productCard(SITE.products.find(p=>p.collection===c.id))).join("");
  q("#story-title").textContent = SITE.story.title;
  q("#story-text").textContent = SITE.story.text;
  q("#craft").innerHTML = SITE.craft.map(c=>`<div class="craft rv"><h3>${c.title}</h3><p>${c.text}</p></div>`).join("");
  // gentle parallax on hero arches
  const arches = document.querySelectorAll(".hero-arch");
  addEventListener("scroll",()=>{const y=scrollY;arches.forEach((a,i)=>a.style.transform=`translateY(${y*(i?.06:.1)}px)`)},{passive:true});
}

function renderCollections(){
  const cid = new URLSearchParams(location.search).get("c");
  const tabs = [{id:"",name:"All"},...SITE.collections];
  q("#coll-tabs").innerHTML = tabs.map(c=>`<a class="btn ghost" style="${(cid||"")===c.id?"background:var(--gold);color:var(--ink)":""}" href="collections.html${c.id?"?c="+c.id:""}">${c.name}</a>`).join("");
  const list = cid ? SITE.products.filter(p=>p.collection===cid) : SITE.products;
  const c = SITE.collections.find(x=>x.id===cid);
  q("#coll-title").textContent = c ? c.name : "All Collections";
  q("#coll-desc").textContent = c ? c.desc : "Every piece, every room.";
  q("#coll-grid").innerHTML = list.map(productCard).join("");
}

function renderProduct(){
  const p = SITE.products.find(x=>x.id===new URLSearchParams(location.search).get("id"));
  if(!p){ location.href="collections.html"; return; }
  document.title = p.name + " — " + SITE.brand;
  q("#pd").innerHTML = `<div class="frame rv"><img src="${p.image}" alt="${p.name}"></div>
  <div class="rv"><div class="eyebrow">${SITE.collections.find(c=>c.id===p.collection).name}</div>
    <h1>${p.name}</h1><div class="price">${inr(p.price)}</div>
    <p class="desc">${p.desc}</p>
    <dl class="spec"><dt>Wood</dt><dd>${p.wood}</dd><dt>Dimensions</dt><dd>${p.dimensions}</dd>
      <dt>Finish</dt><dd>${p.finish}</dd><dt>Delivery</dt><dd>White glove delivery and placement, 4 to 6 weeks, made to order</dd>
      <dt>Warranty</dt><dd>5 year structural warranty</dd></dl>
    <div class="cta-row">
      <a class="btn" target="_blank" href="${wa(`Namaste Vaikunth, I am interested in the ${p.name} (${inr(p.price)}). Please share details.`)}">Order on WhatsApp</a>
      <a class="btn ghost" href="contact.html">Ask a Question</a>
    </div></div>`;
  q("#more").innerHTML = SITE.products.filter(x=>x.collection===p.collection && x.id!==p.id).slice(0,3).map(productCard).join("");
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

/* 3D tilt on product cards + reveal on scroll */
function fx(){
  const io = new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("in")),{threshold:.12});
  document.querySelectorAll(".rv").forEach(el=>io.observe(el));
  if(matchMedia("(prefers-reduced-motion: reduce)").matches || matchMedia("(pointer: coarse)").matches) return;
  document.querySelectorAll(".card").forEach(card=>{
    const inner = card.querySelector(".card-in");
    card.addEventListener("mousemove",e=>{
      const r = card.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      inner.style.transform = `rotateY(${x*7}deg) rotateX(${-y*7}deg) translateZ(6px)`;
    });
    card.addEventListener("mouseleave",()=>inner.style.transform="");
  });
}

function boot(page){
  shell(page);
  ({index:renderHome,collections:renderCollections,product:renderProduct,about:renderAbout,contact:renderContact})[page]();
  fx();
}
