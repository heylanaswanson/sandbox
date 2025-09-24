# Portfolio (Vite + React + MUI)

A proper React app using Vite and Material UI. It lists your mini-projects and links back to the static versions under `/weeks`.

## Setup
```bash
cd portfolio-vite-mui
npm install
npm run dev
# open http://localhost:5173
```

## Build & Deploy
```bash
npm run build
# outputs to dist/
```
For GitHub Pages, consider `base` in `vite.config.js` and publish `/dist`.
For Netlify/Vercel, drag-drop or connect the repo. Framework preset: Vite/React.
