# Pulse — B2B Business Intelligence Platform

A professional B2B SaaS marketing and intelligence platform built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**. Pulse helps B2B teams track energy, water, and payments-market trends, industry news, and account performance.

## Features

- **Home** — Hero with animated pulse line, live stat strip, services grid, testimonials, newsletter CTA
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
- npm, yarn, or pnpm

### Local Development

```bash
# 1. Clone or extract the project
cd pulse-b2b

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
pulse-b2b/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home
│   ├── insights/           # Insights feed + [slug] articles
│   ├── dashboard/          # BI dashboard
│   ├── about/              # About page
│   └── contact/            # Contact page
├── components/
│   ├── home/               # Home page sections
│   ├── insights/           # Article cards, filters
│   ├── dashboard/          # Charts, KPIs, data table
│   ├── layout/             # Header, Footer
│   └── ui/                 # PulseLine, ThemeToggle
├── content/
│   └── insights/           # Markdown articles with frontmatter
├── lib/
│   ├── content.ts          # CMS abstraction layer
│   ├── data.ts             # Dashboard mock data
│   ├── types.ts            # Shared TypeScript types
│   └── utils.ts            # Helpers
└── public/                 # Static assets
```

## Content Management

Articles live in `content/insights/*.md` with YAML frontmatter:

```markdown
---
title: "Article Title"
excerpt: "Short description"
category: "Energy Markets"
author: "Author Name"
publishedAt: "2025-06-28"
readTime: "5 min"
featured: true
tags: ["tag1", "tag2"]
---

Article body in Markdown...
```

To migrate to a headless CMS, replace the `MarkdownContentProvider` class in `lib/content.ts` with a CMS-specific implementation — page components remain unchanged.

## Deploy to Vercel

1. Push the project to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Set environment variables from `.env.example`
4. Deploy — Vercel auto-detects Next.js settings

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Docker Deployment

```bash
# Build the image
docker build -t pulse-b2b .

# Run the container
docker run -p 3000:3000 pulse-b2b
```

Open [http://localhost:3000](http://localhost:3000).

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Navy | `#0B1220` | Dark background |
| Off-white | `#F7F8FA` | Light background |
| Primary gradient | `#4C6FFF → #7C5CFF` | CTAs, accents |
| Signal teal | `#14B8A6` | Positive metrics |
| Alert amber | `#F59E0B` | Warnings |
| Display font | Space Grotesk | Headings |
| Body font | Inter | Body text |
| Mono font | JetBrains Mono | Data/metrics |

## License

Private — Pulse Intelligence Ltd.
