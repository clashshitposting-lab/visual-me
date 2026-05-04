import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { generateMockPdf } from "@/lib/generateMockPdf";

export function PdfDownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleClick = async () => {
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

  return (
    <button
      onClick={handleClick}
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
          Baixar PDF demonstrativo
        </>
      )}
    </button>
  );
}
