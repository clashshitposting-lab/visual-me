import type { ColorSwatch as Swatch } from "@/data/mockAnalysisResult";

export function ColorSwatch({ swatch, tone = "good" }: { swatch: Swatch; tone?: "good" | "avoid" }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="aspect-square w-full" style={{ backgroundColor: swatch.hex }} />
      <div className="p-3">
        <p className="text-sm font-medium leading-tight">{swatch.name}</p>
        <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
          {swatch.hex.toUpperCase()}
        </p>
        <span
          className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
            tone === "good"
              ? "bg-success/15 text-success"
              : "bg-destructive/15 text-destructive"
          }`}
        >
          {tone === "good" ? "Recomendada" : "Evitar"}
        </span>
      </div>
    </div>
  );
}
