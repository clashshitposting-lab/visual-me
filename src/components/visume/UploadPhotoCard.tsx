import { useRef } from "react";
import { Camera, Check, ImagePlus, Trash2 } from "lucide-react";
import { useVisume } from "@/context/VisumeContext";
import { cn } from "@/lib/utils";

export function UploadPhotoCard({
  slot,
  title,
  hint,
  optional,
}: {
  slot: string;
  title: string;
  hint: string;
  optional?: boolean;
}) {
  const { uploads, setUpload } = useVisume();
  const photo = uploads[slot];
  const inputRef = useRef<HTMLInputElement>(null);

  const onPick = (file: File | undefined) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUpload(slot, { id: slot, previewUrl: url });
  };

  const clear = () => {
    if (photo) URL.revokeObjectURL(photo.previewUrl);
    setUpload(slot, null);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div
        className={cn(
          "relative aspect-[4/5] w-full bg-muted/60",
          photo ? "" : "grid place-items-center",
        )}
      >
        {photo ? (
          <>
            <img
              src={photo.previewUrl}
              alt={title}
              className="h-full w-full object-cover"
            />
            <button
              onClick={clear}
              className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-colors hover:bg-background"
              aria-label="Remover"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
            <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-success px-2 py-1 text-[10px] font-medium text-success-foreground">
              <Check className="h-3 w-3" /> Enviado
            </span>
          </>
        ) : (
          <div className="flex flex-col items-center text-muted-foreground">
            <Camera className="h-8 w-8" />
            <span className="mt-2 text-xs">Pendente</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold">{title}</h3>
          {optional && (
            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase text-muted-foreground">
              Opcional
            </span>
          )}
        </div>
        <p className="mt-1 text-xs text-muted-foreground">{hint}</p>

        <button
          onClick={() => inputRef.current?.click()}
          className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border border-border bg-card text-sm font-medium transition-colors hover:bg-muted"
        >
          <ImagePlus className="h-4 w-4" />
          {photo ? "Trocar foto" : "Selecionar arquivo"}
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => onPick(e.target.files?.[0])}
        />
      </div>
    </div>
  );
}
