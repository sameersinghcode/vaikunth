VAIKUNTH WEBSITE — HOW TO MANAGE AND DEPLOY
============================================

EDIT ANYTHING (no coding needed):
Open config.js in any text editor. Everything lives there:
products, prices, text, WhatsApp number, email, announcement bar.
1. Replace whatsapp: "919999999999" with your real number (country code, no + sign)
2. Replace email, phone, instagram link
3. Edit products: change name/price/desc, or copy a block to add a new product
4. Product images: put your photo in the images folder, then set image: "images/yourphoto.jpg"
   Best size: 800 x 1000 px (4:5, portrait). JPG under 300 KB for speed.
Save the file. Push. Site updates. Nothing else to touch.

ADD THE HERO VIDEO (background loop on homepage):
1. Create a folder named "video" at the root (next to images/).
2. Drop your file in as: video/hero.mp4
3. Open config.js and set:  video: "video/hero.mp4"
   (currently it's video: "" so the poster image shows instead)
4. Save. Push. The video will autoplay silently, loop forever.

VIDEO SPECS — keep it fast and cinematic:
- Format: .mp4 (H.264, AAC audio stripped or muted)
- Resolution: 1920 x 1080 (or 1280 x 720 for smaller size)
- Length: 10 to 25 seconds — it loops
- File size: under 20 MB (aim for 8-12 MB for a smooth mobile load)
- Style: slow pans, dark ambient lighting, close-ups of wood grain,
  brass, velvet. Silent (audio is muted regardless).
- Poster image (hero.poster in config.js) shows before the video
  loads and on slow connections — pick a frame that matches the
  mood so the transition is invisible.

DEPLOY ON GITHUB PAGES (10 minutes, free):
1. Create a new GitHub repository named: vaikunth
2. Upload ALL files and the images folder (drag and drop on github.com works)
3. Repo Settings > Pages > Source: Deploy from branch > main > root > Save
4. Live in 2 minutes at: https://YOURUSERNAME.github.io/vaikunth/

CONNECT YOUR DOMAIN (after buying it):
1. In your domain provider DNS, add a CNAME record:
   Host: www    Value: YOURUSERNAME.github.io
2. Repo Settings > Pages > Custom domain: www.yourdomain.com > Save
3. Tick Enforce HTTPS once it appears (can take up to an hour)

UPDATING LATER: edit config.js on github.com directly (pencil icon),
commit, done. Site refreshes itself.
