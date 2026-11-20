import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/site/SiteHeader";
import Hero from "@/components/site/Hero";
import Signature from "@/components/site/Signature";
import MenuBoard from "@/components/site/MenuBoard";
import Gallery from "@/components/site/Gallery";
import Ambience from "@/components/site/Ambience";
import Visit from "@/components/site/Visit";
import SiteFooter from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chefmane — Grilled fish, smokey jollof, shawarma & burgers" },
      {
        name: "description",
        content:
          "Chefmane is a fire-forward kitchen in Lagos serving grilled fish, smokey jollof rice, shawarma, fresh salads, crispy chicken and stacked burgers. Dine in, takeaway, delivery.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Signature />
        <MenuBoard />
        <Gallery />
        <Ambience />
        <Visit />
      </main>
      <SiteFooter />
    </div>
  );
}