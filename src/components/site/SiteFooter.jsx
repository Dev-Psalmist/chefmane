import { MessageCircle, Mail, Music2 } from "lucide-react";
import { site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#111111] py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-heading text-xl uppercase tracking-[0.3em] text-white">Chefmane</p>
            <p className="mt-4 text-sm leading-relaxed text-white/45">
              {site.tagline} Grilled fish, smokey jollof, shawarma, salads and burgers — {site.city}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">Explore</p>
              <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/55">
                <a href="#menu" className="transition-colors hover:text-white">Menu</a>
                <a href="#gallery" className="transition-colors hover:text-white">Gallery</a>
                <a href="#room" className="transition-colors hover:text-white">The room</a>
                <a href="#visit" className="transition-colors hover:text-white">Visit</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">Hours</p>
              <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/55">
                {site.hours.map((row) => (
                  <span key={row.day}>{row.time}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">Talk to us</p>
              <div className="mt-4 flex gap-2">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-primary/50 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href={site.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-primary/50 hover:text-white"
                >
                  <Music2 className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  aria-label="Email"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-primary/50 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-6 text-[11px] uppercase tracking-[0.2em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Chefmane. All rights reserved.</span>
          <span>Made for fire, smoke and good company.</span>
        </div>
      </div>
    </footer>
  );
}