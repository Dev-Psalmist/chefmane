import { useEffect, useState } from "react";
import { Menu as MenuIcon, X, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

const brandMark =
  "https://media.base44.com/images/public/6aff6206936eebb5f25d12c1/f7109ee3a_generated_image.png";

const links = [
  { label: "Signature", href: "#signature" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "The room", href: "#room" },
  { label: "Visit", href: "#visit" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative grid h-12 w-12 shrink-0 place-items-center">
            <span className="absolute inset-1 rounded-full bg-primary/35 blur-lg transition-colors group-hover:bg-primary/60" />
            <Image
              src={brandMark}
              alt="Chefmane emblem"
              className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-primary/40"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-extrabold uppercase tracking-[0.16em] text-white sm:text-xl">
              Chefmane
            </span>
            <span className="mt-1.5 font-heading text-[9px] italic tracking-[0.04em] text-primary sm:text-[11px]">
              Here we dey cook and e dey show!!
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Order now
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-background/95 px-5 py-3 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3.5 text-sm text-white/70"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}