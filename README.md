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

`VITE_BASE44_APP_ID` is set in `.env.production` (a public app id, safe to commit). It is only used by the reservation form, which writes table requests to the Base44 app the site was built on.

## Table reservations

`src/components/site/ReservationForm.jsx` posts to the `Reservation` entity through `@base44/sdk`. To move reservations off Base44, swap the `base44.entities.Reservation.create(...)` call for your own endpoint.

## Before going live

- Replace the placeholder WhatsApp number, TikTok handle and email in `src/data/site.js`
- Point a domain at the Vercel project if you have one
