import { CheckCircle2 } from "lucide-react";

export function PdfInfoCard() {
  return (
    <aside className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground">
          PDF demonstrativo disponível
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          Na versão final, o PDF será montado com a análise personalizada e as
          simulações geradas com suas fotos.
        </p>
      </div>
    </aside>
  );
}
