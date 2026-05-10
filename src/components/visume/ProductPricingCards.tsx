import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Check, Star, X } from "lucide-react";
import { products } from "@/data/products";
import { useVisume, formatBRL } from "@/context/VisumeContext";
import { cn } from "@/lib/utils";

const traditionalIncludes = [
  "Agendamento e deslocamento",
  "1 a 2 horas presenciais",
  "Disponibilidade limitada",
  "Retorno costuma ser pago à parte",
];

export function ProductPricingCards({
  variant = "section",
}: {
  variant?: "section" | "page";
}) {
  const navigate = useNavigate();
  const { setSelectedProduct } = useVisume();

  const visagismo = products.find((p) => p.id === "visagismo")!;

  const onChoose = () => {
    setSelectedProduct(visagismo);
    navigate({ to: "/checkout" });
  };

  const wrapperCls =
    variant === "section"
      ? "mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
      : "mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6";

  return (
    <section className={wrapperCls} id="precos">
      {variant === "section" && (
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Compare e veja a diferença
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Mesmo serviço, fração do preço
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Uma consultoria de visagismo presencial costuma custar centenas de reais. Com a VisuMe você recebe sua análise em minutos, sem sair de casa.
          </p>
        </div>
      )}

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Card 2 (VisuMe) renderizado primeiro no DOM apenas em desktop via order */}
        <div className="order-2 flex flex-col rounded-3xl border border-border/70 bg-muted/30 p-6 shadow-sm sm:p-7 lg:order-1">
          <span className="inline-flex w-fit items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            Referência de mercado
          </span>

          <h3 className="mt-4 font-display text-2xl text-muted-foreground">
            Consultoria de visagismo presencial
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            O caminho tradicional para receber uma análise como essa.
          </p>

          <div className="mt-5 flex items-baseline gap-2">
            <span className="font-display text-4xl text-muted-foreground line-through decoration-muted-foreground/60">
              {formatBRL(500)}
            </span>
            <span className="text-sm text-muted-foreground">por sessão</span>
          </div>

          <ul className="mt-5 space-y-2.5">
            {traditionalIncludes.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/70" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 inline-flex h-12 items-center justify-center rounded-full border border-dashed border-border px-5 text-sm font-medium text-muted-foreground">
            Caminho tradicional
          </div>
        </div>

        <div
          className={cn(
            "relative order-1 flex flex-col rounded-3xl border-2 border-primary/50 bg-card p-6 shadow-lg ring-1 ring-primary/20 sm:p-7 lg:order-2",
          )}
        >
          <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground shadow-sm">
            <Star className="h-3 w-3" /> Mais escolhido
          </span>

          <h3 className="font-display text-2xl">Análise de Visagismo VisuMe</h3>
          <p className="mt-1 text-sm text-muted-foreground">{visagismo.short}</p>

          <div className="mt-5 flex items-baseline gap-2">
            <span className="font-display text-4xl text-foreground">
              {formatBRL(visagismo.price)}
            </span>
            <span className="text-sm text-muted-foreground">pagamento único</span>
          </div>

          <ul className="mt-5 space-y-2.5">
            {visagismo.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span>{h}</span>
              </li>
            ))}
            <li className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
              <span>Resultado em minutos, sem sair de casa</span>
            </li>
          </ul>

          <button
            onClick={onChoose}
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90"
          >
            Começar minha análise
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {variant === "section" && (
        <div className="mt-8 text-center">
          <Link
            to="/produtos"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Ver detalhes dos pacotes
          </Link>
        </div>
      )}
    </section>
  );
}
