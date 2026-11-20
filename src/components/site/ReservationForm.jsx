import { useState } from "react";
import { Loader2, Check, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

const emptyForm = {
  name: "",
  phone: "",
  guests: "2",
  date: "",
  time: "19:00",
  notes: "",
};

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40";
const labelClass = "text-[10px] uppercase tracking-[0.24em] text-white/40";

export default function ReservationForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const set = (key) => (event) =>
    setForm((previous) => ({ ...previous, [key]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    setStatus("saving");
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          guests: Number(form.guests),
          date: form.date,
          time: form.time,
          notes: form.notes.trim(),
        }),
      });
      if (!response.ok) throw new Error(`Reservation failed: ${response.status}`);
      setForm(emptyForm);
      setStatus("done");
    } catch (err) {
      setStatus("idle");
      setError("That did not go through. Please try again, or message us on WhatsApp.");
    }
  };

  if (status === "done") {
    return (
      <div className="flex h-full flex-col justify-center rounded-3xl border border-primary/30 bg-primary/[0.06] p-8 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-xl text-white">Table request received</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          We will confirm your table on WhatsApp shortly. If it is for today, message us
          directly so we can hold it.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" /> Open WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 transition hover:text-white"
          >
            Book another table
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
    >
      <h3 className="text-xl text-white">Reserve a table</h3>
      <p className="mt-1.5 text-sm text-white/45">
        Tables for one to twelve. We confirm every booking on WhatsApp.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelClass}>Name</span>
          <input
            className={fieldClass}
            value={form.name}
            onChange={set("name")}
            placeholder="Your name"
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClass}>Phone</span>
          <input
            className={fieldClass}
            value={form.phone}
            onChange={set("phone")}
            placeholder="0803 662 6719"
            inputMode="tel"
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClass}>Date</span>
          <input
            type="date"
            className={fieldClass}
            value={form.date}
            onChange={set("date")}
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClass}>Time</span>
          <input
            type="time"
            className={fieldClass}
            value={form.time}
            onChange={set("time")}
            required
          />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className={labelClass}>Guests</span>
          <select className={fieldClass} value={form.guests} onChange={set("guests")}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((count) => (
              <option key={count} value={count} className="bg-[#151515]">
                {count} {count === 1 ? "guest" : "guests"}
              </option>
            ))}
            <option value="13" className="bg-[#151515]">
              More than 12 — group booking
            </option>
          </select>
        </label>
        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className={labelClass}>Anything we should know</span>
          <textarea
            className={`${fieldClass} min-h-24 resize-none`}
            value={form.notes}
            onChange={set("notes")}
            placeholder="Birthday, allergies, high chair…"
          />
        </label>
      </div>

      {error ? <p className="mt-4 text-sm text-red-400">{error}</p> : null}

      <button
        type="submit"
        disabled={status === "saving"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "saving" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending request
          </>
        ) : (
          "Request table"
        )}
      </button>
    </form>
  );
}