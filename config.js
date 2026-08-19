/* ============================================================
   SHIV KRIPA DECORS — SITE CONFIG
   This is the ONLY file you edit to manage the website.
   Change text, prices, products, images here. Save. Push. Done.

   IMAGE PATHS
   -----------
   • Product images: photos live in the images/ folder,
     named like images/<product-id>-1.jpg through -5.jpg.
     Update the images: [...] array below to match.
   • Hero background image: images/hero-shivkripa.jpg
     (set hero.video to a .mp4 path later for a moving hero)
   Best product size: 800 x 1000 px (4:5, portrait). JPG under 300 KB.
   ============================================================ */

const SITE = {
  brand: "SHIV KRIPA DECORS",
  tagline: "Royal furniture, made to be kept",
  announcement: "Now taking orders across North India · Free delivery & placement in Karnal, Panipat & Kurukshetra",

  // Contact — your real details
  whatsapp: "919896170317",
  email: "sameergr20@gmail.com",
  phone: "+91 98961 70317",
  address: "Karnal, Haryana, India",
  instagram: "https://instagram.com/shivkripadecors",

  hero: {
    video: "",                        // e.g. "video/hero.mp4"
    poster: "images/hero-shivkripa.jpg",
    eyebrow: "Solid wood · Hand-carved · Karnal",
    title: "Furniture Fit\nFor A Palace",
    sub: "Royal beds, hand-carved sofa sets, dressing tables and almirahs in seasoned solid wood. Built to last a generation, priced for a home.",
    cta: "Explore The Collection"
  },

  story: {
    title: "Rooted in Grace",
    text: "Shiv Kripa Decors brings together the finest hand-carved solid wood furniture of our region under one roof. Every piece is chosen for its joinery, its grain and its finish — furniture meant to be kept, repaired, and passed on. We deal with you directly, and we stand behind every piece we sell."
  },

  /* THE MAKING — real workshop photos. Edit captions or swap images here.
     Add/remove items freely; the grid adjusts on its own. */
  making: {
    eyebrow: "Inside The Workshop",
    title: "Made By Hand, In Karnal",
    text: "Every piece begins as seasoned solid wood and a craftsman's chisel — no CNC, no shortcuts. Floral panels pierced by hand, legs shaped by eye, joints cut to last a generation.",
    images: [
      { src: "images/making-1.jpg", caption: "Carved by hand, on the workshop floor" },
      { src: "images/making-2.jpg", caption: "Chisel and mallet — never a machine" },
      { src: "images/making-4.jpg", caption: "Floral panels, pierced by hand" },
      { src: "images/making-3.jpg", caption: "Every leg shaped by eye" },
      { src: "images/making-8.jpg", caption: "Built solid, joint by joint" },
      { src: "images/making-5.jpg", caption: "A crest, before it meets the frame" },
      { src: "images/making-6.jpg", caption: "Seasoned wood, ready for finish" },
      { src: "images/making-7.jpg", caption: "A mirror frame takes shape" }
    ]
  },

  /* The cinematic making-of section is turned off for now.
     To switch it on later, replace null with an atelier: {...} block. */
  atelier: null,

  /* Kept for reference — not rendered. */
  craft: [
    { title: "Solid Wood Frames", text: "Seasoned sheesham and teak under every piece." },
    { title: "Hand-Carved Detail", text: "Carved by master craftsmen of our region." },
    { title: "Finishes For Generations", text: "Hand-rubbed oil, premium fabric, full-grain detail." }
  ],

  collections: [
    { id: "beds",     name: "Royal Beds",      desc: "King beds with hand-carved and upholstered headboards, built to hold the quietest hours of a house." },
    { id: "sofas",    name: "Sofa Sets",       desc: "Royal carved and modern sofa sets. Deep seats, solid frames, upholstery that endures." },
    { id: "dressing", name: "Dressing Tables", desc: "Carved dressing tables and vanity chests, mirrored where it matters." },
    { id: "almirah",  name: "Almirahs",        desc: "Solid wood wardrobes with hand-carved panels, deep interiors and quiet grandeur." }
  ],

  /* One set of room scenes for the whole site. Empty = not shown. */
  scenes: [],

  /* PRODUCTS
     images[]: real photos, primary first.
     "made"  : short narrative shown on the product page. */
  products: [
    /* ---------- BEDS ---------- */
    { id: "maharaja-gold-king", name: "Maharaja Gold Damask King Bed", collection: "beds", price: 95000,
      images: ["images/maharaja-gold-king-1.jpg"],
      desc: "A king bed crowned by an ornate gold-and-black damask headboard, carved and gilded along every edge. The single grandest piece a bedroom can hold.",
      wood: "Seasoned sheesham, gilded carving", dimensions: "King · 78 x 72 in", finish: "Hand-carved, gold-leaf detailing",
      made: "The headboard is carved by hand and finished with a damask panel framed in gold-leaf moulding. A heavy, seasoned sheesham frame beneath keeps it silent for decades. This is a statement piece — built to be the first thing you see and the last thing you replace." },

    { id: "rajwada-carved-king", name: "Rajwada Carved King Bed", collection: "beds", price: 78000,
      images: ["images/rajwada-carved-king-1.jpg","images/rajwada-carved-king-2.jpg","images/rajwada-carved-king-3.jpg","images/rajwada-carved-king-4.jpg","images/rajwada-carved-king-5.jpg"],
      desc: "A tall arched headboard, hand-carved and softly tufted, on a solid wood frame. Classic havelī grandeur for a modern bedroom.",
      wood: "Seasoned sheesham", dimensions: "King · 78 x 72 in", finish: "Hand-rubbed walnut, tufted upholstery",
      made: "An arched headboard carved from solid sheesham, its crown worked by hand and its centre panel hand-tufted. Mortise-and-tenon joinery locks the frame — grand enough for the house, quiet enough for sleep." },

    { id: "shalimar-tufted-king", name: "Shalimar Tufted King Bed", collection: "beds", price: 62000,
      images: ["images/shalimar-tufted-king-1.jpg"],
      desc: "A clean king bed with a deep honeycomb-tufted headboard on a seasoned wood frame. Modern royal, softly done.",
      wood: "Seasoned wood frame, tufted upholstery", dimensions: "King · 78 x 72 in", finish: "Matte wood, diamond-tufted headboard",
      made: "A wide headboard hand-tufted in a diamond pattern, each button drawn through and knotted from behind. The frame is built in seasoned wood and finished to a matte satin so the eye rests on the fabric, not the joint." },

    { id: "chandni-upholstered-king", name: "Chandni Upholstered King Bed", collection: "beds", price: 72000,
      images: ["images/chandni-upholstered-king-1.jpg"],
      desc: "A carved king bed with a soft grey tufted headboard and a matching curved footboard. Restrained, elegant, easy to live with.",
      wood: "Seasoned sheesham", dimensions: "King · 78 x 72 in", finish: "Walnut carving, grey velvet tufting",
      made: "A hand-carved frame in warm walnut with a headboard and footboard upholstered in soft grey velvet. The carving is the drama; the colour keeps it calm. A royal silhouette that still belongs in a modern room." },

    { id: "kashi-storage-king", name: "Kashi Storage King Bed", collection: "beds", price: 48000,
      images: ["images/kashi-storage-king-1.jpg"],
      desc: "A practical king bed with a full storage box beneath and a clean panelled headboard. Solid wood where it counts, sensible where it helps.",
      wood: "Seasoned wood, ply storage box", dimensions: "King · 78 x 72 in · box storage", finish: "Teak-tone laminate & solid wood",
      made: "A honest, hard-working bed: a solid wood frame with a deep hydraulic-ready storage box beneath the mattress and a simple panelled headboard. Built for real bedrooms that need the space." },

    /* ---------- SOFAS ---------- */
    { id: "grande-sectional-8", name: "Grande L-Sectional 8-Seater with Table", collection: "sofas", price: 138000,
      images: ["images/grande-sectional-8-1.jpg"],
      desc: "A large L-shaped sectional in soft grey with a glass-top centre table and storage ottomans. Built for the room that hosts everyone.",
      wood: "Solid wood frame, premium fabric", dimensions: "L-sectional · seats 8 · centre table + 2 ottomans", finish: "Grey fabric, glass-top table",
      made: "Two long runs meeting at a deep corner, seats filled by hand and finished over a solid wood frame. Comes complete with a glass-top centre table and a pair of storage ottomans — one order, one full living room." },

    { id: "windsor-tufted-5", name: "Windsor Tufted 5-Seater Set", collection: "sofas", price: 92000,
      images: ["images/windsor-tufted-5-1.jpg"],
      desc: "A beige Chesterfield-style 3+1+1 set with deep button tufting and a matching table. Timeless, upright, and endlessly welcoming.",
      wood: "Solid wood frame, premium fabric", dimensions: "3 + 1 + 1 seater · centre table", finish: "Beige tufted upholstery",
      made: "Rolled arms, deep diamond tufting and a tight, upright seat over a hand-built solid wood frame. A three-seater and two armchairs with a matching table — the kind of set a house is arranged around." },

    { id: "rajgharana-rose-5", name: "Rajgharana Carved 5-Seater · Rose", collection: "sofas", price: 85000,
      images: ["images/rajgharana-rose-5-1.jpg"],
      desc: "A royal carved 3+1+1 set in rose upholstery with exposed hand-carved wooden frames and arms. Colour and craft, together.",
      wood: "Seasoned sheesham, premium fabric", dimensions: "3 + 1 + 1 seater", finish: "Polished wood, rose velvet cushions",
      made: "Exposed sheesham frames carved by hand along the arms and back, cushioned in a soft rose velvet. The wood is the jewellery here — polished, not hidden. A set that reads as royal from across the room." },

    { id: "padmavat-carved-5", name: "Padmavat Carved 5-Seater", collection: "sofas", price: 82000,
      images: ["images/padmavat-carved-5-1.jpg"],
      desc: "A hand-carved royal 3+1+1 sofa set with slatted wooden backs and plush cushions. Cool, airy and grand at once.",
      wood: "Seasoned sheesham, premium fabric", dimensions: "3 + 1 + 1 seater", finish: "Polished wood, rose cushions",
      made: "Turned legs, carved crests and slatted wooden backs finished in a warm polish, dressed with deep rose cushions. Built for long baithaks and warm afternoons." },

    { id: "noorjahan-royal-5", name: "Noorjahan Royal 5-Seater Set", collection: "sofas", price: 98000,
      images: ["images/noorjahan-royal-5-1.jpg"],
      desc: "An ornate carved royal set in cream-and-silver brocade with a glass-top centre table. The full drawing-room, done in one grand gesture.",
      wood: "Seasoned sheesham, brocade fabric", dimensions: "3 + 1 + 1 seater · centre table", finish: "Carved wood, cream brocade",
      made: "Deeply carved arms and crests over a solid frame, upholstered in a cream-and-silver brocade and paired with a matching glass-top table. This is the centrepiece set — made for the room where guests are received." },

    { id: "sheeshmahal-carved-5", name: "Sheesh Mahal Carved 5-Seater", collection: "sofas", price: 88000,
      images: ["images/sheeshmahal-carved-5-1.jpg"],
      desc: "A carved royal sofa set in gold-and-cream with a shaped back and matching table. Old-world grandeur, ready for a modern home.",
      wood: "Seasoned sheesham, premium fabric", dimensions: "3 + 1 + 1 seater · centre table", finish: "Gold-toned carving, cream upholstery",
      made: "Hand-carved crests and scrolled arms finished in a warm gold tone, cushioned in cream and paired with a matching centre table. A set built to make an entrance." },

    /* ---------- DRESSING TABLES ---------- */
    { id: "teakwood-dressing", name: "Teakwood Carved Dressing Table", collection: "dressing", price: 34000,
      images: ["images/teakwood-dressing-1.jpg"],
      desc: "A solid teak-tone dressing table with a carved crest, deep drawers and a broad mirror. Warm, polished and built to last.",
      wood: "Solid wood, teak finish", dimensions: "Approx. 48 x 18 x 72 in with mirror", finish: "Hand-rubbed teak polish",
      made: "A carved crest above a broad mirror, a run of deep drawers below with smooth runners and turned knobs. Finished in a warm teak polish you can feel under a fingertip." },

    { id: "rajmahal-dressing", name: "Rajmahal Dressing Table with Mirror", collection: "dressing", price: 38000,
      images: ["images/rajmahal-dressing-1.jpg"],
      desc: "A carved dressing table with a shaped mirror and panelled drawer front. Quiet grandeur for a corner of the bedroom.",
      wood: "Seasoned sheesham", dimensions: "Approx. 42 x 18 x 70 in with mirror", finish: "Dark walnut oil, brass knobs",
      made: "A shaped mirror set into a carved sheesham frame, above panelled drawers with hand-cut joinery and brass knobs. Finished in deep walnut oil that lets the grain gleam." },

    { id: "sheesha-dressing", name: "Sheesha Carved Dressing Table", collection: "dressing", price: 32000,
      images: ["images/sheesha-dressing-1.jpg"],
      desc: "An ornately carved dressing table with a scalloped mirror and stacked side drawers. As much a decor piece as a vanity.",
      wood: "Seasoned sheesham", dimensions: "Approx. 44 x 18 x 72 in with mirror", finish: "Warm walnut, carved detailing",
      made: "A scalloped mirror crowned with hand-carved detail, flanked by stacked drawers. The kind of piece that furnishes a corner all on its own." },

    { id: "belaa-console-dressing", name: "Belaa Console Dressing Table", collection: "dressing", price: 36000,
      images: ["images/belaa-console-dressing-1.jpg"],
      desc: "A slim carved console with a tall arched mirror and cabriole legs. Graceful footprint, full-length reflection.",
      wood: "Seasoned sheesham", dimensions: "Approx. 40 x 16 x 78 in with tall mirror", finish: "Hand-rubbed walnut polish",
      made: "A tall arched mirror over a slim carved console on shaped cabriole legs. Built for smaller bedrooms that still want a little theatre at the mirror." },

    { id: "heritage-dressing", name: "Heritage Dressing Table", collection: "dressing", price: 30000,
      images: ["images/heritage-dressing-1.jpg"],
      desc: "A classic carved dressing table with a shaped mirror and roomy drawers, in a choice of warm and light finishes.",
      wood: "Seasoned wood", dimensions: "Approx. 42 x 18 x 70 in with mirror", finish: "Warm walnut or ivory finish",
      made: "A dependable, good-looking dressing table — shaped mirror, carved apron, roomy drawers — offered in both a warm walnut and a soft ivory finish to suit the room." },

    /* ---------- ALMIRAHS ---------- */
    { id: "teakwood-2door-almirah", name: "Teakwood 2-Door Almirah", collection: "almirah", price: 52000,
      images: ["images/teakwood-2door-almirah-1.jpg"],
      desc: "A solid teak-tone two-door almirah with carved panels, a hanging section and interior shelves. Weighs what an almirah should.",
      wood: "Solid wood, teak finish", dimensions: "Approx. 42 x 22 x 84 in", finish: "Hand-rubbed teak polish",
      made: "Two carved doors on a solid carcass, fitted inside with a hanging rail and adjustable shelves. Finished in a warm teak polish — this is not flat-pack furniture." },

    { id: "rajwada-4door-almirah", name: "Rajwada 4-Door Almirah", collection: "almirah", price: 82000,
      images: ["images/rajwada-4door-almirah-1.jpg"],
      desc: "A grand four-door almirah with mirrored and panelled doors, a hanging section, drawers and shelves. The wardrobe your grandmother would have chosen.",
      wood: "Solid wood, laminate panels", dimensions: "Approx. 72 x 24 x 84 in", finish: "Wood-tone with mirror panels",
      made: "Four full-height doors — mirrored and panelled — over a deep carcass fitted with a hanging rail, drawers and shelves. Storage for a whole family, in one grand piece." },

    { id: "marble-3door-almirah", name: "Marble-Finish 3-Door Almirah", collection: "almirah", price: 68000,
      images: ["images/marble-3door-almirah-1.jpg"],
      desc: "A three-door almirah in a rich marble-pattern finish with brass handles. Modern, easy to keep, and quietly luxe.",
      wood: "Engineered wood, marble-pattern finish", dimensions: "Approx. 54 x 22 x 84 in", finish: "Marble-pattern laminate, brass handles",
      made: "Three tall doors in a warm marble-pattern finish with slim brass handles, over a deep fitted interior of rail, drawers and shelves. A clean, contemporary take on the family almirah." }
  ],

  about: {
    title: "A House of Fine Furniture",
    paras: [
      "Shiv Kripa Decors is a furniture house in Karnal, Haryana, bringing together the finest hand-carved solid wood furniture of our region — royal beds, sofa sets, dressing tables and almirahs — under one roof.",
      "We choose every piece for its joinery, its grain and its finish. We do not chase trends and we do not discount our way into homes. We sell furniture worth keeping, and we stand behind every piece.",
      "When you buy from Shiv Kripa Decors, you deal directly with us. We will know your name, your home, and your piece, for as long as you own it."
    ],
    promise: ["Solid wood, honestly declared", "Direct service on WhatsApp", "Delivery and placement", "Made-to-order options available"]
  }
};
