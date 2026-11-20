import { MessageCircle, Mail, Music2, MapPin } from "lucide-react";
import { site } from "@/data/site";
import SectionHeading from "@/components/site/SectionHeading";
import ReservationForm from "@/components/site/ReservationForm";

const channels = [
  {
    label: "WhatsApp",
    value: "Order, reserve, ask about specials",
    href: site.whatsapp,
    icon: MessageCircle,
  },
  { label: "TikTok", value: "Watch the grill in action", href: site.tiktok, icon: Music2 },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
];

export default function Visit() {
  return (
    <section id="visit" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Visit & order" title="Come hungry. We are already cooking.">
          Dine in, take away or have it delivered. Tables for one to twelve, and family trays on
          request.
        </SectionHeading>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-primary">
                <MapPin className="h-3.5 w-3.5" /> {site.city}
              </div>
              <div className="mt-6 divide-y divide-white/10">
                {site.hours.map((row) => (
                  <div key={row.day} className="flex items-center justify-between py-3.5">
                    <span className="text-sm text-white/60">{row.day}</span>
                    <span className="font-heading text-sm text-white">{row.time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/40">{site.delivery}</p>
            </div>

            <div className="flex flex-col gap-3">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-primary/50 hover:bg-white/[0.05]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-primary transition-colors group-hover:border-primary/40">
                    <channel.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-heading text-base text-white">
                      {channel.label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm text-white/45">
                      {channel.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <ReservationForm />
        </div>
      </div>
    </section>
  );
}