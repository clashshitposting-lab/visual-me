import { Camera, FileDown, Palette, Smartphone, Sparkles, Wand2 } from "lucide-react";

const items = [
  { icon: Sparkles, t: "Resultado visual, não apenas texto" },
  { icon: Camera, t: "Simulações em você" },
  { icon: FileDown, t: "PDF para salvar" },
  { icon: Wand2, t: "Instruções práticas para salão/barbeiro" },
  { icon: Palette, t: "Paletas com nome e código HEX" },
  { icon: Smartphone, t: "Experiência mobile first" },
];

export function Differentials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Diferenciais
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">
          Pensado para você ver e usar
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div
            key={i.t}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <i.icon className="h-5 w-5" />
            </span>
            <p className="text-sm font-medium text-foreground">{i.t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
