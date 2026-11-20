import { Image } from "@/components/ui/image";
import { photos } from "@/data/menu";
import SectionHeading from "@/components/site/SectionHeading";

const facts = [
  { value: "Open daily", label: "Lunch through late" },
  { value: "Live fire", label: "Grilled to order" },
  { value: "Family trays", label: "Feeds 4 — 8" },
];

export default function Ambience() {
  return (
    <section id="room" className="relative border-y border-white/5 bg-white/[0.015] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src={photos.clubChicken}
              alt="Club sandwich with crispy chicken and a basket of fries"
              className="absolute inset-0 h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/80 via-transparent to-transparent" />
          </div>
          <div className="glass absolute -bottom-6 left-5 rounded-2xl px-5 py-4 sm:left-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Since day one</p>
            <p className="mt-1 font-heading text-lg text-white">Serving customers daily</p>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="The room" title="Warm fire. Cold chrome. One loud kitchen.">
            Chefmane was built for the way people actually eat now — a quick solo lunch between
            lectures, a table of six on a Friday, a late plate after work.
          </SectionHeading>

          <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/55">
            <p>
              The grill runs all day. Salads are cut fresh, jollof goes on in small batches so
              every bowl catches the smoke at the bottom of the pot, and the fries hit the oil
              when your order lands.
            </p>
            <p>
              Students get generous portions at lunch. Families get trays that actually feed
              everybody. If you came for something you have not tried before, ask for the
              grilled fish — it is the plate we are known for.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {facts.map((fact) => (
              <div key={fact.value} className="rounded-2xl border border-white/10 p-4">
                <p className="font-heading text-base text-white">{fact.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/40">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}