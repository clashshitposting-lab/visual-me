import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MockBadge } from "./MockBadge";

type Item = { title: string; color: string };

export function VisualSimulationCarousel({
  title,
  caption,
  items,
  tone = "good",
}: {
  title: string;
  caption: string;
  items: Item[];
  tone?: "good" | "avoid";
}) {
  return (
    <section className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{caption}</p>
        </div>
        <MockBadge>Exemplo de resultado</MockBadge>
      </div>

      <Carousel className="mt-6">
        <CarouselContent className="-ml-3">
          {items.map((it) => (
            <CarouselItem
              key={it.title}
              className="basis-3/4 pl-3 sm:basis-1/2 lg:basis-1/3"
            >
              <figure className="overflow-hidden rounded-2xl border border-border bg-background p-3 shadow-sm">
                <div
                  className="relative aspect-[4/5] w-full overflow-hidden rounded-xl"
                  style={{
                    background: `linear-gradient(160deg, ${it.color} 0%, color-mix(in oklab, ${it.color} 60%, white) 100%)`,
                  }}
                >
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="h-20 w-20 rounded-full bg-white/30 ring-1 ring-white/40 backdrop-blur-sm" />
                  </div>
                  <span
                    className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      tone === "good"
                        ? "bg-success text-success-foreground"
                        : "bg-destructive text-destructive-foreground"
                    }`}
                  >
                    {tone === "good" ? "Combina" : "Evitar"}
                  </span>
                </div>
                <figcaption className="px-1 pb-1 pt-3">
                  <p className="text-sm font-semibold">{it.title}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                    Imagem ilustrativa / placeholder. Futuramente a IA vai gerar
                    essa simulação com a foto enviada.
                  </p>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4 hidden justify-end gap-2 sm:flex">
          <CarouselPrevious className="static translate-x-0 translate-y-0" />
          <CarouselNext className="static translate-x-0 translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
}
