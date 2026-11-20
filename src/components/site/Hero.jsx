import { ArrowRight, MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import { site } from "@/data/site";
import { heroImage } from "@/data/menu";
import Marquee from "@/components/site/Marquee";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Whole grilled fish with fries and coleslaw on a dark stone counter"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-background/70" />
        <div className="ember-glow pointer-events-none absolute -left-40 top-1/4 h-[560px] w-[560px] rounded-full" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-32 sm:px-8">
        <div className="max-w-3xl animate-rise">
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.38em] text-primary">
            <span className="h-px w-8 bg-primary" />
            {site.city} · Now serving
          </p>

          <h1 className="mt-6 text-[3.1rem] leading-[0.92] sm:text-7xl lg:text-[5.25rem]">
            Fire-forged
            <br />
            <span className="text-gradient">flavour</span>, plated
            <br />
            for the future.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Grilled fish, smokey jollof, shawarma, fresh salads and stacked burgers — cooked
            over live fire, fast enough for a lunch break and generous enough for the whole
            family.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Explore the menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-2 text-[11px] uppercase tracking-[0.26em] text-white/40">
            {site.audience.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary/70" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}