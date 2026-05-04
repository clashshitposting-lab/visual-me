import { sampleImages } from "./sampleImages";

/**
 * Dados de exemplo apenas para demonstrar o layout do relatório.
 * Não tratar como cartela fixa — futuramente cada usuário receberá dados próprios
 * retornados pela IA, montados nos mesmos componentes visuais.
 */

export type ColorSwatch = { name: string; hex: string };

export type MockAnalysisResult = {
  isMock: true;
  mockLabel: string;
  mockDisclaimer: string;
  summary: string;
  confidence: "baixa" | "média" | "alta";
  colorAnalysis: {
    isExample: true;
    season: string;
    temperature: string;
    intensity: string;
    depth: string;
    contrast: string;
    undertone: string;
    bestColors: ColorSwatch[];
    avoidColors: ColorSwatch[];
    idealNeutrals: ColorSwatch[];
    accentColors: ColorSwatch[];
    explanation: string;
    bestSimulation: { title: string; color: string; imageUrl?: string }[];
    avoidSimulation: { title: string; color: string; imageUrl?: string }[];
  };
  hairAnalysis: {
    isExample: true;
    faceShape: string;
    hairTexture: string;
    hairVolume: string;
    direction: string;
    bestHaircuts: { title: string; description: string; imageUrl?: string }[];
    avoidHaircuts: { title: string; description: string; imageUrl?: string }[];
    beardStyles: {
      recommended: { title: string; description: string; imageUrl?: string }[];
    };
    barberInstruction: string;
    stylingTips: string[];
  };
  practicalGuide: { title: string; items: string[] }[];
};

