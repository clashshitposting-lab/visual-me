import { Link } from "@tanstack/react-router";
import { ArrowRight, Eye, Sparkles } from "lucide-react";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-nude/40 via-background to-background" />
      <div className="absolute -top-24 right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 left-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <Sparkles className="h-3 w-3 text-primary" />
            Consultoria de imagem digital
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.25rem,7vw,4rem)] font-semibold leading-[1.05] text-foreground">
            Descubra as cores, cortes e estilos que mais valorizam{" "}
            <span className="italic text-accent">você</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Envie suas fotos e receba uma análise visual personalizada com paleta de
            cores, sugestões de cabelo, barba e simulações visuais em você.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              to="/produtos"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90"
            >
              Começar minha análise
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/resultado/mock"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Eye className="h-4 w-4" />
              Ver prévia do relatório
            </Link>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Análise orientativa baseada nas fotos enviadas.
          </p>
        </div>
      </div>
    </section>
  );
}
