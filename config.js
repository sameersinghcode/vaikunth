/* ============================================================
   VAIKUNTH — SITE CONFIG
   This is the ONLY file you edit to manage the website.
   Change text, prices, products, images here. Save. Push. Done.

   IMAGE / VIDEO PATHS
   -------------------
   • Product images: put 5 photos per product in the images/ folder,
     named like images/<product-id>-1.jpg through -5.jpg.
     Update the images: [...] array below to match.
   • Hero background video: video/hero.mp4  (silent, 10-25s loop)
   • Atelier hero video:    video/atelier.mp4
   • Process step videos:   video/atelier-01.mp4 … video/atelier-05.mp4
   • Scene / room photos:   images/scene-<name>.jpg
   Leave a video field as "" to fall back to the poster image.
   ============================================================ */

const SITE = {
  brand: "VAIKUNTH",
  tagline: "Furniture fit for a palace",
  announcement: "Founding collection now open · Complimentary white glove delivery across North India",

  // Contact — replace with your real details
  whatsapp: "919896170317",
  email: "sameergr20@gmail.com",
  phone: "+91 98961 70317",
  address: "Karnal, Haryana, India",
  instagram: "https://instagram.com/vaikunth",

  hero: {
    video: "",                        // e.g. "video/hero.mp4"
    poster: "images/hero.jpeg",
    eyebrow: "Handcrafted in Karnal · Since generations",
    title: "Furniture Fit\nFor A Palace",
    sub: "Royal beds, hand-carved sofa sets, dining and dressers. Made by master craftsmen in solid seasoned wood.",
    cta: "Explore The Collection"
  },

  story: {
    title: "Rooted in Grace",
    text: "Vaikunth is the eternal abode. We chose the name because a home is the closest thing to it we build in one lifetime. Born from the family behind Grace of God Organic, we bring the same patience we give our plants to seasoned wood, hand joinery, and finishes that only deepen with the years. Every piece is made to be kept, repaired, and passed on."
  },

  /* THE ATELIER — cinematic making-of section on the homepage.
     Set atelier.hero.video to your compilation .mp4 when ready.
     Each step below can play its own short loop, or fall back to poster. */
  atelier: {
    hero: {
      video: "",                              // e.g. "video/atelier.mp4"
      poster: "images/atelier-hero.jpg",
      eyebrow: "Inside The Atelier",
      title: "A House Built,\nThe Old Way.",
      text: "In our Karnal workshop, seasoned wood meets patient hands. Every joint is set by a master carpenter, every carving cut from memory before it is cut by tool. No production line. No shortcut. Only the quiet discipline of making one piece well, before beginning the next."
    },
    steps: [
      { eyebrow: "01 · The Wood",
        title: "Grain, Chosen By Hand",
        video: "",                            // e.g. "video/atelier-01.mp4"
        poster: "images/atelier-01-wood.jpg",
        text: "Sheesham and teak, air-dried under our own roof for years before they are ever touched. Wood chosen board by board, grain read like handwriting. A piece cannot be older than the tree it came from — but it can be almost as calm." },
      { eyebrow: "02 · The Drawing",
        title: "Every Piece, First On Paper",
        video: "",
        poster: "images/atelier-02-design.jpg",
        text: "Nothing enters the workshop until it has passed the sketch. Full-size drawings in charcoal, proportions tuned by eye, silhouettes traced from Rajasthani havelis and Mughal courts. Old references, new lines." },
      { eyebrow: "03 · The Joinery",
        title: "The Bones Of A Piece",
        video: "",
        poster: "images/atelier-03-joinery.jpg",
        text: "Mortise and tenon, dovetail, dowel. Joints cut by hand and dry-fit before glue is even warmed. This is where a piece earns the right to last a hundred years. Everything you'll see later depends on what happens here." },
      { eyebrow: "04 · The Carving",
        title: "Cut From Memory",
        video: "",
        poster: "images/atelier-04-carving.jpg",
        text: "Floral panels, fluted columns, lotus feet — worked in with chisel and mallet by carvers who learned this trade from their fathers. No CNC. No template. Every carving is a little different, on purpose." },
      { eyebrow: "05 · The Finish",
        title: "Oiled, Rubbed, Aged",
        video: "",
        poster: "images/atelier-05-finish.jpg",
        text: "Hand-rubbed walnut oil, brass polished by hand, upholstery hand-stitched in premium velvet or full-grain leather. Finishing is not a step — it is a season. And it is what makes the piece feel, from the first touch, like it has already lived a lifetime with you." }
    ]
  },

  /* Kept for reference — no longer rendered. Atelier above replaces this. */
  craft: [
    { title: "Solid Wood Frames", text: "Seasoned sheesham and teak under every piece." },
    { title: "Hand-Carved Detail", text: "Chisel, mallet, memory. No CNC." },
    { title: "Finishes For Generations", text: "Hand-rubbed oil, premium velvet, full-grain leather." }
  ],

  collections: [
    { id: "beds",    name: "Royal Beds",           desc: "King and queen beds with hand-carved headboards, built to hold the quietest hours of a house." },
    { id: "sofas",   name: "Sofa Sets",            desc: "Royal, modern and curved sofa sets. Deep seats, tight joinery, upholstery that endures." },
    { id: "dining",  name: "Dining",               desc: "Solid-top dining tables and full sets, built for long meals and longer conversations." },
    { id: "storage", name: "Wardrobes & Dressers", desc: "Almirahs, dressing tables and vanity chests, hand-carved and mirrored where it matters." }
  ],

  /* Global room-scene visualisations — shown on every product page.
     One set for the whole site keeps the shoot budget sane; you can
     override per-product later by adding a scenes: [...] array to a product. */
  scenes: [
    { name: "The Alpine Villa",  image: "images/scene-alpine.jpg",
      desc: "Wide windows, cold light, long views of pine and stone." },
    { name: "The Beach House",   image: "images/scene-beach.jpg",
      desc: "Open shutters, warm sand light, sea breeze on wood." },
    { name: "The Warm Study",    image: "images/scene-study.jpg",
      desc: "A single lamp, a heavy rug, the smell of old books." },
    { name: "The Family Room",   image: "images/scene-family.jpg",
      desc: "The room where dinner ends and evenings begin." },
    { name: "The City Loft",     image: "images/scene-loft.jpg",
      desc: "Concrete, glass, and one piece that softens all of it." }
  ],

  /* PRODUCTS
     images[]: 5 photos per product — primary, 3/4 angle, detail crop, back, in-context.
     "made"  : short royal narrative shown on the product page.  */
  products: [
    /* ---------- BEDS ---------- */
    { id: "nidra-king-bed", name: "Nidra King Bed", collection: "beds", price: 185000,
      images: ["images/nidra1-bed.png","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "A king bed with a tall arched headboard, our signature silhouette. Joinery so solid it never learns to creak.",
      wood: "Sheesham (Indian Rosewood)", dimensions: "193 × 203 cm · headboard 130 cm", finish: "Hand rubbed walnut oil",
      made: "The arched headboard begins as a single seasoned sheesham plank, chosen for its grain and drawn full-size in charcoal before the first cut. Mortise-and-tenon joinery locks the frame; brass rosettes are pinned by hand. Twenty-two days from first cut to final polish, and three coats of hand-rubbed walnut oil, each allowed to rest a full week before the next." },

    { id: "kohinoor-queen-bed", name: "Kohinoor Queen Bed", collection: "beds", price: 158000,
      images: ["images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "A queen bed with a hand-carved headboard, brass inlay running along its arches. Small enough for the room, grand enough for the house.",
      wood: "Sheesham with brass inlay", dimensions: "152 × 203 cm · headboard 120 cm", finish: "Dark walnut oil, antique brass",
      made: "Carved over three weeks — floral panels chiseled by memory into the headboard, a fine brass rope inlay hammered flush along its arches. The frame is dowelled and glued in the old way, then finished in deep walnut oil until the grain gleams like still water." },

    { id: "rajmahal-canopy-king", name: "Rajmahal Canopy King Bed", collection: "beds", price: 245000,
      images: ["images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "A four-poster king bed with turned pillars and a fluted headboard. The room reorganises itself around it.",
      wood: "Teak", dimensions: "193 × 203 cm · height 220 cm", finish: "Natural teak oil, hand-rubbed",
      made: "Four turned teak pillars, each shaped on a hand lathe over two days. The fluted headboard is carved from a single wide plank. Cross-rails set with wooden pegs — no screws hold the canopy together. The entire piece can be dismantled and re-set, generation after generation, without a joint ever weakening." },

    { id: "shubhra-upholstered-queen", name: "Shubhra Upholstered Queen Bed", collection: "beds", price: 142000,
      images: ["images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "A quiet queen bed with a tufted velvet headboard on a seasoned sheesham frame. Modern royal, softly done.",
      wood: "Sheesham frame, deep velvet upholstery", dimensions: "152 × 203 cm · headboard 115 cm", finish: "Matte wood, midnight velvet",
      made: "A seasoned sheesham frame beneath a headboard hand-tufted in deep-pile midnight velvet. Each button is drawn through by hand and knotted from behind — a technique from a slower century. Legs are turned and rubbed to a matte satin so the eye rests on the fabric, not the wood." },

    /* ---------- SOFAS ---------- */
    { id: "rajvansh-sofa", name: "Rajvansh Royal 3-Seater Sofa", collection: "sofas", price: 145000,
      images: ["images/rajvansh-sofa.png","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "A deep, upright three-seater in seasoned sheesham with hand-tied cushioning and carved wooden arms. The kind of sofa a house is arranged around.",
      wood: "Sheesham frame, premium fabric", dimensions: "210 × 90 × 85 cm", finish: "Hand-rubbed walnut oil, wine velvet",
      made: "The arms are hand-carved from solid sheesham; the frame set with mortise-and-tenon joinery and dry-fit before glue. Springs are hand-tied in the old style, foam wrapped in cotton batting, wine velvet stretched and stapled by our upholstery master. Twelve weeks of drying and settling before it ships." },

    { id: "chandramukhi-curved-sofa", name: "Chandramukhi Curved 4-Seater", collection: "sofas", price: 235000,
      images: ["images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "A crescent-curved four-seater in deep boucle. Modern lines wrapped around a hand-built solid wood frame.",
      wood: "Sheesham frame, boucle upholstery", dimensions: "295 × 105 × 82 cm", finish: "Charcoal boucle, aged brass feet",
      made: "The crescent is built from a curved sheesham frame steamed to shape over a wooden buck — a technique older than any factory. Deep boucle is stitched around a hand-tied seat platform. Aged brass feet are hand-cast in a Karnal foundry, polished, and pinned before delivery." },

    { id: "devgarh-5-seater-set", name: "Devgarh 5-Seater Sofa Set with Center Table", collection: "sofas", price: 298000,
      images: ["images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "A full royal set — a 3-seater and a 2-seater with a matching solid-top center table. Hand-carved arms, brass claw feet, one house-warming, done.",
      wood: "Sheesham, brass detail", dimensions: "3+2 seater · 120×70 table", finish: "Dark walnut oil, oxblood velvet",
      made: "A three-seater, a two-seater, and a solid-top center table — all cut from the same batch of seasoned sheesham to keep the grain in conversation. Brass claw feet are hand-cast. Arms are chiseled with fluting drawn from Rajasthani windows. Made together, delivered together, meant to age together." },

    { id: "aashray-modern-3-seater", name: "Aashray Modern 3-Seater Sofa", collection: "sofas", price: 118000,
      images: ["images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "A low, clean three-seater with a solid teak base and full-grain leather. Modern silhouette, old-world frame.",
      wood: "Teak frame, full-grain leather", dimensions: "220 × 92 × 78 cm", finish: "Natural teak, cognac leather",
      made: "A low modern silhouette on an old-world frame. Solid teak finished in nothing but its own oil — the honey tone is the wood, not a stain. Full-grain cognac leather is hand-stitched, saddle-style, over a hand-tied seat. Six weeks to build. A lifetime to soften." },

    { id: "meherangarh-corner-sofa", name: "Meherangarh Corner Sectional", collection: "sofas", price: 215000,
      images: ["images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "An L-shape sectional built for the room that hosts everyone. Seasoned wood frame under a modern silhouette, no sag, no compromise.",
      wood: "Sheesham frame, premium fabric", dimensions: "290 × 210 × 80 cm", finish: "Slate boucle, aged brass feet",
      made: "Built as two independent pieces so it can be rearranged as your room changes. Sheesham frames beneath, boucle upholstery above, aged brass feet below. Every seat cushion is filled by hand and finished in a canvas liner before the outer fabric goes on — so it stays shaped, for decades." },

    /* ---------- DINING ---------- */
    { id: "annapurna-6-seater-dining", name: "Annapurna 6-Seater Dining Table", collection: "dining", price: 148000,
      images: ["images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "A six-seater dining table with a two-inch solid top and temple-tapered legs. Built for twenty-five years of family meals.",
      wood: "Mango wood, solid top", dimensions: "180 × 95 × 76 cm", finish: "Food-safe natural oil",
      made: "The top is a single two-inch slab of solid mango wood, chosen for a live-edge grain and planed level by hand. Temple-tapered legs are drawn from South Indian temple architecture, dowelled into the apron with no metal hardware. Finished with a food-safe natural oil that will darken with the first few meals — as it should." },

    { id: "maharani-8-seater-set", name: "Maharani 8-Seater Royal Dining Set", collection: "dining", price: 335000,
      images: ["images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "An eight-seater dining set — solid sheesham table with hand-carved apron and eight upright chairs to match. The full room.",
      wood: "Sheesham, brass detail", dimensions: "240 × 100 × 76 cm · 8 chairs", finish: "Dark walnut oil, velvet seats",
      made: "Eight matching chairs and a solid sheesham table, built as a set. The apron is carved with a lotus and vine pattern; brass inlay runs the length of the table. Chairs are upholstered in wine velvet over hand-tied webbing. If the table extends, the leaves are cut from the same board — so the grain runs continuous, end to end." },

    { id: "suryamukhi-4-seater-round", name: "Suryamukhi 4-Seater Round Dining", collection: "dining", price: 92000,
      images: ["images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "A round four-seater with a solid top and a single carved pedestal. Small room, big presence.",
      wood: "Sheesham, pedestal base", dimensions: "120 × 76 cm", finish: "Hand-rubbed matte polish",
      made: "A round top cut from a single wide sheesham board, joined at the seam with a spline you'll never see. The pedestal is turned on a hand lathe and carved with a subtle lotus at its base. Meant for smaller rooms that still want presence at the meal." },

    /* ---------- STORAGE ---------- */
    { id: "padmini-dressing-table", name: "Padmini Royal Dressing Table", collection: "storage", price: 74000,
      images: ["images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "A dressing table with an arched mirror, five drawers, and a hand-carved apron. Brass ring pulls, matching stool included.",
      wood: "Sheesham, arched mirror", dimensions: "120 × 45 × 165 cm · stool 40×30×45", finish: "Dark walnut oil, brass fittings",
      made: "An arched mirror set into a hand-carved sheesham frame; five drawers with hand-cut dovetails and antique brass ring pulls. The matching stool is upholstered in the same velvet as the drawer interiors. Fluted apron, carved feet, three weeks of joinery — a lifetime of daily use." },

    { id: "meera-vanity-dresser", name: "Meera Vanity Dresser with Mirror", collection: "storage", price: 58000,
      images: ["images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "A six-drawer vanity chest with a detachable mirror. Fluted drawer fronts, brass knobs, quietly royal.",
      wood: "Sheesham", dimensions: "110 × 45 × 150 cm", finish: "Matte walnut, antique brass",
      made: "A six-drawer chest with fluted drawer fronts, hand-cut dovetails, and brass knobs polished by hand. The detachable mirror rests on a keyed rail — no visible hardware. Finished in matte walnut oil that lets you feel the grain under a fingertip." },

    { id: "rajmahal-4-door-almirah", name: "Rajmahal 4-Door Almirah", collection: "storage", price: 178000,
      images: ["images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "A grand four-door almirah with hand-carved panels and a hanging section, drawers and shelves inside. The wardrobe your grandmother would have chosen.",
      wood: "Solid sheesham, brass detail", dimensions: "200 × 60 × 210 cm", finish: "Dark walnut oil, aged brass",
      made: "Four hand-carved doors set into a solid sheesham carcass built with hand-cut dovetails and dowelled shelves. Antique brass fittings, a fitted hanging rail, deep drawers along the base. Every panel is chiseled with the same lotus motif our workshop has been carving in Karnal for three generations." },

    { id: "devgarh-3-door-almirah", name: "Devgarh 3-Door Mirrored Almirah", collection: "storage", price: 138000,
      images: ["images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg","images/placeholder.svg"],
      desc: "A three-door almirah with a full-length mirror on the center door. Fluted side panels, deep interior, quiet grandeur.",
      wood: "Sheesham", dimensions: "150 × 58 × 210 cm", finish: "Matte walnut, mirror center",
      made: "Three doors, fluted side panels, and a full-length beveled mirror on the center door. Interior fitted with a hanging rail and adjustable shelves. Sheesham carcass, hand-cut dovetail joinery, matte walnut finish. It weighs what an almirah should — this is not flat-pack furniture." }
  ],

  about: {
    title: "A Family That Grows Things",
    paras: [
      "We are the family behind Grace of God Organic, a working nursery in Karnal, Haryana, trusted by a community of over eight lakh gardeners across India. For years we have grown living things with patience. Vaikunth extends that patience to wood.",
      "Every Vaikunth piece is made by hand with master carpenters of our region, in seasoned solid wood, using joinery that predates screws. We do not chase trends and we do not discount our way into homes. We make furniture worth keeping, and we stand behind every joint.",
      "When you buy from Vaikunth, you deal directly with our family. We will know your name, your home, and your piece, for as long as you own it."
    ],
    promise: ["Solid wood frames, honestly declared", "Direct family service on WhatsApp", "White glove delivery and placement", "Five year structural warranty"]
  }
};
