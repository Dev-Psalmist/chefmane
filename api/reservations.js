import { neon } from "@neondatabase/serverless";

// Table requests from the site's reservation form, stored in Postgres (Neon).
// POST /api/reservations  { name, phone, guests, date, time, notes }
const MAX = { name: 80, phone: 40, notes: 500 };

const clean = (value, limit) =>
  typeof value === "string" ? value.trim().slice(0, limit) : "";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return res.status(500).json({ error: "Reservations are not configured yet." });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body || "{}");
    } catch {
      return res.status(400).json({ error: "Invalid JSON body." });
    }
  }
  body = body || {};

  const name = clean(body.name, MAX.name);
  const phone = clean(body.phone, MAX.phone);
  const notes = clean(body.notes, MAX.notes);
  const date = clean(body.date, 10);
  const time = clean(body.time, 10);
  const guests = Number(body.guests);

  if (!name || !phone || !date || !time) {
    return res.status(400).json({ error: "Name, phone, date and time are required." });
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return res.status(400).json({ error: "Date must be YYYY-MM-DD." });
  }
  if (!Number.isInteger(guests) || guests < 1 || guests > 50) {
    return res.status(400).json({ error: "Guests must be a number between 1 and 50." });
  }

  try {
    const sql = neon(databaseUrl);
    const [row] = await sql`
      insert into reservations (name, phone, guests, date, time, notes, status)
      values (${name}, ${phone}, ${guests}, ${date}, ${time}, ${notes || null}, 'pending')
      returning id, created_at
    `;
    return res.status(201).json({ ok: true, id: String(row.id) });
  } catch (error) {
    console.error("reservation insert failed", error);
    return res.status(502).json({ error: "Could not save the reservation." });
  }
}
