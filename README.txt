VAIKUNTH WEBSITE — HOW TO MANAGE AND DEPLOY
============================================

EDIT ANYTHING (no coding needed):
Open config.js in any text editor. Everything lives there:
products, prices, text, WhatsApp number, email, announcement bar.
1. Replace whatsapp: "919999999999" with your real number (country code, no + sign)
2. Replace email, phone, instagram link
3. Edit products: change name/price/desc, or copy a block to add a new product
4. Images: put your photo in the images folder, then set image: "images/yourphoto.jpg"
   Best size: 800 x 1000 px (4:5, portrait). JPG under 300 KB for speed.
Save the file. Push. Site updates. Nothing else to touch.

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
