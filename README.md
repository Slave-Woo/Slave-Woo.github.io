# Hyeok Woo — academic website for GitHub Pages

An editable, responsive static website inspired by the restrained academic look of Kushal Lodha’s public homepage and CV, while retaining known details from the user’s Google Sites. This is an **original implementation**, not a copy of the other site's source code.

## Pages
- `index.html` — Home, introduction, research interests, selected publication, contact
- `research.html` — Research areas
- `publications.html` — Publications / research topics
- `cv.html` — Structured CV, intentionally includes placeholders for unverified academic dates
- `style.css` — Layout, colors, fonts, mobile styling
- `script.js` — Copyright year
- `assets/` — Favicon and place for CV PDF and portrait

## Publish to GitHub Pages
1. On GitHub, create a **public** repository named `YOUR_USERNAME.github.io`.
2. Unzip this archive and upload all files and the `assets` folder to the repository root. Do **not** upload the containing folder instead of its contents.
3. Open repository **Settings → Pages**, select **Deploy from a branch** and **main / (root)**, then Save.
4. Visit `https://YOUR_USERNAME.github.io/` after deployment completes.
5. Keep the Google Sites site active until the new site is checked.

## Edits before making this your official website
- **CV:** Complete education dates, previous degrees, talks and activities from your existing CV. The public Google Sites Home page did not expose the CV text, so these were not invented.
- **CV download:** Place your PDF as `assets/Hyeok_Woo_CV.pdf`. After adding the file, replace the CV placeholder text in `cv.html` with a link: `<a href="assets/Hyeok_Woo_CV.pdf" download>Download CV</a>`.
- **Publications:** Add confirmed DOI and arXiv links; update the JCAP status if already published.
- **Scholarly links:** Add Google Scholar / INSPIRE-HEP / GitHub links once the exact profile URLs are known.
- **Photos:** Add your portrait to assets and insert in home if desired. No stock photo was substituted for your portrait.
- **Contact:** Public office address and phone were transcribed from Google Sites; remove them if you do not wish to republish them.

## Local preview
Open `index.html` in your browser, or from the extracted folder run `python -m http.server 8000` and visit `http://localhost:8000`. The pages work without a build step.

## References
- Existing site: https://sites.google.com/view/hyeok/home
- Layout reference: https://kushallodha.github.io/
- CV organization reference: https://kushallodha.github.io/CV/index.html
