# VAIKUNTH — ASSETS TO SHOOT / UPLOAD

Every image and video the site expects, with the exact path each drops into.
Anything not yet supplied renders as a placeholder — the site works today.

**Folders to create at the repo root:**
```
images/         (exists)
video/          ← create this new folder
```

---

## PART A · SITE-WIDE ASSETS (shoot once, used everywhere)

### 1. Homepage hero background — silent cinematic loop
| File | Notes |
|------|-------|
| `video/hero.mp4` | 10–25 s silent loop. Slow pans over a room full of your furniture. Dark ambient lighting, warm accents. First and last frames should match so the loop is invisible. **1920×1080 H.264, under 20 MB.** |
| `images/hero.jpeg` *(already there — replace)* | Dark cinematic still from the video, shown while it loads. **1920×1200 JPG, under 300 KB.** Pick a frame that matches the video's mood. |

Then in `config.js`: `hero.video: "video/hero.mp4"`

---

### 2. The Atelier — behind-the-scenes compilation
This one drives two things: the homepage Atelier section, AND the **"Watch The Making"** button on every product page (which opens this video in a modal).

| File | Notes |
|------|-------|
| `video/atelier.mp4` | 30–60 s compilation cut. Wide workshop shots, hands, wood, brass, upholstery — cut like a film trailer. Silent. **1920×1080, under 30 MB.** |
| `images/atelier-hero.jpg` | Wide poster frame — the workshop or artisan silhouette. **1920×1200 JPG.** |

Then set `atelier.hero.video: "video/atelier.mp4"` in `config.js`.

---

### 3. Atelier process — five steps, five short loops
Each step below is one row in the alternating homepage grid. Video + poster.

| Step | Video path | Poster path | What to shoot |
|------|-----------|-------------|---------------|
| 01 The Wood      | `video/atelier-01.mp4` | `images/atelier-01-wood.jpg`    | Stacked seasoned planks. Hand running over grain. Close-up of end-grain rings. |
| 02 The Drawing   | `video/atelier-02.mp4` | `images/atelier-02-design.jpg`  | Charcoal sketch on paper, hand tracing a full-size drawing, dividers/rulers on wood. |
| 03 The Joinery   | `video/atelier-03.mp4` | `images/atelier-03-joinery.jpg` | Mortise being chiselled. Tenon slotting home. Dovetail dry-fit. |
| 04 The Carving   | `video/atelier-04.mp4` | `images/atelier-04-carving.jpg` | Chisel on a floral panel. Shavings falling. Artisan face in low light, focused. |
| 05 The Finish    | `video/atelier-05.mp4` | `images/atelier-05-finish.jpg`  | Oil rubbed in by hand. Brass polished. Velvet stretched. Piece emerging from shadow. |

**Every step video:** 1080p H.264, silent, 10–20 s, seamless loop, under 12 MB. **Match the colour grade across all five — same LUT, same temperature.**

---

### 4. Room scenes — the coverflow carousel
Five lifestyle images. One dominant image sits centered with text overlaid; the others float behind on both sides, auto-rotate every 5 s, and click to bring forward.

Because the center image is the hero, **shoot these tall and detailed** — every scene will hold the viewer's eye at full resolution when it rotates in.

| File | Setting name | Look |
|------|--------------|------|
| `images/scene-alpine.jpg` | The Alpine Villa | High windows, cold morning light, pine/stone outside |
| `images/scene-beach.jpg`  | The Beach House  | Open shutters, warm sand-tone light, sea in distance |
| `images/scene-study.jpg`  | The Warm Study   | Single lamp, heavy rug, wood-panelled walls, dim |
| `images/scene-family.jpg` | The Family Room  | Evening lamp, layered fabrics, lived-in richness |
| `images/scene-loft.jpg`   | The City Loft    | Concrete, glass, one piece softening modern edges |

**Format:** 1600×2000 JPG (4:5 portrait), under 400 KB. Can be photographed real rooms **or** AI-composited scenes.

---

## PART B · PER-PRODUCT ASSETS · 5 PHOTOS × 16 PRODUCTS = 80 SHOTS

Same five-angle recipe for every product. The homepage & collection cards cycle through all 5 on hover; the product page shows them as thumbnails + a click-to-zoom lightbox.

**The five angles, in order:**
1. **Primary** — full piece, straight on, dark backdrop, one warm key light
2. **3/4 angle** — hero angle, depth + one side detail
3. **Detail crop** — carving, brass inlay, upholstery stitch, drawer pull, headboard button
4. **Back / reverse** — proves solid construction, shows joinery honestly
5. **In context** — piece in a room; a chair, a rug, a plant — not over-staged

**Format:** 1600×2000 JPG (4:5 portrait), sRGB, under 400 KB each. Consistent dark backdrop + single warm key across every product so the collection reads as one family.

### File paths — one line per shot

Rename each shot to the exact path when you upload, then update `images: [...]` in `config.js`.

