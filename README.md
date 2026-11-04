# Hyeok Woo — academic website

Static, responsive personal website deployed with GitHub Pages at https://slave-woo.github.io/.

## Structure

- `index.html`: profile, introduction, research interests, selected publication, and contact
- `research.html`: research details and methods
- `publications.html`: accepted paper and current research
- `cv.html`: academic profile, research experience, talks, and skills
- `style.css`: shared layout, responsive styles, reduced-motion support, and print styles
- `script.js`: copyright year
- `assets/deep-field.jpg`: optimized background image

The one-page home structure and section colors take inspiration from https://kushallodha.github.io/; the implementation is original. Existing content and detailed page URLs are retained. Unverified education dates, a PDF CV, and DOI/arXiv links are omitted until supplied.

## Image credit

Webb’s First Deep Field (NIRCam Image). Credit: NASA, ESA, CSA, STScI.
Source: https://science.nasa.gov/asset/webb/webbs-first-deep-field-nircam-image/
The local JPEG is resized/compressed for web use and cropped/darkened by CSS.

## Preview and publish

Run `python3 -m http.server 8765` from this directory and open http://localhost:8765/.
No build step or package installation is required. GitHub Pages serves the repository root from `main`.

## Updating content

Edit the HTML directly. Update the selected paper on both the homepage and publication page. Preserve heading hierarchy, section IDs, navigation links, and image credit. Add verified CV dates and a PDF link only when the underlying information and file are available.

## Life photo journal

The last sidebar item opens `life.html`, with four photo slots for Travel, Board games, Cycling, and Minecraft. No sample experiences or personal photos are invented.

1. Add a photo to `assets/life/`, for example `travel.jpg`.
2. In the corresponding `figure` in `life.html`, replace its `div.photo-slot` with `<img class="life-photo" src="assets/life/travel.jpg" alt="A description of the photo">`.
3. Edit the `figcaption` text below it. Copy a whole `figure` to add another entry.
4. Commit and push to `main` to publish. Photos remain in the GitHub repository; the page does not expose a public upload form.

The sidebar is fixed on desktop. On small screens, Menu opens a vertical list; Escape closes it and returns keyboard focus to Menu.
