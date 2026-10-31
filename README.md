# kevin-nduka-portfolio

A portfolio site styled as a code editor (VS Code–flavored): a real file explorer, tabs, an
interactive terminal, and a status bar. All your CV content lives in `src/data/cv.js` — edit
that one file to update anything.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## 3. Photos

Already wired in:

- `public/kevin-headshot.png` — used as the small avatar (activity bar + About card)
- `public/kevin-at-work.jpeg` — used as the hero preview image at the top of About

To swap either later, just replace the file in `public/` with the same name, or update the
`src="/..."` path in `ActivityBar.jsx` / `About.jsx`.

## 4. Wire up the contact form (EmailJS — no backend needed)

The contact form sends email directly to you using [EmailJS](https://www.emailjs.com), which is
free for low volume and works entirely from the browser.

1. Create a free account at https://www.emailjs.com
2. Add an **Email Service** (e.g. connect your Gmail) — note the **Service ID**
3. Create an **Email Template** with variables `{{from_name}}`, `{{from_email}}`,
   `{{message}}`, `{{to_email}}` — note the **Template ID**
4. Grab your **Public Key** from Account → General
5. Copy `.env.example` to `.env` and fill in the three values:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Restart `npm run dev` after editing `.env`. Until these are filled in, the form will show a
friendly "not configured yet" message instead of failing silently.

## 5. Update your content

Everything text-based — summary, jobs, projects, skills, education, links — lives in:

```
src/data/cv.js
```

Edit that file and every section updates automatically.

## 6. The terminal (signature feature)

Click the terminal icon in the activity bar (left rail) or the "Terminal" label in the status
bar to open an interactive terminal. Visitors (and you) can type:

- `help` — list commands
- `whoami` — one-line bio
- `ls` — list files
- `cat about.jsx` / `open food-dash.md` — open any file as a tab
- `contact` — jump to the contact form
- `clear` — clear the terminal

## 7. Deploy

Works out of the box on Vercel or Netlify:

```bash
npm run build
```

Deploy the `dist/` folder. Remember to set the same three `VITE_EMAILJS_*` environment
variables in your hosting provider's dashboard (Vercel: Project Settings → Environment
Variables), not just locally in `.env`.

## Tech stack

- React 18 + Vite
- Tailwind CSS (custom "editor" color tokens in `tailwind.config.js`)
- lucide-react icons
- @emailjs/browser for the contact form
