import { Quote } from "lucide-react";
import { MockBadge } from "./MockBadge";

export function BarberInstructionBox({ text }: { text: string }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-accent/30 bg-accent/5 p-6 shadow-sm sm:p-8">
      <Quote className="absolute right-5 top-5 h-12 w-12 text-accent/15" />
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-display text-xl">Como pedir ao barbeiro/cabeleireiro</h3>
        <MockBadge>Exemplo</MockBadge>
      </div>
      <p className="mt-4 max-w-2xl font-display text-lg italic leading-relaxed text-foreground sm:text-xl">
        “{text}”
      </p>
    </section>
  );
}
