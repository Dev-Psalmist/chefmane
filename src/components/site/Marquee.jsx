const items = [
  "Grilled fish",
  "Smokey jollof",
  "Shawarma",
  "Chicken burger",
  "Fresh salads",
  "Crispy chicken",
  "Golden fries",
  "Shakes",
];

export default function Marquee() {
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-4">
      <div className="flex w-max animate-marquee items-center gap-10">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 text-[11px] uppercase tracking-[0.34em] text-white/35"
          >
            {item}
            <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}