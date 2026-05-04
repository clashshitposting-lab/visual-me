import type { ColorSwatch as Swatch } from "@/data/mockAnalysisResult";
import { ColorSwatch } from "./ColorSwatch";
import { MockBadge } from "./MockBadge";

export function ColorPaletteCard({
  title,
  caption,
  swatches,
  tone = "good",
}: {
  title: string;
  caption?: string;
  swatches: Swatch[];
  tone?: "good" | "avoid";
}) {
  return (
    <section className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl">{title}</h3>
          {caption && (
            <p className="mt-1 text-sm text-muted-foreground">{caption}</p>
          )}
        </div>
        <MockBadge>Exemplo de resultado</MockBadge>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {swatches.map((s) => (
          <ColorSwatch key={s.hex} swatch={s} tone={tone} />
        ))}
      </div>
    </section>
  );
}
