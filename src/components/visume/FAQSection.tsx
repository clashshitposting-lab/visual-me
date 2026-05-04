import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/faq";

export function FAQSection() {
  return (
    <section className="bg-nude/30 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Perguntas frequentes
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Tudo que você precisa saber
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-8 overflow-hidden rounded-2xl border border-border bg-card"
        >
          {faq.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`f-${i}`}
              className="border-border px-5"
            >
              <AccordionTrigger className="text-left text-sm font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
