/* ============================================================
   VAIKUNTH — SITE CONFIG
   This is the ONLY file you edit to manage the website.
   Change text, prices, products, images here. Save. Push. Done.

   TO ADD A PRODUCT: copy any product block below, change the
   values, give it a unique id. To change an image: put your
   photo in the images/ folder and set image: "images/yourfile.jpg"
   ============================================================ */

const SITE = {
  brand: "VAIKUNTH",
  tagline: "Furniture for the home that is sacred to you",
  announcement: "Founding collection now open · Complimentary white glove delivery in Delhi NCR",

  // Contact — replace with your real details
  whatsapp: "919999999999",        // country code + number, no + sign
  email: "hello@vaikunth.in",
  phone: "+91 99999 99999",
  address: "Karnal, Haryana, India",
  instagram: "https://instagram.com/vaikunth",

  hero: {
    image: "images/hero.jpg",   // your big cover photo. 1920x1200px, dark/moody furniture shot
    eyebrow: "Handcrafted in Karnal since generations of soil and wood",
    title: "The Divine Abode,\nBuilt Into Furniture",
    sub: "Solid wood pieces made slowly, by hand, for homes that deserve permanence.",
    cta: "Explore the Collection"
  },

  story: {
    title: "Rooted in Grace",
    text: "Vaikunth is the abode of the eternal. We chose the name because a home is the closest thing to it that we build in one lifetime. Born from the family behind Grace of God Organic, we bring the same patience we give our plants to seasoned wood, hand joinery, and finishes that age with dignity. Every piece is made to be kept, repaired, and passed on."
  },

  craft: [
    { title: "Seasoned Solid Wood", text: "Sheesham, teak and mango wood, air dried and kiln seasoned so it lives calmly through Indian summers and monsoons." },
    { title: "Hand Joinery", text: "Mortise and tenon joints, no shortcuts. The strength is inside the wood, not in the hardware." },
    { title: "Finishes That Age Well", text: "Natural oils and hand rubbed polish that deepen in character every year." }
  ],

  collections: [
    { id: "living",  name: "Living",  desc: "Sofas, lounge chairs and tables for the room where life gathers." },
    { id: "dining",  name: "Dining",  desc: "Tables and seating built for long meals and longer conversations." },
    { id: "bedroom", name: "Bedroom", desc: "Beds and bedside pieces for the quietest hours." },
    { id: "decor",   name: "Objects", desc: "Consoles, shelves and light for the spaces in between." }
  ],

  products: [
    { id: "rajvansh-sofa", name: "Rajvansh Three Seater Sofa", collection: "living", price: 145000,
      image: "images/placeholder.svg",
      desc: "A deep, upright three seater in seasoned sheesham with hand tied cushioning. The kind of sofa a house is arranged around.",
      wood: "Sheesham (Indian Rosewood)", dimensions: "210 × 90 × 85 cm", finish: "Hand rubbed walnut oil" },
    { id: "aramya-chair", name: "Aramya Lounge Chair", collection: "living", price: 58000,
      image: "images/placeholder.svg",
      desc: "A low slung reading chair with a sculpted backrest and woven cane detail. Made for one person and one hour of quiet.",
      wood: "Teak", dimensions: "78 × 82 × 76 cm", finish: "Natural teak oil" },
    { id: "sheesh-table", name: "Sheesh Mahal Coffee Table", collection: "living", price: 42000,
      image: "images/placeholder.svg",
      desc: "A solid top coffee table with chamfered edges that catch the evening light. Grain selected board by board.",
      wood: "Sheesham", dimensions: "120 × 60 × 42 cm", finish: "Matte hard wax" },
    { id: "annapurna-dining", name: "Annapurna Dining Table", collection: "dining", price: 125000,
      image: "images/placeholder.svg",
      desc: "A six seater dining table with a two inch solid top and temple tapered legs. Built for twenty five years of family meals.",
      wood: "Mango wood, solid", dimensions: "180 × 95 × 76 cm", finish: "Food safe natural oil" },
    { id: "vanya-chairs", name: "Vanya Dining Chairs · Set of 2", collection: "dining", price: 36000,
      image: "images/placeholder.svg",
      desc: "Sculpted seat, gently curved back, no upholstery to wear out. Comfort carved into the wood itself.",
      wood: "Teak", dimensions: "45 × 50 × 88 cm each", finish: "Hand rubbed polish" },
    { id: "kalash-sideboard", name: "Kalash Sideboard", collection: "dining", price: 88000,
      image: "images/placeholder.svg",
      desc: "A long low sideboard with hand carved fluted doors and brass ring pulls. Storage that behaves like sculpture.",
      wood: "Sheesham", dimensions: "160 × 45 × 80 cm", finish: "Dark walnut oil" },
    { id: "nidra-bed", name: "Nidra King Bed", collection: "bedroom", price: 165000,
      image: "images/placeholder.svg",
      desc: "A king bed with a tall arched headboard, our signature silhouette. Joinery so solid it never learns to creak.",
      wood: "Sheesham", dimensions: "193 × 203 cm, headboard 130 cm", finish: "Hand rubbed walnut oil" },
    { id: "chandani-bedside", name: "Chandani Bedside Table", collection: "bedroom", price: 28000,
      image: "images/placeholder.svg",
      desc: "One drawer, one shelf, soft arched profile. Everything the last minutes of the day require.",
      wood: "Mango wood", dimensions: "45 × 40 × 60 cm", finish: "Matte hard wax" },
    { id: "svarna-console", name: "Svarna Console", collection: "decor", price: 52000,
      image: "images/placeholder.svg",
      desc: "A slim entry console with a brass inlay line running its full length. First impressions, handled.",
      wood: "Teak", dimensions: "120 × 35 × 80 cm", finish: "Natural oil, brass inlay" },
    { id: "aranya-shelf", name: "Aranya Bookshelf", collection: "decor", price: 72000,
      image: "images/placeholder.svg",
      desc: "Five open shelves in a stepped arch frame. Holds books, plants and everything a home collects.",
      wood: "Sheesham", dimensions: "100 × 35 × 190 cm", finish: "Dark walnut oil" },
    { id: "prakash-lamp", name: "Prakash Floor Lamp", collection: "decor", price: 18500,
      image: "images/placeholder.svg",
      desc: "A turned wood floor lamp with a handloom cotton shade. Warm light, warmer shadow.",
      wood: "Mango wood", dimensions: "38 × 38 × 150 cm", finish: "Natural oil" },
    { id: "mrida-stools", name: "Mrida Nesting Stools · Set of 2", collection: "decor", price: 24000,
      image: "images/placeholder.svg",
      desc: "Two carved stools that tuck into each other. Extra seating, side table, plant stand, whatever the day needs.",
      wood: "Sheesham", dimensions: "40 × 30 × 45 cm / 34 × 26 × 38 cm", finish: "Matte hard wax" }
  ],

  about: {
    title: "A Family That Grows Things",
    paras: [
      "We are the family behind Grace of God Organic, a working nursery in Karnal, Haryana, trusted by a community of over eight lakh gardeners across India. For years we have grown living things with patience. Vaikunth extends that patience to wood.",
      "Every Vaikunth piece is made by hand with master carpenters of our region, from seasoned solid wood, using joinery that predates screws. We do not chase trends and we do not discount our way into homes. We make furniture worth keeping, and we stand behind every joint.",
      "When you buy from Vaikunth, you deal directly with our family. We will know your name, your home, and your piece, for as long as you own it."
    ],
    promise: ["Solid wood only, honestly declared", "Direct family service on WhatsApp", "White glove delivery and placement", "Five year structural warranty"]
  }
};
