import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { ProcessingStepper } from "@/components/visume/ProcessingStepper";
import { processingSteps, processingMessages } from "@/data/processingSteps";

export const Route = createFileRoute("/processando")({
  head: () => ({
    meta: [
      { title: "Processando sua análise — VisuMe" },
      {
        name: "description",
        content: "Aguarde enquanto montamos seu relatório visual.",
      },
    ],
  }),
  component: Processando,
});

const STEP_INTERVAL = 1400;
const MESSAGE_INTERVAL = 1800;

function Processando() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [msg, setMsg] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setStep((s) => {
        if (s >= processingSteps.length - 1) {
          clearInterval(stepTimer);
          setReady(true);
          return processingSteps.length - 1;
        }
        return s + 1;
      });
    }, STEP_INTERVAL);

    const msgTimer = setInterval(() => {
      setMsg((m) => (m + 1) % processingMessages.length);
    }, MESSAGE_INTERVAL);

    return () => {
      clearInterval(stepTimer);
      clearInterval(msgTimer);
    };
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Sparkles className="h-7 w-7 animate-pulse" />
        </div>
        <h1 className="mt-5 font-display text-3xl sm:text-4xl">
          Estamos preparando sua análise
        </h1>
        <p className="mt-3 min-h-[1.5em] text-sm text-muted-foreground sm:text-base">
          {processingMessages[msg]}
        </p>
      </div>

      <div className="mt-10">
        <ProcessingStepper steps={processingSteps} current={step} />
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <button
          onClick={() => navigate({ to: "/resultado/mock" })}
          disabled={!ready}
          className="inline-flex h-12 w-full max-w-sm items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {ready ? "Ver resultado mockado" : "Aguarde…"}
        </button>
        <p className="text-xs text-muted-foreground">
          {ready
            ? "Tudo pronto. Clique no botão para ver seu relatório."
            : "Você poderá ver o resultado em instantes."}
        </p>
      </div>
    </div>
  );
}
