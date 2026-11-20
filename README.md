# Chefmane

The Chefmane restaurant site: grilled fish, smokey jollof, shawarma, salads, crispy chicken and burgers over live fire. One page, built with React 19, TanStack Start and Tailwind, styled around a dark, fire-lit look.

Originally built on Base44, then exported here so the site can live on its own host (Vercel) with the code in this repo.

## Stack

- **React 19** + **TanStack Start / Router** (file-based routes in `src/routes`)
- **Tailwind CSS** + shadcn-style UI primitives in `src/components/ui`
- **Vite 8** build, statically prerendered to real HTML for the home page
- Content lives in `src/data/site.js` (contact, hours, links) and `src/data/menu.js` (the menu board)

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static build into dist/client
npm run preview  # serve the production build
```

## Deploying (Vercel)

The repo is ready for Vercel as a static site:

- Build command: `npm run build`
- Output directory: `dist/client`
- `vercel.json` holds both settings plus a single-page-app rewrite, so any unknown path still lands on the site

Table requests are stored in Postgres (Neon). The site needs one environment variable on the host:

| Variable | What it is |
| --- | --- |
| `DATABASE_URL` | Neon connection string (use the pooled one) |

Set it in Vercel under Project → Settings → Environment Variables, for Production, Preview and Development.

## Table reservations

- `src/components/site/ReservationForm.jsx` posts JSON to `POST /api/reservations`
- `api/reservations.js` is a Vercel function that validates the request and inserts it into Postgres
- `db/schema.sql` creates the `reservations` table. Run it once against a fresh database:

```bash
psql "$DATABASE_URL" -f db/schema.sql
```

Each row keeps `name, phone, guests, date, time, notes, status` (`pending` by default) and `created_at`. Read them in the Neon console or with any Postgres client; a small admin page can be added on top of the same table.

## Before going live

- Replace the placeholder WhatsApp number, TikTok handle and email in `src/data/site.js`
- Point a domain at the Vercel project if you have one
