import { Image } from "@/components/ui/image";
import { signatures } from "@/data/menu";
import SectionHeading from "@/components/site/SectionHeading";

export default function Signature() {
  return (
    <section id="signature" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Signature plates" title="The three plates people come back for.">
          Everything leaves the grill with char, smoke and a slow pepper burn. These are the
          ones the regulars order without opening the menu.
        </SectionHeading>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {signatures.map((dish) => (
            <article
              key={dish.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/30 to-transparent" />
              </div>
              <div className="relative -mt-12 px-6 pb-7">
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary">
                  {dish.vibe}
                </span>
                <h3 className="mt-3 text-2xl">{dish.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{dish.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {dish.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}