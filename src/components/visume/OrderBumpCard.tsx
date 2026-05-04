import { Check, Lock } from "lucide-react";
import type { OrderBump } from "@/data/orderBumps";
import { formatBRL } from "@/context/VisumeContext";
import { cn } from "@/lib/utils";

export function OrderBumpCard({
  bump,
  selected,
  onToggle,
}: {
  bump: OrderBump;
  selected: boolean;
  onToggle: () => void;
}) {
  const disabled = !bump.available;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={disabled ? undefined : onToggle}
      title={disabled ? "Em breve" : undefined}
      aria-disabled={disabled}
      className={cn(
        "group relative flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all sm:p-5",
        disabled
          ? "cursor-not-allowed border-dashed border-border bg-muted/40 opacity-60"
          : selected
            ? "border-primary/60 bg-primary/5 ring-1 ring-primary/30"
            : "border-border bg-card hover:border-primary/40 hover:bg-muted/40",
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
          disabled
            ? "border-border bg-muted text-muted-foreground"
            : selected
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card",
        )}
      >
        {disabled ? (
          <Lock className="h-3 w-3" />
        ) : selected ? (
          <Check className="h-3.5 w-3.5" />
        ) : null}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-foreground">{bump.name}</span>
          {bump.badge && (
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                bump.badge === "Beta"
                  ? "bg-accent/15 text-accent"
                  : "bg-muted text-muted-foreground",
              )}
            >
              {bump.badge}
            </span>
          )}
        </div>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {bump.description}
        </p>
      </div>

      <span className="shrink-0 text-sm font-semibold text-foreground">
        + {formatBRL(bump.price)}
      </span>
    </button>
  );
}
