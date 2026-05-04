export type OrderBump = {
  id: string;
  name: string;
  price: number;
  description: string;
  badge?: "Beta" | "Em breve";
  available: boolean;
};

export const orderBumps: OrderBump[] = [
  {
    id: "extend-storage",
    name: "Guardar resultado por mais tempo",
    price: 5,
    description:
      "Por padrão, seu resultado fica disponível por 7 dias. Adicione este extra para manter seu resultado salvo por mais tempo.",
    available: true,
  },
  {
    id: "pdf-premium",
    name: "PDF Premium",
    price: 9.9,
    description:
      "Receba uma versão mais completa do PDF, com mais páginas, checklist, guia de compras e instruções práticas.",
    available: true,
  },
  {
    id: "extra-preview",
    name: "Prévia visual extra",
    price: 14.9,
    description:
      "Gere mais simulações visuais em você com cores, cortes ou estilos extras.",
    badge: "Beta",
    available: true,
  },
  {
    id: "new-analysis",
    name: "Nova análise com novas fotos",
    price: 19.9,
    description:
      "Ideal se quiser testar com outras fotos, outro cabelo, barba, iluminação ou visual.",
    available: true,
  },
  {
    id: "couple",
    name: "Análise para casal",
    price: 39.9,
    description:
      "Combine paletas, estilos e sugestões para fotos, eventos ou looks em casal.",
    badge: "Em breve",
    available: false,
  },
  {
    id: "makeup",
    name: "Análise de maquiagem",
    price: 19.9,
    description:
      "Sugestões de batom, blush, sombra e acabamento baseadas na sua paleta.",
    badge: "Em breve",
    available: false,
  },
  {
    id: "shopping-guide",
    name: "Guia de compras personalizado",
    price: 9.9,
    description:
      "Lista prática de cores, peças e combinações para procurar em lojas.",
    badge: "Em breve",
    available: false,
  },
];
