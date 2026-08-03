# Bilirubin Calculator PWA – Hospital Miri NICU

## Files in this folder
- `index.html` — the app
- `manifest.json` — PWA metadata (name, icon, colours)
- `sw.js` — service worker (enables offline use)
- `icon-192.svg` + `icon-512.svg` — home screen icons
- `README.md` — this file

---

## How to deploy (FREE, takes ~2 minutes)

### Option A: Netlify Drop (Recommended — easiest)
1. Go to **https://app.netlify.com/drop** on a computer
2. Drag the entire `bili-pwa` folder onto the page
3. Netlify gives you a URL like `https://random-name-123.netlify.app`
4. Share that URL with NICU staff via WhatsApp

### Option B: GitHub Pages (Free, permanent URL)
1. Create a free GitHub account at github.com
2. New repository → name it `bili-calc` → Public
3. Upload all files in this folder
4. Settings → Pages → Source: main branch → Save
5. URL will be `https://yourusername.github.io/bili-calc`

---

## How staff install it (Add to Home Screen)

### iPhone / iPad (Safari only)
1. Open the URL in **Safari** (not Chrome)
2. Tap the **Share** button (box with arrow)
3. Scroll down → tap **"Add to Home Screen"**
4. Tap **Add** → icon appears on home screen

### Android (Chrome)
1. Open the URL in **Chrome**
2. A banner appears at the bottom → tap **Install**
   OR: tap ⋮ menu → **"Add to Home screen"**
3. Tap **Install** → icon appears

### Works fully offline after first visit ✓

---

## To update the app
Re-upload the new `index.html` to Netlify/GitHub.
Change `CACHE_NAME = 'bili-calc-v2'` in `sw.js` to force all devices to refresh.

---

*Preterm (<35 wks): NICE clinical guideline 98 (2010, updated 2016), matched exactly against
the unit's official reference table (Phototherapy/Exchange by gestation, 0/24/48/72h). At birth:
Phototherapy 40 µmol/L, Exchange 80 µmol/L for every gestation. At 72h (plateau): Exchange =
GA(wks)×10 µmol/L, Phototherapy = Exchange−100 µmol/L. All other hours are linear interpolation
between the 0h and 72h anchors, matching how the table's own 24h/48h columns were rounded.*
*Term/late-preterm (≥35 wks): AAP 2022 guideline, Malaysian-adapted.*
*For clinical decision support only — always verify with a senior clinician.*
