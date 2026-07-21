# Sophia Guseth — Portfolio Site

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for deployment

```bash
npm run build
```

Outputs a static `dist/` folder — this is what you push to Cloudflare Pages
(same pipeline you already used for the Boss Mode teaser: connect this repo
on GitHub, point Cloudflare Pages at it, build command `npm run build`,
output directory `dist`).

## File map

```
src/
  App.jsx           — top-level layout + page switching
  data.js           — ALL your editable content lives here (skills, work history, contact info)
  index.css         — the whole design system (colors, fonts, layout)
  components/
    Sidebar.jsx      — the file-tree nav
  pages/
    Home.jsx
    Projects.jsx
    About.jsx
    Contact.jsx
```

## To-do before this is launch-ready

- [ ] Swap the `Home.jsx` avatar area for a real photo (currently just a code block, no photo yet — add an `<img>` if you want one there)
- [ ] Add a real screenshot of Boss Mode in `Projects.jsx` (replace the `.project-shot` placeholder div with an `<img src="/screenshots/bossmode.png" />`)
- [ ] Drop your actual resume PDF into `public/resume.pdf` — the Download Resume button already points there
- [ ] Decide project #2 and add a second `<div className="project-card">` block in `Projects.jsx`
- [ ] Fill in "currently learning" in `data.js` or `About.jsx`
- [ ] Update the LinkedIn/GitHub links in `data.js` if anything's changed
