import { Link, useNavigate } from "@tanstack/react-router";
import { Check, Star } from "lucide-react";
import { products } from "@/data/products";
import { useVisume, formatBRL } from "@/context/VisumeContext";
import { cn } from "@/lib/utils";

export function ProductPricingCards({
  variant = "section",
}: {
  variant?: "section" | "page";
}) {
  const navigate = useNavigate();
  const { setSelectedProduct } = useVisume();

  const onChoose = (id: string) => {
    const p = products.find((x) => x.id === id)!;
    setSelectedProduct(p);
    navigate({ to: "/checkout" });
  };

  const wrapperCls =
    variant === "section"
      ? "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      : "mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6";

  return (
    <section className={wrapperCls} id="precos">
      {variant === "section" && (
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Escolha sua análise
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Preços</h2>
        </div>
      )}

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className={cn(
              "relative flex flex-col rounded-3xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7",
              p.featured
                ? "border-primary/40 ring-1 ring-primary/20"
                : "border-border",
            )}
          >
            {p.featured && (
              <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground shadow-sm">
                <Star className="h-3 w-3" /> Mais escolhido
              </span>
            )}

            <div>
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.short}</p>
            </div>

            <div className="mt-5 flex items-baseline gap-1">
              <span className="font-display text-4xl text-foreground">
                {formatBRL(p.price)}
              </span>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">{p.description}</p>

            <ul className="mt-5 space-y-2.5">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onChoose(p.id)}
              className={cn(
                "mt-7 inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-medium transition-all",
                p.featured
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "border border-border bg-card text-foreground hover:bg-muted",
              )}
            >
              Escolher análise
            </button>
          </div>
        ))}
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
