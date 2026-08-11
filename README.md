# Corelynk — Business Utilities Platform

A professional marketing site for **Corelynk**, built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**. Corelynk helps UK businesses manage energy, water, and payment solutions.

## Features

- **Home** — Hero carousel, live stat strip, services grid, testimonials, newsletter CTA
- **Insights** — Markdown-powered article feed with category filtering and individual article pages
- **Dashboard** — KPI cards, trend line chart, category bar chart, sortable data table (Recharts)
- **About** & **Contact** — Company story and contact form
- **Dark/Light mode** — System-aware theme toggle via `next-themes`
- **CMS-ready** — Content layer abstraction in `lib/content.ts` for easy headless CMS migration

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Content | gray-matter + remark (Markdown) |
| Icons | lucide-react |
| Theming | next-themes |

## Getting Started

### Prerequisites

- Node.js 18.17+ (or 20+)
- npm 9+

### Installation

```bash
git clone <repo-url>
cd corelynk
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Clean dev start (Windows / OneDrive)

If the dev server fails with cache errors:

```bash
npm run dev:clean
```

## Project Structure

```
corelynk/
├── app/                    # Next.js App Router pages
├── components/             # React components
│   ├── home/               # Homepage sections
│   ├── layout/             # Header, Footer, TopBar
│   └── ui/                 # Logo, ThemeToggle, decorative elements
├── content/insights/       # Markdown articles
├── lib/                    # site config, data, content helpers
├── public/                 # Static assets (logo, images)
└── tailwind.config.ts
```

## Docker

```bash
docker build -t corelynk .
docker run -p 3000:3000 corelynk
```

## License

Private — Corelynk.
