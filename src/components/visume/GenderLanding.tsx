import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Shield, Sparkles, Zap } from "lucide-react";
import { useVisume } from "@/context/VisumeContext";
import { products } from "@/data/products";
import { SampleImage } from "./SampleImage";
import { HowItWorks } from "./HowItWorks";
import { ExampleShowcase } from "./ExampleShowcase";

import { ProductPricingCards } from "./ProductPricingCards";

import type { LandingContent } from "@/data/landingContent";

export function GenderLanding({ content }: { content: LandingContent }) {
  const { setSelectedProduct } = useVisume();

  const startAnalysis = () => {
    const visagismo = products.find((p) => p.id === "visagismo")!;
    setSelectedProduct(visagismo);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-nude/40 via-background to-background" />
        <div className="absolute -top-24 right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 left-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:pb-20 lg:pt-20">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              <Sparkles className="h-3 w-3 text-primary" />
              {content.eyebrow}
            </span>

            <h1 className="mt-6 font-display text-[clamp(2.25rem,7vw,3.75rem)] font-semibold leading-[1.05] text-foreground">
              {content.headline}
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              {content.subhead}
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/checkout"
                onClick={startAnalysis}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90"
              >
                {content.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              {content.trustLine}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-muted shadow-lg">
              <SampleImage src={content.heroImage} alt={`Exemplo ${content.eyebrow}`} />
              <span className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                Imagem demonstrativa
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="bg-nude/30 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Soa familiar?
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            {content.painIntro}
          </h2>
          <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left">
            {content.painPoints.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm shadow-sm sm:text-base"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  ✓
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {content.solutionLine}
          </p>
        </div>
      </section>

      <HowItWorks />
      <ExampleShowcase showSampleLink={false} />
      <ProductPricingCards />

      {/* OBJEÇÕES */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Antes de você decidir
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Tirando as últimas dúvidas
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {content.objections.map((o, i) => {
            const Icon = [Shield, Zap, Check][i % 3];
            return (
              <div
                key={o.q}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg">{o.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.a}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-4xl px-4 pb-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 text-center shadow-sm sm:p-12">
          <h2 className="font-display text-2xl sm:text-3xl">{content.finalCtaTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            {content.finalCtaText}
          </p>
          <Link
            to="/checkout"
            onClick={startAnalysis}
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90"
          >
            {content.ctaPrimary}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-3 text-xs text-muted-foreground">{content.trustLine}</p>
        </div>
      </section>

      
    </>
  );
}
