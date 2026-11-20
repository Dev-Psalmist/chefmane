import { useState } from "react";
import { Image } from "@/components/ui/image";
import { courses } from "@/data/menu";
import SectionHeading from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";

export default function MenuBoard() {
  const [active, setActive] = useState(courses[0].id);
  const course = courses.find((item) => item.id === active) ?? courses[0];
  const drinks = courses.find((item) => item.id === "drinks");

  return (
    <section id="menu" className="relative border-y border-white/5 bg-white/[0.015] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="The course list" title="Every course, from the grill out.">
            Choose a course to see what is on today. Every photo on this site is a plate from
            our own kitchen.
          </SectionHeading>
          <p className="text-sm leading-relaxed text-white/40 lg:max-w-xs lg:text-right">
            From student-budget plates to premium sharing platters — there is a price point for
            every table. Message us for today's specials, family trays and catering.
          </p>
        </div>

        <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2">
          {courses.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={cn(
                "shrink-0 rounded-full border px-5 py-2.5 text-sm transition",
                active === item.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-white/40">{course.blurb}</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {course.items.map((item) => (
            <article
              key={item.name}
              className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/25 to-white/5 font-heading text-lg text-white/70">
                    {item.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-white">{item.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/50">{item.desc}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-white/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {active !== "drinks" ? (
          <div className="mt-6 flex flex-wrap items-center gap-2 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3.5">
            <span className="mr-1 text-[10px] uppercase tracking-[0.24em] text-primary">
              Also on the list
            </span>
            {drinks.items.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive("drinks")}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60 transition hover:border-primary/50 hover:text-white"
              >
                {item.name}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}