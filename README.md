# Hemang Patel — Portfolio

A single-page developer portfolio with **two switchable experiences** from the same data:

- **Simple (2D)** — a fast, lightweight, recruiter-friendly scrolling page.
- **Immersive (3D)** — an interactive low-poly developer workstation. Clicking an
  object on the desk (monitor, laptop, books, briefcase, mug, résumé) flies the
  camera in and opens that part of the portfolio.

The mode is **chosen automatically** based on the visitor's device and network,
and can be toggled at any time.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and
React Three Fiber.

---

## ✨ Features

- **Two experiences, one source of truth** — Simple and Immersive modes both read
  from `lib/portfolio-data.ts`, so content never drifts.
- **Smart auto-detection** (`lib/useExperienceMode.tsx`):
  - Defaults to **3D only when the device is capable *and* the network is fast**.
  - Falls back to **Simple automatically** on slow / data-saver connections
    (`effectiveType` 2g/3g, `saveData`, or low `downlink`), no-WebGL devices,
    small screens, or `prefers-reduced-motion`.
  - The visitor's manual choice is remembered in `localStorage`.
  - **No Three.js is downloaded in Simple mode** — the 3D bundle is a lazy
    `dynamic(ssr:false)` chunk, so slow-network visitors get a genuinely light page.
- **Interactive 3D workstation** — React Three Fiber scene with clickable hotspots.
- **Live terminal** — a working in-page terminal that responds to commands.
- **"Ask Hemang" chatbot** — answers common questions from the portfolio data.
- **Dark mode** with theme persistence.
- **SEO-ready** — metadata, Open Graph, and Twitter cards.
- **Accessible & responsive** — semantic HTML, ARIA labels, mobile-first.

---

## 🛠️ Tech Stack

| Layer        | Tools                                                            |
|--------------|-----------------------------------------------------------------|
| Framework    | Next.js 14 (App Router), React 18, TypeScript                   |
| Styling      | Tailwind CSS, Framer Motion (animations)                        |
| 3D           | three.js, @react-three/fiber                                    |
| Charts/Icons | Recharts, Chart.js, lucide-react                                |
| Hosting      | Vercel (recommended)                                            |

---

## 📦 Getting Started

```bash
# 1. Clone
git clone https://github.com/Hemang0710/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To verify a clean production build:

```bash
npm run build
```

> **Tip:** to see the automatic Simple-mode fallback, open Chrome DevTools →
> Network → throttle to *Slow 3G* and reload. Use the floating **2D / 3D** toggle
> (bottom-center) to switch modes manually.

---

## ⚙️ Configuration

All personal content lives in two files — edit these, not the components:

| Want to change…                         | Edit                          |
|-----------------------------------------|-------------------------------|
| Bio, stats, skills, projects, experience| `lib/portfolio-data.ts`       |
| Name, title, links, résumé, photo       | `lib/site-config.ts`          |
| Terminal commands                       | `components/LiveTerminal.tsx` |
| Chatbot answers                         | `components/AskHemang.tsx`    |
| 3D desk objects / hotspots              | `components/Workstation3D.tsx`|

Put your résumé PDF in `/public` (e.g. `Hemang_Patel_Resume.pdf`) and point
`links.resumePdf` at it in `lib/site-config.ts`.

---

## 🔐 Environment Variables & Secrets

This portfolio is a **static front-end and needs no API keys to run**. If you add
integrations later (analytics, a real chatbot backend, etc.), follow these rules:

- Put secrets in **`.env.local`** — it is git-ignored and never committed.
- Commit only **`.env.example`** with placeholder values as documentation.
- Client-exposed variables **must** be prefixed `NEXT_PUBLIC_`; anything without
  that prefix stays server-side. **Never put a private key in a `NEXT_PUBLIC_`
  variable** — it ships to the browser.
- Configure production secrets in your host's dashboard (Vercel → Settings →
  Environment Variables), not in the repo.

The `.gitignore` blocks `.env*` files, key/certificate files (`*.pem`, `*.key`,
`*.p12`, …), and `node_modules/` so credentials and dependencies never get pushed.

---

## 🗂️ Project Structure

```
Portfolio/
├── app/
│   ├── HomeContent.tsx     # Switches between Simple & Immersive experiences
│   ├── layout.tsx          # Root layout (Header, Footer, chatbot, theme)
│   ├── page.tsx            # Home route
│   └── globals.css
├── components/
│   ├── ImmersiveExperience.tsx  # Full-screen 3D mode
│   ├── Workstation3D.tsx        # The interactive 3D desk (R3F)
│   ├── SectionPanel.tsx         # Portfolio part shown when a desk object is clicked
│   ├── ModeToggle.tsx           # Floating 2D / 3D switch
│   ├── LiveTerminal.tsx         # Interactive in-page terminal
│   ├── AskHemang.tsx            # Q&A chatbot widget
│   ├── Header.tsx · Footer.tsx · ThemeProvider.tsx
├── lib/
│   ├── portfolio-data.ts   # Single source of truth for content
│   ├── site-config.ts      # Name, links, résumé, photo
│   └── useExperienceMode.tsx    # Capability + network detection, mode state
├── public/                 # Résumé PDF, photo, static assets
└── package.json
```

---

## 🚀 Deployment (Vercel)

1. Push to GitHub.
2. Import the repo at [vercel.com](https://vercel.com) → **New Project**.
3. Vercel auto-detects Next.js — no config needed. Deploy.
4. (Optional) Add a custom domain under **Settings → Domains**.

---

## 📜 Available Scripts

| Script          | Description                  |
|-----------------|------------------------------|
| `npm run dev`   | Start the dev server         |
| `npm run build` | Production build             |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

---

## 📄 License

MIT — free to fork and adapt for your own portfolio.
