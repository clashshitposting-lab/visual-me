import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SampleImage } from "./SampleImage";

export function HairRecommendationCard({
  title,
  description,
  tone = "good",
  imageUrl,
}: {
  title: string;
  description: string;
  tone?: "good" | "avoid";
  imageUrl?: string;
}) {
  const Icon = tone === "good" ? Check : X;
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {imageUrl && (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <SampleImage src={imageUrl} alt={`Exemplo: ${title}`} />
          <span className="absolute right-2 top-2 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
            Imagem demonstrativa
          </span>
        </div>
      )}
      <div className="flex items-start gap-3 p-4">
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
        <div className="min-w-0">
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
          {imageUrl && (
            <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
              Imagem ilustrativa. Na versão final, a IA gerará uma simulação
              com a foto enviada.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
