import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/data/products";

type UploadedPhoto = { id: string; previewUrl: string };

type VisumeState = {
  selectedProduct: Product | null;
  setSelectedProduct: (p: Product) => void;
  selectedBumps: string[];
  toggleBump: (id: string) => void;
  uploads: Record<string, UploadedPhoto | null>;
  setUpload: (slot: string, photo: UploadedPhoto | null) => void;
};

const VisumeContext = createContext<VisumeState | null>(null);

export function VisumeProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedBumps, setSelectedBumps] = useState<string[]>([]);
  const [uploads, setUploads] = useState<Record<string, UploadedPhoto | null>>({});

  const value = useMemo<VisumeState>(
    () => ({
      selectedProduct,
      setSelectedProduct,
      selectedBumps,
      toggleBump: (id) =>
        setSelectedBumps((prev) =>
          prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id],
        ),
      uploads,
      setUpload: (slot, photo) => setUploads((prev) => ({ ...prev, [slot]: photo })),
    }),
    [selectedProduct, selectedBumps, uploads],
  );

  return <VisumeContext.Provider value={value}>{children}</VisumeContext.Provider>;
}

export function useVisume() {
  const ctx = useContext(VisumeContext);
  if (!ctx) throw new Error("useVisume must be used inside VisumeProvider");
  return ctx;
}

export const formatBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
