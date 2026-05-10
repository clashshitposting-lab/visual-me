import { Download, Palette, Scissors, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { MockBadge } from "./MockBadge";

const examples = [
  {
    icon: Palette,
    title: "Sua paleta personalizada",
    desc: "Cores frias, neutros e acentos selecionados.",
    accent: "from-primary/15 to-primary/5",
  },
  {
    icon: Sparkles,
    title: "Simulações visuais em você",
    desc: "Veja como diferentes cores conversam com seu rosto.",
    accent: "from-accent/15 to-accent/5",
  },
  {
    icon: Scissors,
    title: "Cortes e barba que favorecem",
    desc: "Sugestões com instruções práticas para o salão.",
    accent: "from-success/15 to-success/5",
  },
  {
    icon: Download,
    title: "PDF do seu relatório",
    desc: "Salve, compartilhe e leve para a próxima compra.",
    accent: "from-warning/20 to-warning/5",
  },
];

export function ExampleShowcase({ showSampleLink = true }: { showSampleLink?: boolean } = {}) {
  return (
    <section className="bg-nude/30 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              O que você recebe
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Um relatório visual, não só texto
            </h2>
          </div>
          <MockBadge>Exemplo visual</MockBadge>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {examples.map((e) => (
            <div
              key={e.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${e.accent} opacity-60`}
              />
              <e.icon className="h-6 w-6 text-foreground" />
              <h3 className="mt-4 font-display text-lg">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>

        {showSampleLink && (
          <div className="mt-8 text-center">
            <Link
              to="/resultado/mock"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
            >
              Ver exemplo de relatório completo
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
