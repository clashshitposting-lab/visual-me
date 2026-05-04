import { Clock } from "lucide-react";

export function ResultExpirationBanner() {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-warning/30 bg-warning/10 p-4">
      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-warning-foreground" />
      <div>
        <p className="text-sm font-medium text-warning-foreground">
          Seu resultado ficará disponível por 7 dias
        </p>
        <p className="text-xs text-warning-foreground/80">
          Você pode estender esse prazo a qualquer momento como extra.
        </p>
      </div>
    </div>
  );
}