export const mockAnalysisResult: MockAnalysisResult = {
  isMock: true,
  mockLabel: "Exemplo visual",
  mockDisclaimer:
    "Este é um exemplo visual de relatório. Na versão final, a análise será personalizada de acordo com suas fotos.",
  summary:
    "Este relatório usa dados mockados para demonstrar o layout da experiência VisuMe.",
  confidence: "média",
  colorAnalysis: {
    isExample: true,
    season: "Verão Escuro",
    temperature: "Neutra-fria",
    intensity: "Média",
    depth: "Média a profunda",
    contrast: "Médio",
    undertone: "Frio/Neutro-frio",
    bestColors: [
      { name: "Azul marinho", hex: "#1C2D3F" },
      { name: "Azul petróleo", hex: "#1F5B5B" },
      { name: "Verde sálvia escuro", hex: "#6F8B7B" },
      { name: "Vinho queimado", hex: "#8A3F5C" },
      { name: "Rosa antigo", hex: "#A86C7D" },
      { name: "Cinza azulado", hex: "#526A7A" },
      { name: "Grafite", hex: "#2D3436" },
      { name: "Off-white frio", hex: "#E8E3DC" },
    ],
    avoidColors: [
      { name: "Amarelo vivo", hex: "#F5C21A" },
      { name: "Laranja quente", hex: "#F47A22" },
      { name: "Coral aceso", hex: "#F06449" },
      { name: "Vermelho aberto", hex: "#D93832" },
      { name: "Bege muito quente", hex: "#D9A66F" },
      { name: "Mostarda", hex: "#B5A82D" },
    ],
    idealNeutrals: [
      { name: "Grafite", hex: "#2D3436" },
      { name: "Cinza azulado", hex: "#526A7A" },
      { name: "Off-white frio", hex: "#E8E3DC" },
    ],
    accentColors: [
      { name: "Vinho queimado", hex: "#8A3F5C" },
      { name: "Rosa antigo", hex: "#A86C7D" },
    ],
    explanation:
      "Exemplo de texto explicativo. Na versão final, esta explicação será gerada com base nas fotos enviadas.",
    bestSimulation: [
      { title: "Azul marinho", color: "#1C2D3F", imageUrl: sampleImages.colorPortraits[0] },
      { title: "Azul petróleo", color: "#1F5B5B", imageUrl: sampleImages.colorPortraits[1] },
      { title: "Vinho queimado", color: "#8A3F5C", imageUrl: sampleImages.colorPortraits[2] },
      { title: "Verde sálvia", color: "#6F8B7B", imageUrl: sampleImages.colorPortraits[3] },
      { title: "Grafite", color: "#2D3436", imageUrl: sampleImages.colorPortraits[4] },
    ],
    avoidSimulation: [
      { title: "Amarelo vivo", color: "#F5C21A", imageUrl: sampleImages.avoidPortraits[0] },
      { title: "Laranja quente", color: "#F47A22", imageUrl: sampleImages.avoidPortraits[1] },
      { title: "Coral aceso", color: "#F06449", imageUrl: sampleImages.avoidPortraits[2] },
    ],
  },
  hairAnalysis: {
    isExample: true,
    faceShape: "Oval/alongado",
    hairTexture: "Ondulado/cacheado",
    hairVolume: "Médio/alto",
    direction: "Laterais controladas + volume equilibrado no topo",
    bestHaircuts: [
      { title: "Degradê baixo com volume natural", description: "Mantém o volume no topo e equilibra o rosto.", imageUrl: sampleImages.haircuts[0] },
      { title: "Cachos curtos naturais", description: "Valoriza a textura sem alongar demais.", imageUrl: sampleImages.haircuts[1] },
      { title: "Degradê médio texturizado", description: "Movimento controlado e contorno limpo.", imageUrl: sampleImages.haircuts[2] },
      { title: "Afro controlado/afilado", description: "Volume harmônico com a proporção do rosto.", imageUrl: sampleImages.haircuts[3] },
    ],
    avoidHaircuts: [
      { title: "Lateral muito raspada", description: "Pode alongar ainda mais o rosto." },
      { title: "Topete alto demais", description: "Quebra a proporção vertical." },
      { title: "Liso comprido sem volume", description: "Tende a achatar o visual." },
      { title: "Franja pesada caída", description: "Encurta a testa e desequilibra." },
    ],
    beardStyles: {
      recommended: [
        { title: "Barba natural curta", description: "Limpa e harmônica.", imageUrl: sampleImages.beards[0] },
        { title: "Barba por fazer (3 a 5 dias)", description: "Casual e moderna.", imageUrl: sampleImages.beards[1] },
        { title: "Cavanhaque definido", description: "Foca o queixo.", imageUrl: sampleImages.beards[2] },
        { title: "Barba cheia curta", description: "Sofisticada e equilibrada.", imageUrl: sampleImages.beards[3] },
      ],
    },
    barberInstruction:
      "Quero um degradê baixo nas laterais, sem subir muito, mantendo o volume natural no topo. Pode limpar o contorno, mas sem deixar a lateral extremamente raspada. A ideia é equilibrar o rosto e manter textura natural.",
    stylingTips: [
      "Use leave-in para definir a textura",
      "Finalize com creme modelador leve",
      "Evite chapinha contínua",
    ],
  },
  practicalGuide: [
    {
      title: "O que comprar",
      items: [
        "Camisetas em azul marinho e petróleo",
        "Camisas off-white frio",
        "Acessórios em grafite",
      ],
    },
    {
      title: "O que evitar",
      items: [
        "Tons amarelo vivo próximos ao rosto",
        "Estampas em coral aceso",
        "Bege muito quente em peças grandes",
      ],
    },
    {
      title: "O que pedir no salão/barbeiro",
      items: [
        "Degradê baixo, volume preservado no topo",
        "Contorno limpo, sem raspar lateral",
        "Barba aparada mantendo formato natural",
      ],
    },
    {
      title: "Checklist rápido",
      items: [
        "Levar fotos de referência",
        "Pedir finalização explicada",
        "Combinar manutenção a cada 3-4 semanas",
      ],
    },
    {
      title: "Cuidados de manutenção",
      items: [
        "Hidratação semanal",
        "Proteção térmica antes de finalizar",
        "Lavar com produtos sem sulfato",
      ],
    },
    {
      title: "Próximos testes recomendados",
      items: [
        "Experimentar peças em vinho queimado",
        "Testar barba 3-5 dias",
        "Provar combinação grafite + off-white",
      ],
    },
  ],
};
