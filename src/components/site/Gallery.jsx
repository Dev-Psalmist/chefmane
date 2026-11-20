import { Image } from "@/components/ui/image";
import { gallery } from "@/data/menu";
import SectionHeading from "@/components/site/SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="The archive" title="Ten plates, straight from our kitchen.">
            Shot on our tables, re-lit for the dark. Hover a frame for the tasting notes.
          </SectionHeading>
          <span className="hidden text-[11px] uppercase tracking-[0.3em] text-white/35 sm:block">
            Scroll →
          </span>
        </div>
      </div>

      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8">
        {gallery.map((shot) => (
          <figure
            key={shot.title}
            className="group relative aspect-[3/4] w-[74vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 sm:w-[340px]"
          >
            <Image
              src={shot.src}
              alt={shot.title}
              className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-heading text-lg text-white">{shot.title}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-primary/90">
                {shot.note}
              </p>
            </figcaption>
            <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
              Chefmane
            </span>
          </figure>
        ))}
      </div>
    </section>
  );
}