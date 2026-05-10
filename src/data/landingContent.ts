import type { ReactNode } from "react";

export type Gender = "mulher" | "homem";

export type LandingContent = {
  gender: Gender;
  eyebrow: string;
  headline: ReactNode;
  subhead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  heroImage: string;
  showcaseImages: string[];
  finalCtaTitle: string;
  finalCtaText: string;
  faqIntro?: string;
  metaTitle: string;
  metaDescription: string;
};

import { sampleImages } from "./sampleImages";
import { Fragment, createElement } from "react";

const womanHeadline = createElement(
  Fragment,
  null,
  "Descubra as cores e os traços que valorizam a ",
  createElement("span", { className: "italic text-accent" }, "sua beleza única"),
);

const manHeadline = createElement(
  Fragment,
  null,
  "O visual certo pra ",
  createElement("span", { className: "italic text-accent" }, "impor presença"),
  " sem esforço",
);

export const landingByGender: Record<Gender, LandingContent> = {
  mulher: {
    gender: "mulher",
    eyebrow: "Visagismo Feminino",
    headline: womanHeadline,
    subhead:
      "Envie suas fotos e receba uma análise visual personalizada: paleta de cores que valoriza sua pele, leitura do seu formato de rosto e sugestões de estilo feitas pra você.",
    ctaPrimary: "Começar minha análise",
    ctaSecondary: "Ver exemplo do relatório",
    heroImage: sampleImages.womanHero,
    showcaseImages: sampleImages.womanShowcase,
    finalCtaTitle: "Pronta pra descobrir o seu melhor visual?",
    finalCtaText:
      "Em poucos minutos você recebe sua análise de visagismo completa, em formato visual e fácil de aplicar no dia a dia.",
    metaTitle: "Visagismo Feminino — VisuMe",
    metaDescription:
      "Análise de visagismo personalizada para mulheres: paleta de cores, formato de rosto e sugestões visuais de estilo.",
  },
  homem: {
    gender: "homem",
    eyebrow: "Visagismo Masculino",
    headline: manHeadline,
    subhead:
      "Envie suas fotos e receba uma análise direta: cores que combinam com você, leitura do seu formato de rosto e sugestões práticas pra elevar o seu estilo.",
    ctaPrimary: "Começar minha análise",
    ctaSecondary: "Ver exemplo do relatório",
    heroImage: sampleImages.manHero,
    showcaseImages: sampleImages.manShowcase,
    finalCtaTitle: "Pronto pra evoluir o seu visual?",
    finalCtaText:
      "Análise de visagismo objetiva, com paleta de cores e leitura do formato do seu rosto. Tudo em um relatório visual fácil de usar.",
    metaTitle: "Visagismo Masculino — VisuMe",
    metaDescription:
      "Análise de visagismo personalizada para homens: cores, formato de rosto e sugestões práticas de estilo.",
  },
};
