// Imagens de exemplo curadas (Unsplash). IDs fixos para previsibilidade.
// Todas usadas APENAS como demonstração visual no relatório mockado.

const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const sampleImages = {
  portraitMain: u("photo-1531123897727-8f129e1688ce", 900),
  colorPortraits: [
    u("photo-1500648767791-00dcc994a43e"),
    u("photo-1507003211169-0a1dd7228f2d"),
    u("photo-1492562080023-ab3db95bfbce"),
    u("photo-1506794778202-cad84cf45f1d"),
    u("photo-1519085360753-af0119f7cbe7"),
  ],
  avoidPortraits: [
    u("photo-1488161628813-04466f872be2"),
    u("photo-1463453091185-61582044d556"),
    u("photo-1502685104226-ee32379fefbe"),
  ],
  haircuts: [
    u("photo-1521119989659-a83eee488004"),
    u("photo-1503443207922-dff7d543fd0e"),
    u("photo-1517841905240-472988babdf9"),
    u("photo-1492562080023-ab3db95bfbce"),
  ],
  beards: [
    u("photo-1519085360753-af0119f7cbe7"),
    u("photo-1506794778202-cad84cf45f1d"),
    u("photo-1500648767791-00dcc994a43e"),
    u("photo-1463453091185-61582044d556"),
  ],
  // Landing-specific
  womanHero: u("photo-1531746020798-e6953c6e8e04", 1100),
  womanShowcase: [
    u("photo-1500917293891-ef795e70e1f6"),
    u("photo-1508214751196-bcfd4ca60f91"),
    u("photo-1488426862026-3ee34a7d66df"),
    u("photo-1524504388940-b1c1722653e1"),
  ],
  manHero: u("photo-1500648767791-00dcc994a43e", 1100),
  manShowcase: [
    u("photo-1506794778202-cad84cf45f1d"),
    u("photo-1519085360753-af0119f7cbe7"),
    u("photo-1463453091185-61582044d556"),
    u("photo-1488161628813-04466f872be2"),
  ],
};