```
BEDS
  Nidra King Bed
    images/nidra-king-bed-1.jpg   ← currently uses images/nidra1-bed.png; replace
    images/nidra-king-bed-2.jpg
    images/nidra-king-bed-3.jpg
    images/nidra-king-bed-4.jpg
    images/nidra-king-bed-5.jpg

  Kohinoor Queen Bed
    images/kohinoor-queen-bed-1.jpg   →   -5.jpg

  Rajmahal Canopy King Bed
    images/rajmahal-canopy-king-1.jpg   →   -5.jpg

  Shubhra Upholstered Queen Bed
    images/shubhra-upholstered-queen-1.jpg   →   -5.jpg

SOFAS
  Rajvansh Royal 3-Seater Sofa
    images/rajvansh-sofa-1.jpg   ← currently uses images/rajvansh-sofa.png; replace
    images/rajvansh-sofa-2.jpg   →   -5.jpg

  Chandramukhi Curved 4-Seater
    images/chandramukhi-curved-sofa-1.jpg   →   -5.jpg

  Devgarh 5-Seater Sofa Set with Center Table
    images/devgarh-5-seater-set-1.jpg   →   -5.jpg
    (Slot 5 should be the FULL set — 3-seater, 2-seater, and table together.)

  Aashray Modern 3-Seater Sofa
    images/aashray-modern-3-seater-1.jpg   →   -5.jpg

  Meherangarh Corner Sectional
    images/meherangarh-corner-sofa-1.jpg   →   -5.jpg

DINING
  Annapurna 6-Seater Dining Table
    images/annapurna-6-seater-dining-1.jpg   →   -5.jpg

  Maharani 8-Seater Royal Dining Set
    images/maharani-8-seater-set-1.jpg   →   -5.jpg
    (Slot 5 = full set with all 8 chairs pulled around.)

  Suryamukhi 4-Seater Round Dining
    images/suryamukhi-4-seater-round-1.jpg   →   -5.jpg

STORAGE
  Padmini Royal Dressing Table
    images/padmini-dressing-table-1.jpg   →   -5.jpg
    (Include the matching stool in slot 5.)

  Meera Vanity Dresser with Mirror
    images/meera-vanity-dresser-1.jpg   →   -5.jpg

  Rajmahal 4-Door Almirah
    images/rajmahal-4-door-almirah-1.jpg   →   -5.jpg
    (Slot 4 open — showing hanging rail + drawers.)

  Devgarh 3-Door Mirrored Almirah
    images/devgarh-3-door-almirah-1.jpg   →   -5.jpg
    (Slot 3 = centre mirror straight-on.)
```

---

## PART C · OPTIONAL PER-PRODUCT MAKING VIDEOS

**Not required today.** The "Watch The Making" button on every product page currently opens the shared atelier compilation (Part A · 2).

If you later want the button to open a **product-specific** making video for your hero pieces (Nidra King Bed, Rajmahal Canopy, Devgarh Sofa Set, Maharani Dining Set), shoot short 30–60 s films of those specific pieces being made and I'll wire them per-product. Path convention would be:

```
video/making-nidra-king-bed.mp4
video/making-rajmahal-canopy-king.mp4
video/making-devgarh-5-seater-set.mp4
video/making-maharani-8-seater-set.mp4
```

Skip this section for the launch — the shared atelier film is enough.

---

## GRAND TOTAL

| Category | Files |
|----------|------:|
| Homepage hero — video + poster | 1 vid + 1 photo |
| Atelier hero — video + poster | 1 vid + 1 photo |
| Atelier process — 5 videos + 5 posters | 5 vid + 5 photo |
| Room scenes | 5 photo |
| Product shots (5 × 16) | 80 photo |
| **TOTAL for launch** | **7 videos + 92 photos** |
| *Optional per-product making videos* | *up to 4 more videos* |

---

## SUGGESTED 2-DAY SHOOT

**Day 1 — Atelier / making-of**
- **Morning** — workshop wides + wood-yard footage → hero compilation + Step 01
- **Afternoon** — Steps 02–05 (drawing, joinery, carving, finish), one artisan per step, tight lens
- **Evening** — grade everything to a single LUT (warm walnut / low key)

**Day 2 — Product + scenes**
- **Set up once** — dark backdrop, warm key light, tripod
- **Products** — run the 16 pieces through the 5-angle sequence, ~30 min per piece
- **Last two hours** — the 5 lifestyle scenes + slow room pans for the hero background video

---

## WHEN THE FILES ARRIVE

1. Drop everything into `images/` and `video/`.
2. Open `config.js`:
   - Replace each product's `images: [...]` with the real filenames.
   - Set `hero.video`, `atelier.hero.video`, and each `atelier.steps[].video` to the new paths.
3. Commit + push. GitHub Pages redeploys automatically.

Nothing else to touch. Every layout, animation, hover, coverflow, lightbox and modal already flows from `config.js` — the moment real assets land, the site becomes what you're picturing.
