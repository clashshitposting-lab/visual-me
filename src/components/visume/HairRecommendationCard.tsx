import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function HairRecommendationCard({
  title,
  description,
  tone = "good",
}: {
  title: string;
  description: string;
  tone?: "good" | "avoid";
}) {
  const Icon = tone === "good" ? Check : X;
  return (
    <article className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
          tone === "good"
            ? "bg-success/15 text-success"
            : "bg-destructive/15 text-destructive",
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
      </div>
    </article>
  );
}
