# Portfolio (React placeholder via CDN)

This is a lightweight portfolio using React 18 from a CDN (no build step). It links to your weekly mini‑projects.

## Local dev
Open `index.html` in a live server (VS Code Live Server or `python3 -m http.server`).

## GitHub Pages deploy (no build)
1. Commit and push this repo to GitHub.
2. In your repo, go to **Settings → Pages**.
3. Set **Source** to `main` and **/ (root)` or `/docs` if you move the site there.
4. If using the repo root, Pages will serve `index.html` from `/` after it builds.
5. Wait a minute; your site will be live at `https://<username>.github.io/<repo>/portfolio/`.

### Optional: use `/docs` for Pages
- Move the `portfolio/` folder to `docs/` and set Pages source to `/docs`.
- Update links if needed.

### Want a full React toolchain later?
You can migrate to Vite or Create React App. For now, this is zero‑config and fast.
