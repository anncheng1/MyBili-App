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
*BIND score: Johnson L, Brown AK, Bhutani VK. BIND — a clinical score for bilirubin induced
neurologic dysfunction in newborns. Pediatrics 1999;104:746–747.*
*Exchange transfusion volume/aliquot: standard double-volume exchange formulae and weight-banded
aliquot sizing as widely used in neonatal units (see in-app notes for details).*
*For clinical decision support only — always verify with a senior clinician.*

## Exchange Transfusion tab
- **Dynamic alert:** the Calculator tab shows a banner automatically when entered TSB is at/above,
  or within a built-in safety margin of, the current ET threshold — tap it to jump straight to the
  Exchange Tx tab.
- **BIND score:** bedside 0–9 acute bilirubin encephalopathy assessment (mental status, muscle
  tone, cry pattern), colour-coded interpretation.
- **Procedure Setup:** method (1 catheter push-pull / 2 catheters isovolumetric), operator/
  assistant/timekeeper, consent checkbox, and an "ill/unstable infant" toggle that caps the
  aliquot at 5 mL/kg regardless of gestation.
- **Exchange volume & aliquot calculator:** double-volume calculation using blood-volume estimates
  of 90 mL/kg (preterm, editable) / 80 mL/kg (term, editable); aliquot auto-suggested at 5–6 mL/kg
  (capped at 5 mL/kg if ill or preterm, max 20 mL/cycle), with a live warning if the aliquot
  exceeds 5–8% of circulating blood volume; total cycles, estimated duration (typically 90–120 min
  over 30–35 cycles for a double-volume exchange), and — for the 2-catheter method — infusion rate
  in mL/Hr.
- **Monitoring chart:** one row auto-generated per calculated cycle (cycle #, time, HR, SpO₂, BP,
  volume out/in with running cumulative totals, remarks), with a Pause & Check prompt every 3
  cycles and an Extended mid-ET review (blood gas, calcium — only if indicated, blood glucose) at
  the halfway point.
- **Complications reference:** catheter-related, haemodynamic, and electrolyte/metabolic
  complications, grouped for quick bedside reference.
- **Partial exchange transfusion calculator:** volume to correct polycythaemia/hyperviscosity, or
  packed-cell volume to correct severe anaemia without hypovolaemia — both formulas from the
  reference below.
- **Safety checklists:** pre-/intra-/post-procedure items, including that routine calcium
  gluconate administration is **not recommended** (correct only if clinically/biochemically
  indicated).
- **Print / Export:** the "Print / Export Protocol Summary" button compiles everything (patient
  identifiers, thresholds, BIND score, method/personnel, volume calc, the full monitoring chart,
  checked safety items, sign-off fields, and a timestamp) into a clean printable sheet — use your
  browser/iOS share-sheet "Print" → "Save to PDF" to export it.

*Exchange transfusion protocol content adapted from: Malaysian Paediatric Protocols, 5th edition,
Chapter 22 — Exchange Transfusion. This app generalises that reference's procedure and monitoring
chart into a dynamic calculator/chart — the source document remains the definitive record; always
verify against current institutional protocol.*
