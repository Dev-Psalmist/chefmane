# Chefmane — go-live notes

Saved so nothing has to be looked up later.

## 1. Free way (no plan needed)

- Open the app in the editor and click **Publish** in the top bar (top of the editor, next to the other actions).
- The first publish dialog lets you set the free link: **Edit URL** → yourname.base44.app.
- The published link is public and anyone can open it — no login needed.
- Changes made in chat/preview are **not** live until you press **Publish** again.
- After publishing you can also share it with the "Copy link" / "Share on WhatsApp" buttons in that dialog.

## 2. Custom domain (own .com etc.)

- Dashboard → **Domains**: connect a custom domain and edit the free base44.app address there.
- Connecting your own domain requires a paid plan; the free base44.app address stays available.

## 3. Vercel / hosting elsewhere (what I asked about)

- Vercel's own free (Hobby) plan is fine as a host, but a Base44 app is not built to run there:
  - **Code export (ZIP)** requires a **Builder plan or higher**.
  - **GitHub 2-way sync** also requires **Builder or higher**.
  - Base44 docs state self-hosting / moving the app off Base44 is **not supported**.
- Even exported, the app still connects to Base44 for data, logins, backend functions and integrations.
- Exported ZIP contains frontend + backend functions + data structure, but **not** records, secrets, users or version history.

## 4. When ready to subscribe — what to do

1. Open **Plan and billing** (workspace settings) and pick Builder or higher.
2. Then, if still wanted: top bar **More actions** → GitHub connection (or file export) to get the code.
3. Deploy that repo on Vercel as a normal project, with the Base44 environment/config it needs.
4. Otherwise, the simplest path: just press **Publish** and use the base44.app link, optionally with a custom domain from **Domains**.

## 5. Things still to fill in on the site

- Real WhatsApp number, TikTok handle and contact email (currently placeholders in the site data).
