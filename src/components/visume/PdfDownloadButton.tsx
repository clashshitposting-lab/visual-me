import { Download } from "lucide-react";
import { toast } from "sonner";

export function PdfDownloadButton() {
  return (
    <button
      onClick={() =>
        toast.info("PDF mockado", {
          description:
            "PDF real será gerado na próxima etapa. Este botão já está preparado para integração futura.",
        })
      }
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
    >
      <Download className="h-4 w-4" />
      Baixar PDF mockado
    </button>
  );
}
