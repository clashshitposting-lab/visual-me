import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MockBadge } from "./MockBadge";
import { SampleImage } from "./SampleImage";

type Item = { title: string; color: string; imageUrl?: string };

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
  const captionTag = tone === "good" ? "Simulação placeholder" : "Exemplo demonstrativo";

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
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                  {it.imageUrl ? (
                    <SampleImage
                      src={it.imageUrl}
                      alt={`Exemplo visual: ${it.title}`}
                      fallbackColor={it.color}
                      className="h-full w-full"
                    />
                  ) : (
                    <div
                      className="h-full w-full"
                      style={{
                        background: `linear-gradient(160deg, ${it.color} 0%, color-mix(in oklab, ${it.color} 60%, white) 100%)`,
                      }}
                    />
                  )}

                  {/* Tinted color overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-60"
                    style={{ backgroundColor: it.color }}
                  />

                  <span
                    className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      tone === "good"
                        ? "bg-success text-success-foreground"
                        : "bg-destructive text-destructive-foreground"
                    }`}
                  >
                    {tone === "good" ? "Combina" : "Evitar"}
                  </span>

                  <span className="absolute right-2 top-2 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                    Imagem demonstrativa
                  </span>

                  {/* Bottom swatch overlay */}
                  <div className="absolute inset-x-2 bottom-2 flex items-center gap-2 rounded-xl bg-white/90 px-2.5 py-1.5 backdrop-blur">
                    <span
                      className="h-5 w-5 shrink-0 rounded-full ring-1 ring-black/10"
                      style={{ backgroundColor: it.color }}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[11px] font-semibold text-foreground">
                        {it.title}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {it.color}
                      </p>
                    </div>
                  </div>
                </div>

                <figcaption className="px-1 pb-1 pt-3">
                  <p className="text-xs font-medium text-foreground">{captionTag}</p>
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
