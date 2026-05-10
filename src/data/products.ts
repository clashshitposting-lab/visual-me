export type Product = {
  id: "visagismo" | "cores" | "cabelo" | "combo";
  name: string;
  price: number;
  short: string;
  description: string;
  highlights: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "visagismo",
    name: "Análise de Visagismo",
    price: 39.9,
    short: "Cores + formato de rosto que valorizam você",
    description:
      "Sua paleta personalizada de cores e a leitura do seu formato de rosto, com sugestões visuais de estilo.",
    highlights: [
      "Paleta de cores que valorizam",
      "Cores a evitar",
      "Leitura do formato do rosto",
      "Sugestões visuais de estilo",
    ],
    featured: true,
  },
  {
    id: "cabelo",
    name: "Análise de Cabelo e Barba",
    price: 34.9,
    short: "Cortes e estilos para o seu rosto",
    description:
      "Descubra cortes, penteados, barba e finalizações que valorizam seu rosto.",
    highlights: [
      "Cortes que favorecem",
      "Cortes a evitar",
      "Estilos de barba",
      "Instruções para o salão",
    ],
  },
  {
    id: "combo",
    name: "Combo Completo",
    price: 59.9,
    short: "Visagismo + Cabelo e Barba",
    description: "A experiência VisuMe completa: visagismo + cabelo/barba em um só relatório.",
    highlights: [
      "Análise de visagismo completa",
      "Análise de cabelo e barba",
      "Guia prático",
      "PDF do relatório",
    ],
  },
];

export const getProductById = (id: string | undefined | null) =>
  products.find((p) => p.id === id) ?? products.find((p) => p.featured)!;
