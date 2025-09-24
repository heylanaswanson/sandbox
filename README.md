# Sandbox

This repo mirrors your 6‑week plan. Each week has:

- **/exercises**: tiny JS tasks
- **/mini-project-\***: a small project aligned to the weekly goal
- **README.md** with the day‑by‑day checklist (time blocks included)

### How to use

1. Create a new GitHub repo (or use this as the base).
2. Work in `weeks/week-XX` folders daily.
3. Push commits at least once per day with descriptive messages (see examples below).
4. Pin this repo on your GitHub profile.

### Recommended daily commit format

```
feat(w01d03): add truthy/falsy guards and tests
chore: set up ESLint + Prettier
docs: update Week 3 checklist
```

### Local dev tips

- Use **VS Code** with the recommended extensions in `.vscode/extensions.json`
- Run a quick static server for mini‑projects (e.g., `python3 -m http.server`)
- Keep API keys out of the repo (`.env` is gitignored)

### Folders

- `weeks/week-01 ... week-06`: exercises + mini‑projects
- `projects/`: optional larger or extra practice
- `plan/`: PDF/DOCX/XLSX checklists for your schedule

## CI (Prettier/ESLint)

This repo includes a GitHub Action that checks formatting and runs ESLint on every push/PR.

- Configure VS Code to format on save with Prettier for a smooth workflow.

## Deploy Options

### GitHub Pages

- Settings → Pages → Source: `main` (root) and open `/portfolio/`

### Netlify

- New site from Git → select repo
- Publish directory: `portfolio`
- Build command: _(leave blank)_

### Vercel

- Import repo into Vercel
- Project root: `/`
- Configure `vercel.json` to route to `portfolio/`

## Projects (highlights)

Below are links to your weekly mini‑projects. Add screenshots (PNG/GIF) into each mini‑project folder and update the image paths here.

| Week | Project                  | Live (when deployed)                                                | Tech             |
| ---- | ------------------------ | ------------------------------------------------------------------- | ---------------- |
| 1    | Calculator               | `weeks/week-01/mini-project-01-calculator/index.html`               | JS, DOM          |
| 2    | Student Grades Tracker   | `weeks/week-02/mini-project-02-student-grades-tracker/index.html`   | Arrays, Reduce   |
| 3    | Profile Card Generator   | `weeks/week-03/mini-project-03-profile-card-generator/index.html`   | Templates, DOM   |
| 4    | Shopping List Merger     | `weeks/week-04/mini-project-04-shopping-list-merger/index.html`     | Sets, Strings    |
| 5    | Library System (modules) | `weeks/week-05/mini-project-05-library-system-(modules)/index.html` | Modules, Classes |
| 6    | Dog API Viewer           | `weeks/week-06/mini-project-06-dog-api-viewer/index.html`           | Fetch, Async     |

Badges you can add at the top of each mini‑project README:

```
![status](https://img.shields.io/badge/status-active-success)
![a11y](https://img.shields.io/badge/a11y-checked-blue)
![license](https://img.shields.io/badge/license-MIT-green)
```

## Netlify Forms — notifications & redirects

- Deploy the `portfolio/` folder to Netlify (or connect via Git).
- Netlify auto-detects the form (`name="contact"`, `data-netlify="true"`).
- **Redirect on success**: The form posts to `/portfolio/success.html` (already added).
- **Notifications**: In Netlify → Site settings → Forms → Notifications, add your email/Slack notification.
- Optional: enable spam protection/honeypot (already included), or reCAPTCHA (add `data-netlify-recaptcha="true"` + widget).
# sandbox
