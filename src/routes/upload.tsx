import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Sun, Sparkles, Glasses, Eye, Camera } from "lucide-react";
import { UploadPhotoCard } from "@/components/visume/UploadPhotoCard";
import { useVisume } from "@/context/VisumeContext";

export const Route = createFileRoute("/upload")({
  head: () => ({
    meta: [
      { title: "Envie suas fotos — VisuMe" },
      {
        name: "description",
        content:
          "Envie suas fotos seguindo as orientações para receber a análise visual personalizada.",
      },
      { property: "og:title", content: "Envie suas fotos — VisuMe" },
    ],
  }),
  component: UploadPage,
});

const tips = [
  { icon: Sun, t: "Use boa iluminação natural" },
  { icon: Camera, t: "Envie fotos recentes" },
  { icon: Glasses, t: "Evite óculos escuros" },
  { icon: Eye, t: "Para análise de cor, evite maquiagem pesada" },
  { icon: Sparkles, t: "Sem filtros e fundo neutro" },
];

const slots = [
  { id: "frente", title: "Foto de frente", hint: "Rosto inteiro centralizado." },
  { id: "esq", title: "Perfil esquerdo", hint: "90° para a esquerda." },
  { id: "dir", title: "Perfil direito", hint: "90° para a direita." },
  { id: "extra", title: "Foto extra", hint: "Cabelo/barba ou look completo.", optional: true },
];

function UploadPage() {
  const navigate = useNavigate();
  const { uploads } = useVisume();
  const requiredFilled = ["frente", "esq", "dir"].every((s) => uploads[s]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8 text-center sm:text-left">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Envio de fotos
        </p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl">
          Envie suas fotos para análise
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Quanto melhor a foto, mais rica a análise. Siga as dicas abaixo.
        </p>
      </div>

      <section className="mb-8 rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
        <h2 className="font-display text-lg">Dicas rápidas</h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((t) => (
            <li
              key={t.t}
              className="flex items-center gap-3 rounded-2xl bg-muted/60 px-4 py-3 text-sm"
            >
              <t.icon className="h-4 w-4 text-primary" />
              {t.t}
            </li>
          ))}
        </ul>
      </section>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {slots.map((s) => (
          <UploadPhotoCard
            key={s.id}
            slot={s.id}
            title={s.title}
            hint={s.hint}
            optional={s.optional}
          />
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <button
          onClick={() => navigate({ to: "/processando" })}
          disabled={!requiredFilled}
          className="inline-flex h-12 w-full max-w-md items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Continuar para análise
          <ArrowRight className="h-4 w-4" />
        </button>
        {!requiredFilled && (
          <p className="text-xs text-muted-foreground">
            Envie ao menos as fotos de frente e os dois perfis para continuar.
          </p>
        )}
      </div>
    </div>
  );
}
