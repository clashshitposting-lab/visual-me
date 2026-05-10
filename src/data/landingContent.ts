import type { ReactNode } from "react";

export type Gender = "mulher" | "homem";

export type Objection = { q: string; a: string };

export type LandingContent = {
  gender: Gender;
  eyebrow: string;
  headline: ReactNode;
  subhead: string;
  painIntro: string;
  painPoints: string[];
  solutionLine: string;
  ctaPrimary: string;
  trustLine: string;
  heroImage: string;
  showcaseImages: string[];
  objections: Objection[];
  finalCtaTitle: string;
  finalCtaText: string;
  metaTitle: string;
  metaDescription: string;
};

import { sampleImages } from "./sampleImages";
import { Fragment, createElement } from "react";

const womanHeadline = createElement(
  Fragment,
  null,
  "Pare de comprar roupa que não te valoriza. Descubra as cores e traços que fazem ",
  createElement("span", { className: "italic text-accent" }, "você brilhar"),
);

const manHeadline = createElement(
  Fragment,
  null,
  "O visual certo pra ",
  createElement("span", { className: "italic text-accent" }, "impor presença"),
  " — sem palpite, sem errar na compra",
);

export const landingByGender: Record<Gender, LandingContent> = {
  mulher: {
    gender: "mulher",
    eyebrow: "Visagismo Feminino",
    headline: womanHeadline,
    subhead:
      "Em poucos minutos você recebe uma análise visual personalizada com a paleta de cores que harmoniza com sua pele, a leitura do seu formato de rosto e sugestões práticas de estilo, corte e maquiagem feitas pra você.",
    painIntro: "Talvez você já tenha passado por isso…",
    painPoints: [
      "Comprou uma peça linda na loja que, em casa, ficou estranha no seu corpo.",
      "Mudou o corte de cabelo achando que ia arrasar — e se arrependeu na hora.",
      "Vive na dúvida sobre o que combina com seu tom de pele e o seu rosto.",
    ],
    solutionLine:
      "A VisuMe traduz tudo isso em um relatório visual claro: cores certas, formato de rosto e ideias prontas pra usar no dia a dia.",
    ctaPrimary: "Quero minha análise por R$ 67",
    trustLine: "Pagamento único · resultado em minutos · sem agendamento",
    heroImage: sampleImages.womanHero,
    showcaseImages: sampleImages.womanShowcase,
    objections: [
      {
        q: "É realmente pra mim?",
        a: "Sim. A análise é feita a partir das suas próprias fotos — não usa cartelas genéricas. Funciona pra qualquer tom de pele, idade ou estilo.",
      },
      {
        q: "Quanto tempo leva?",
        a: "Você envia as fotos e em poucos minutos recebe seu relatório completo, com paleta, formato de rosto e sugestões práticas.",
      },
      {
        q: "E se eu não gostar?",
        a: "O relatório é orientativo e visual: você vê na hora se faz sentido. Tudo é entregue em PDF pra você consultar sempre que quiser.",
      },
    ],
    finalCtaTitle: "Sua próxima compra pode ser a certa.",
    finalCtaText:
      "Em minutos você sabe quais cores valorizam sua pele e quais cortes harmonizam com seu rosto. Chega de tentativa e erro no provador e no salão.",
    metaTitle: "Visagismo Feminino — Descubra suas cores em minutos | VisuMe",
    metaDescription:
      "Análise de visagismo personalizada para mulheres por R$ 67. Paleta de cores, formato de rosto e sugestões de estilo a partir das suas fotos.",
  },
  homem: {
    gender: "homem",
    eyebrow: "Visagismo Masculino",
    headline: manHeadline,
    subhead:
      "Em minutos você recebe uma análise direta com as cores que combinam com você, a leitura do seu formato de rosto e sugestões práticas de corte, barba e roupa pra elevar o seu estilo.",
    painIntro: "Provavelmente você já passou por isso…",
    painPoints: [
      "Comprou uma camisa que parecia certa e nunca mais vestiu.",
      "Mudou o corte de cabelo e ficou pior do que estava antes.",
      "Sente que poderia parecer mais bem apresentado, mas não sabe por onde começar.",
    ],
    solutionLine:
      "A VisuMe te entrega um plano visual: cores que funcionam em você, corte que valoriza seu rosto e direção de estilo sem firula.",
    ctaPrimary: "Quero minha análise por R$ 67",
    trustLine: "Pagamento único · resultado em minutos · sem agendamento",
    heroImage: sampleImages.manHero,
    showcaseImages: sampleImages.manShowcase,
    objections: [
      {
        q: "Funciona pro meu estilo?",
        a: "Sim. A análise sai das suas fotos — qualquer tom de pele, idade ou estilo. Você decide o que usar das sugestões.",
      },
      {
        q: "Quanto tempo demora?",
        a: "Você envia suas fotos e em poucos minutos recebe o relatório completo. Sem agenda, sem deslocamento.",
      },
      {
        q: "E se eu não gostar?",
        a: "O relatório é visual e direto. Você vê na hora se faz sentido — e leva o PDF pra consultar antes de cada compra ou corte.",
      },
    ],
    finalCtaTitle: "Pare de errar na compra e no barbeiro.",
    finalCtaText:
      "Em minutos você sabe exatamente o que veste bem e como pedir o corte certo. Sem palpite, sem desperdício.",
    metaTitle: "Visagismo Masculino — Estilo certo em minutos | VisuMe",
    metaDescription:
      "Análise de visagismo personalizada para homens por R$ 67. Cores, formato de rosto e sugestões de corte e estilo a partir das suas fotos.",
  },
};
