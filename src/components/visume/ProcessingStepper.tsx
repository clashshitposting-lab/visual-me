import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProcessingStepper({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  return (
    <ol className="space-y-3">
      {steps.map((s, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <li
            key={s}
            className={cn(
              "flex items-center gap-3 rounded-2xl border bg-card p-4 transition-all",
              active ? "border-primary/40 shadow-sm" : "border-border",
              !done && !active && "opacity-60",
            )}
          >
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-medium",
                done
                  ? "bg-success text-success-foreground"
                  : active
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground",
              )}
            >
              {done ? (
                <Check className="h-4 w-4" />
              ) : active ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                i + 1
              )}
            </span>
            <span className="text-sm font-medium">{s}</span>
          </li>
        );
      })}
    </ol>
  );
}
