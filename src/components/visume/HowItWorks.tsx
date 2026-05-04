const steps = [
  { n: "01", t: "Escolha sua análise", d: "Selecione o pacote ideal para você." },
  { n: "02", t: "Envie suas fotos", d: "Frente e perfis em boa iluminação." },
  { n: "03", t: "Aguarde o processamento", d: "Nossa IA monta seu relatório visual." },
  { n: "04", t: "Receba seu resultado", d: "Relatório visual + PDF para salvar." },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Como funciona
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">
          Quatro passos simples
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <span className="font-display text-2xl text-accent">{s.n}</span>
            <h3 className="mt-3 text-base font-semibold text-foreground">{s.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
