import { createFileRoute } from "@tanstack/react-router";
import { ProductPricingCards } from "@/components/visume/ProductPricingCards";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — VisuMe" },
      {
        name: "description",
        content:
          "Escolha entre Análise de Cores, Análise de Cabelo e Barba ou o Combo Completo.",
      },
      { property: "og:title", content: "Produtos VisuMe" },
      {
        property: "og:description",
        content: "Pacotes de análise visual personalizada para você.",
      },
    ],
  }),
  component: Produtos,
});

function Produtos() {
  return (
    <div>
      <section className="border-b border-border bg-nude/30">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Pacotes
          </p>
          <h1 className="mt-3 font-display text-[clamp(2rem,6vw,3.25rem)] font-semibold leading-tight">
            Escolha sua análise
          </h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Três caminhos para descobrir o seu melhor visual. Sem assinatura, sem
            recorrência — você paga uma vez e recebe seu relatório.
          </p>
        </div>
      </section>
      <ProductPricingCards variant="page" />
    </div>
  );
}
