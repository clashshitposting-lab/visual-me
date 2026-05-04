import { useState } from "react";
import { Bookmark, Download, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { MockBadge } from "./MockBadge";
import { SampleImage } from "./SampleImage";
import { PdfInfoCard } from "./PdfInfoCard";
import { sampleImages } from "@/data/sampleImages";
import { generateMockPdf } from "@/lib/generateMockPdf";

export function ResultHeader() {
  const [isGenerating, setIsGenerating] = useState(false);

  const onPdf = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      await generateMockPdf();
      toast.success("PDF baixado com sucesso.");
    } catch (e) {
      console.error(e);
      toast.error("Não foi possível gerar o PDF agora. Tente novamente.");
    } finally {
      setIsGenerating(false);
    }
  };

  const onSave = () =>
    toast.success("Resultado salvo", {
      description: "Funcionalidade visual: na versão final, ficará vinculada à sua conta.",
    });

  return (
    <header className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-nude/60 via-card to-card" />
      <div className="absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-10 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="grid grid-cols-1 gap-6 p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2">
            <MockBadge>Exemplo visual</MockBadge>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3 w-3" /> Combo Completo
            </span>
          </div>
          <h1 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.25rem)] font-semibold leading-[1.05]">
            Sua análise está pronta
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Este é um exemplo visual de relatório. Na versão final, a análise será
            personalizada de acordo com suas fotos.
          </p>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <button
              onClick={onPdf}
              disabled={isGenerating}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:opacity-70"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Gerando PDF...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Baixar PDF
                </>
              )}
            </button>
            <button
              onClick={onSave}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Bookmark className="h-4 w-4" />
              Salvar resultado
            </button>
          </div>

          <div className="mt-5 max-w-md">
            <PdfInfoCard />
          </div>
        </div>

        {/* Foto principal */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-nude to-accent/15 shadow-sm">
            <SampleImage
              src={sampleImages.portraitMain}
              alt="Foto editorial de exemplo"
              fallbackColor="#1F5B5B"
            />
            <span className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
              Foto exemplo
            </span>
            <div className="absolute bottom-3 left-3 right-3">
              <MockBadge>Imagem demonstrativa</MockBadge>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
