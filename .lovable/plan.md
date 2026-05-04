## VisuMe — MVP Mockado (final, com seus ajustes)

Plataforma mobile first de análise visual personalizada. Tudo mockado: sem IA, sem pagamento, sem backend, sem PDF real.

### Rotas (somente estas 6)

`/` · `/produtos` · `/checkout` · `/upload` · `/processando` · `/resultado/mock`

### Ajustes incorporados

1. **Checkout — order bumps "Em breve"**: aparecem visualmente, mas com `disabled` real (sem clique, sem toggle), opacidade reduzida, badge "Em breve" e tooltip. Apenas 4 são selecionáveis: Guardar resultado por mais tempo, PDF Premium, Prévia visual extra (badge Beta, ainda selecionável), Nova análise com novas fotos.
2. **Processando**: stepper avança por ~8s, depois habilita o botão "Ver resultado mockado". **Sem auto-redirect** — só navega no clique.
3. **Resultado /resultado/mock**: tratado como peça principal. Layout tipo relatório editorial premium, não listagem. Hero do relatório, tipografia display, divisores ornamentais, paletas em grid editorial, carrossel de simulações com framing tipo polaroid, box "instrução para barbeiro" como citação destacada, banner de expiração elegante, abas (Resumo / Cores / Cabelo & Barba / Guia prático / PDF) bem espaçadas.
4. **Carrosséis de simulações**: cada item exibe o aviso explícito *"Imagem ilustrativa / placeholder. Futuramente a IA vai gerar essa simulação com a foto enviada."*
5. **Botão "Baixar PDF"**: apenas `toast.info` com "PDF real será gerado na próxima etapa…". Sem geração.
6. **Botão "Salvar resultado"**: apenas `toast.success` informativo. Sem backend.
7. **Mobile first rigoroso**: layouts padrão `flex-col` / `grid-cols-1`, breakpoints `sm:` e `lg:` apenas para enriquecer no desktop. Tipografia escalada com `clamp`. Botões com alvo ≥44px. Carrosséis com swipe nativo embla.
8. **Sem rotas extras** além das 6.

### Identidade visual

- Tokens semânticos em `src/styles.css` (oklch): `--primary` azul petróleo, `--accent` vinho queimado, `--background` off-white nude, `--foreground` grafite, `--success` verde suave, `--destructive` vermelho suave, `--nude`, sombras `--shadow-soft` e `--shadow-premium`.
- Fontes: Fraunces (display, títulos) + Inter (corpo) carregadas via `<link>` no `__root.tsx`.
- Cards arredondados (`rounded-2xl`/`rounded-3xl`), sombras suaves, muito respiro.
- Selos `MockBadge` reutilizáveis ("Exemplo visual" / "Exemplo de resultado").

### Estrutura de arquivos

**Dados** (`src/data/`)
- `products.ts` — 3 produtos.
- `orderBumps.ts` — 7 upsells, flag `available` controlando seleção.
- `faq.ts` — 5 perguntas.
- `processingSteps.ts` — steps + mensagens rotativas.
- `mockAnalysisResult.ts` — objeto `mockAnalysisResult` conforme estrutura solicitada (`isMock`, `colorAnalysis`, `hairAnalysis`, `practicalGuide`).

**Estado** (`src/context/VisumeContext.tsx`)
Provider com produto selecionado, bumps marcados e uploads (preview local via `URL.createObjectURL`). Fallback: checkout sem produto → assume Combo Completo.

**Componentes** (`src/components/visume/`)
SiteHeader, SiteFooter, MockBadge, SectionDisclaimer, LandingHero, HowItWorks, ExampleShowcase, Differentials, ProductPricingCards, FAQSection, CheckoutSummary, OrderBumpCard, PaymentMethodSelector, UploadPhotoCard, ProcessingStepper, ResultHeader, ResultExpirationBanner, ColorSwatch, ColorPaletteCard, ColorAnalysisSummary, VisualSimulationCarousel, HairRecommendationCard, AvoidRecommendationCard, BarberInstructionBox, PracticalGuideCard, PdfDownloadButton.

**Rotas** (`src/routes/`)
- `__root.tsx` atualizado com fontes, `<Toaster />` da sonner, `VisumeProvider`, header/footer compartilhados.
- `index.tsx` — Landing.
- `produtos.tsx`, `checkout.tsx`, `upload.tsx`, `processando.tsx`, `resultado.mock.tsx` (rota `/resultado/mock`).

Cada rota define seu próprio `head()` em PT-BR (title, description, og).

### Detalhes por página

**Landing**: Hero com headline display + subhead + dois CTAs (primário→`/produtos`, secundário→`/resultado/mock`). HowItWorks (4 passos). ExampleShowcase com cards mockados e selo "Exemplo visual". Differentials (6 itens). Pricing (3 produtos). FAQ accordion.

**Produtos**: 3 cards premium com highlights, destaque visual no Combo. Botão grava no contexto e navega para `/checkout`.

**Checkout**: Resumo do produto + cupom mockado (qualquer texto exibe "Cupom aplicado" visual, sem alterar valor) + 7 OrderBumpCard (3 disabled com tooltip "Em breve"), total dinâmico (produto + bumps marcados), seletor visual Pix/Cartão/Apple-Google Pay, botão "Finalizar pedido" → `/upload`.

**Upload**: Instruções, 4 UploadPhotoCard (frente/perfil esq/perfil dir/extra), preview local. Botão "Continuar para análise" → `/processando`.

**Processando**: ProcessingStepper anima os 6 status, mensagens rotativas a cada ~1.4s. Após ~8s habilita o botão "Ver resultado mockado". **Não navega sozinho.**

**Resultado**: ResultHeader (título display, MockBadge, disclaimer, foto principal placeholder elegante, ações Baixar PDF / Salvar resultado, ResultExpirationBanner). Tabs:
  - **Resumo**: cards (Tipo de análise, Confiança, Melhor direção visual, Principais recomendações).
  - **Cores**: ColorAnalysisSummary, ColorPaletteCard "Exemplo: cores que ficam melhor", ColorPaletteCard "Exemplo: cores para evitar", VisualSimulationCarousel "você usando suas melhores cores" com aviso de placeholder, VisualSimulationCarousel "cores que podem pesar".
  - **Cabelo/Barba**: cards de características, lista de cortes recomendados, lista de cortes a evitar, barbas recomendadas, BarberInstructionBox em destaque.
  - **Guia prático**: 6 PracticalGuideCard.
  - **PDF**: PdfDownloadButton + disclaimer das simulações.

### Preparação futura

Comentários `// TODO (futuro): Supabase Auth/DB/Storage · process-analysis · generate-visual-simulations · generate-pdf · cleanup-expired-results · pagamento real` em pontos relevantes. Sem implementação.

### Técnico

- Stack: TanStack Start + Tailwind v4 + shadcn (já no projeto).
- Sem dependências novas.
- Sem rotas API, sem server functions.
- Toasts via `sonner` (já instalada). Adiciona `<Toaster />` no `__root.tsx`.
- Fontes via `<link>` Google Fonts em `__root.tsx`.

### Resultado

Fluxo Landing → Produtos → Checkout → Upload → Processando → Resultado totalmente navegável, mobile first, premium e pronto para evoluir.