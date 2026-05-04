export type Product = {
  id: "cores" | "cabelo" | "combo";
  name: string;
  price: number;
  short: string;
  description: string;
  highlights: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "cores",
    name: "Análise de Cores",
    price: 34.9,
    short: "Sua paleta personalizada",
    description:
      "Descubra sua paleta, cores que valorizam, cores para evitar, neutros ideais, acentos e sugestões de roupas.",
    highlights: [
      "Cartela com cores que valorizam",
      "Cores a evitar",
      "Neutros e acentos",
      "Sugestões de roupas",
    ],
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
    short: "A experiência VisuMe completa",
    description: "Inclui análise de cores + cabelo/barba em uma experiência completa.",
    highlights: [
      "Análise de cores completa",
      "Análise de cabelo e barba",
      "Guia prático",
      "PDF do relatório",
    ],
    featured: true,
  },
];

export const getProductById = (id: string | undefined | null) =>
  products.find((p) => p.id === id) ?? products.find((p) => p.featured)!;
