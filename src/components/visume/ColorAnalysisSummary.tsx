import type { MockAnalysisResult } from "@/data/mockAnalysisResult";
import { MockBadge } from "./MockBadge";
import { SectionDisclaimer } from "./SectionDisclaimer";

export function ColorAnalysisSummary({
  data,
}: {
  data: MockAnalysisResult["colorAnalysis"];
}) {
  const items = [
    { l: "Estação", v: data.season },
    { l: "Temperatura", v: data.temperature },
    { l: "Intensidade", v: data.intensity },
    { l: "Profundidade", v: data.depth },
    { l: "Contraste", v: data.contrast },
    { l: "Subtom", v: data.undertone },
  ];

  return (
    <section className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl">Características da análise</h3>
          <p className="mt-1 text-sm text-muted-foreground">{data.explanation}</p>
        </div>
        <MockBadge>Exemplo de resultado</MockBadge>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.l}
            className="rounded-2xl bg-muted/60 p-3.5"
          >
            <dt className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              {it.l}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-foreground">{it.v}</dd>
          </div>
        ))}
      </dl>

      <SectionDisclaimer className="mt-5">
        Na versão final, sua cartela será gerada de forma personalizada com base
        nas fotos enviadas.
      </SectionDisclaimer>
    </section>
  );
}
