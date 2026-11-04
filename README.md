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
