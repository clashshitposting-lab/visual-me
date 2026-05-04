import { createFileRoute } from "@tanstack/react-router";
import { LandingHero } from "@/components/visume/LandingHero";
import { HowItWorks } from "@/components/visume/HowItWorks";
import { ExampleShowcase } from "@/components/visume/ExampleShowcase";
import { Differentials } from "@/components/visume/Differentials";
import { ProductPricingCards } from "@/components/visume/ProductPricingCards";
import { FAQSection } from "@/components/visume/FAQSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VisuMe — Veja seu melhor visual em você" },
      {
        name: "description",
        content:
          "Análise visual personalizada com paleta de cores, sugestões de cabelo, barba e simulações em você.",
      },
      { property: "og:title", content: "VisuMe — Veja seu melhor visual em você" },
      {
        property: "og:description",
        content:
          "Envie suas fotos e descubra cores, cortes e estilos que mais valorizam você.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <LandingHero />
      <HowItWorks />
      <ExampleShowcase />
      <Differentials />
      <ProductPricingCards />
      <FAQSection />
    </>
  );
}
