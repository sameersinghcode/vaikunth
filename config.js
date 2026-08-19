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
  announcement: "Hand-carved solid wood furniture from Karnal, Haryana · Now taking orders across North India",

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
      made: "Three tall doors in a warm marble-pattern finish with slim brass handles, over a deep fitted interior of rail, drawers and shelves. A clean, contemporary take on the family almirah." },

    /* ---------- BEDS (second collection) ---------- */
    { id: "amber-white-king", name: "Amber White Tufted King Bed", collection: "beds", price: 52000,
      images: ["images/amber-white-king-1.jpg"],
      desc: "A clean king bed with a soft white button-tufted headboard and footboard on a solid wood frame. Bright, modern and easy to live with.",
      wood: "Solid wood frame, tufted upholstery", dimensions: "King · 78 x 72 in", finish: "Matte wood, white tufting",
      made: "A crisp white-tufted headboard and matching footboard on a seasoned wood frame — the simplest way to make a bedroom feel calm and new." },

    { id: "shalini-grey-king", name: "Shalini Grey Carved King Bed", collection: "beds", price: 82000,
      images: ["images/shalini-grey-king-1.jpg"],
      desc: "A hand-carved king bed with a soft grey tufted headboard and carved footboard. Royal lines, restful colour.",
      wood: "Seasoned sheesham", dimensions: "King · 78 x 72 in", finish: "Walnut carving, grey tufting",
      made: "Carved by hand in warm walnut with a grey velvet tufted headboard and footboard. The carving is the drama; the colour keeps it calm." },

    { id: "noor-cream-king", name: "Noor Cream Tufted King Bed", collection: "beds", price: 72000,
      images: ["images/noor-cream-king-1.jpg"],
      desc: "A carved king bed with a cream-tufted headboard and a scrolled footboard. Soft, warm and quietly grand.",
      wood: "Seasoned sheesham", dimensions: "King · 78 x 72 in", finish: "Hand-rubbed walnut, cream tufting",
      made: "A scrolled, hand-carved frame cushioned in cream tufting — a warm, welcoming centrepiece for a master bedroom." },

    { id: "gulzar-carved-king", name: "Gulzar Carved King Bed", collection: "beds", price: 78000,
      images: ["images/gulzar-carved-king-1.jpg"],
      desc: "An ornately carved king bed with a tufted headboard framed by a mirror crest. Old-world grandeur, richly detailed.",
      wood: "Seasoned sheesham", dimensions: "King · 78 x 72 in", finish: "Dark walnut, tufted upholstery",
      made: "Deeply carved crest and posts around a buttoned tufted headboard — a bed that furnishes the whole room on its own." },

    { id: "mewar-maroon-king", name: "Mewar Maroon Velvet King Bed", collection: "beds", price: 88000,
      images: ["images/mewar-maroon-king-1.jpg"],
      desc: "A carved teak king bed dressed in deep maroon velvet tufting. Regal, warm and made to be noticed.",
      wood: "Seasoned teak", dimensions: "King · 78 x 72 in", finish: "Natural teak, maroon velvet",
      made: "Hand-carved teak with a maroon velvet tufted headboard and footboard, each button drawn by hand. A true maharaja's bed." },

    { id: "roshan-ivory-king", name: "Roshan Ivory Carved King Bed", collection: "beds", price: 96000,
      images: ["images/roshan-ivory-king-1.jpg"],
      desc: "An ivory-and-gold carved king bed with a deep tufted headboard. The grandest silhouette in the collection.",
      wood: "Seasoned sheesham, ivory-gold finish", dimensions: "King · 78 x 72 in", finish: "Ivory lacquer, gold-leaf detail",
      made: "An ivory-and-gold hand-carved frame around a deep tufted headboard — palace furniture, made for a room that wants a statement." },

    { id: "neelkanth-blue-king", name: "Neelkanth Blue & Gold King Bed", collection: "beds", price: 92000,
      images: ["images/neelkanth-blue-king-1.jpg"],
      desc: "A carved king bed in royal blue with gold detailing. Bold, distinctive, unforgettable.",
      wood: "Seasoned sheesham, gold detailing", dimensions: "King · 78 x 72 in", finish: "Royal blue upholstery, gold leaf",
      made: "Royal blue upholstery set into a hand-carved, gold-touched frame. For the bedroom that wants colour as much as craft." },

    { id: "rani-blush-king", name: "Rani Blush Carved King Bed", collection: "beds", price: 85000,
      images: ["images/rani-blush-king-1.jpg"],
      desc: "A hand-carved king bed with a soft blush tufted headboard and scrolled footboard. Warm, feminine and royal.",
      wood: "Seasoned sheesham", dimensions: "King · 78 x 72 in", finish: "Warm walnut, blush tufting",
      made: "A scrolled, hand-carved frame cushioned in blush velvet tufting — soft colour on serious craftsmanship." },

    { id: "firoza-storage-king", name: "Firoza Storage King Bed", collection: "beds", price: 46000,
      images: ["images/firoza-storage-king-1.jpg"],
      desc: "A modern king bed with a teal geometric base, full storage beneath and a clean padded headboard. Practical and fresh.",
      wood: "Solid wood, ply storage box", dimensions: "King · 78 x 72 in · box storage", finish: "Teal & white, padded headboard",
      made: "A hard-working modern bed with a deep storage box beneath and a bright teal-and-white finish — style and space together." },

    /* ---------- SOFAS (second collection) ---------- */
    { id: "ashok-grey-5", name: "Ashok Grey Wooden-Arm 5-Seater", collection: "sofas", price: 82000,
      images: ["images/ashok-grey-5-1.jpg"],
      desc: "A 3+1+1 sofa set with solid wooden arms and soft grey tufted cushions. Sturdy, handsome, everyday royal.",
      wood: "Solid wood frame, grey fabric", dimensions: "3 + 1 + 1 seater · centre table", finish: "Polished wood, grey tufting",
      made: "Solid wooden arms and a hand-built frame under deep grey tufted cushions — a set built to take a family's daily use for years." },

    { id: "rosewood-blush-5", name: "Rosewood Blush Curved 5-Seater", collection: "sofas", price: 88000,
      images: ["images/rosewood-blush-5-1.jpg"],
      desc: "A curved sectional in blush and grey tufting with a matching centre table. Soft colour, modern shape.",
      wood: "Solid wood frame, premium fabric", dimensions: "Curved sectional · seats 5 · centre table", finish: "Blush & grey tufting",
      made: "A gently curved sectional cushioned in blush and grey, seats filled by hand over a solid frame — a warm, modern living room in one order." },

    { id: "coffee-tufted-5", name: "Coffee Tufted 5-Seater Set", collection: "sofas", price: 92000,
      images: ["images/coffee-tufted-5-1.jpg"],
      desc: "A coffee-brown Chesterfield-style set with deep button tufting and a storage ottoman. Timeless and inviting.",
      wood: "Solid wood frame, premium fabric", dimensions: "3 + 1 + 1 seater · ottoman", finish: "Coffee-brown tufting",
      made: "Rolled arms, deep diamond tufting and a matching ottoman in a rich coffee brown — a classic set a room arranges itself around." },

    { id: "kanha-tan-5", name: "Kanha Tan Leatherette 5-Seater", collection: "sofas", price: 84000,
      images: ["images/kanha-tan-5-1.jpg"],
      desc: "A tan leatherette 3+1+1 set with clean tufting and a low table. Warm, wipeable, family-friendly.",
      wood: "Solid wood frame, leatherette", dimensions: "3 + 1 + 1 seater · centre table", finish: "Tan leatherette, tufted",
      made: "A warm tan leatherette set with tight tufting over a solid frame — good-looking, hard-wearing and easy to keep clean." },

    { id: "rosewater-striped-5", name: "Rosewater Striped 5-Seater", collection: "sofas", price: 86000,
      images: ["images/rosewater-striped-5-1.jpg"],
      desc: "A blush-and-cream striped tufted set with matching ottomans. Soft, cheerful and generous.",
      wood: "Solid wood frame, premium fabric", dimensions: "3 + 1 + 1 seater · 2 ottomans", finish: "Blush & cream stripe",
      made: "Blush-and-cream striped upholstery, hand-tufted over a solid frame, with two storage ottomans to match — a bright, welcoming set." },

    { id: "neelam-teal-5", name: "Neelam Teal Tufted 5-Seater", collection: "sofas", price: 88000,
      images: ["images/neelam-teal-5-1.jpg"],
      desc: "A deep teal tufted sectional with a glass-top table. Rich colour, modern comfort.",
      wood: "Solid wood frame, premium fabric", dimensions: "Sectional · seats 5 · centre table", finish: "Teal tufting, glass-top table",
      made: "A deep teal button-tufted sectional, seats filled by hand, paired with a glass-top table — a bold, comfortable centrepiece for a modern home." },

    { id: "meenakshi-ivory-5", name: "Meenakshi Ivory Brocade 5-Seater", collection: "sofas", price: 105000,
      images: ["images/meenakshi-ivory-5-1.jpg"],
      desc: "A carved royal set in ivory floral brocade with a matching table. Understated grandeur.",
      wood: "Seasoned sheesham, brocade fabric", dimensions: "3 + 1 + 1 seater · centre table", finish: "Carved wood, ivory brocade",
      made: "Hand-carved wooden frames upholstered in ivory floral brocade — a refined royal set for the room where guests are received." },

    { id: "badshah-royal-5", name: "Badshah Royal Carved 5-Seater", collection: "sofas", price: 135000,
      images: ["images/badshah-royal-5-1.jpg"],
      desc: "An ornate gilded carved set in deep upholstery with a matching centre table. The most regal set we make.",
      wood: "Seasoned sheesham, gilded carving", dimensions: "3 + 1 + 1 seater · centre table", finish: "Gilded carving, deep upholstery",
      made: "The showpiece: deeply carved and gilded frames, rich upholstery and a matching table, made together for a grand drawing room." },

    { id: "darbar-cream-5", name: "Darbar Cream & Gold 5-Seater", collection: "sofas", price: 118000,
      images: ["images/darbar-cream-5-1.jpg"],
      desc: "A carved cream-and-gold royal set with scrolled arms and a matching table. Warm, opulent, timeless.",
      wood: "Seasoned sheesham, gold-toned carving", dimensions: "3 + 1 + 1 seater · centre table", finish: "Gold-toned carving, cream upholstery",
      made: "Scrolled, gold-toned carved arms and cream upholstery, cut and built as a set — old-world opulence for a modern haveli." },

    { id: "vanraj-teak-5", name: "Vanraj Teakwood 5-Seater", collection: "sofas", price: 95000,
      images: ["images/vanraj-teak-5-1.jpg"],
      desc: "A solid teakwood carved sofa set with teal cushions and a matching table. Cool, airy and built to last.",
      wood: "Solid teak", dimensions: "3 + 1 + 1 seater · centre table", finish: "Natural teak, teal cushions",
      made: "Solid teak frames carved by hand, dressed in cool teal cushions — a breathable, long-lasting set for long afternoons." },

    /* ---------- DRESSING (second collection) ---------- */
    { id: "chandan-teak-dressing", name: "Chandan Teak Dressing Table", collection: "dressing", price: 36000,
      images: ["images/chandan-teak-dressing-1.jpg"],
      desc: "A solid teak carved dressing table with a tall mirror and a matching stool. Warm, sturdy and elegant.",
      wood: "Solid teak", dimensions: "Approx. 42 x 18 x 78 in with mirror", finish: "Hand-rubbed teak polish",
      made: "A tall carved mirror over a solid teak table with roomy drawers and a matching stool — a warm, lasting corner for a bedroom." }
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
