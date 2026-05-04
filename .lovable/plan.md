## VisuMe — Melhoria do MVP: imagens de exemplo + PDF baixável

Escopo restrito a `/resultado/mock` e componentes do relatório. Sem novas rotas, backend, IA, Supabase ou pagamento.

### PARTE 1 — Imagens de exemplo

**Estratégia de imagens**: usar Unsplash com URLs determinísticas (`https://images.unsplash.com/photo-<id>?w=800&q=80&auto=format&fit=crop`) curadas — IDs fixos, não aleatórios, para evitar carregar pessoas inadequadas. Cada `<img>` tem `loading="lazy"`, `onError` que troca por um fallback gradient (mantém o layout) e selo "Imagem demonstrativa".

**Curadoria mínima** (5 retratos editoriais neutros + 8 de cabelo/barba) — IDs fixos definidos em `src/data/sampleImages.ts`:
- `portraitMain` — 1 retrato editorial neutro para a foto principal.
- `colorPortraits[5]` — 5 retratos para o carrossel "melhores cores".
- `avoidPortraits[3]` — 3 retratos para "cores que pesam".
- `haircuts[4]` e `beards[4]` — referências de corte/barba.

**Componente `SampleImage`** (`src/components/visume/SampleImage.tsx`): wrapper `<img>` com fallback automático para `<div>` gradient quando `onError` dispara. Mantém aspect-ratio e selo opcional.

**Atualizações**:

1. `ResultHeader.tsx` — substitui o placeholder atual pelo `SampleImage` (retrato editorial), mantém `MockBadge` "Foto exemplo" no canto.

2. `VisualSimulationCarousel.tsx` — cada card vira:
   - `SampleImage` de fundo (aspect 4/5).
   - Overlay inferior com swatch da cor + nome + HEX.
   - Tag "Combina"/"Evitar" no topo.
   - Legenda: "Simulação placeholder" (good) ou "Exemplo demonstrativo" (avoid).
   - Mantém o aviso "Imagem ilustrativa / placeholder. Futuramente a IA vai gerar essa simulação com a foto enviada."
   - Itens passam a aceitar `imageUrl` opcional. `mockAnalysisResult.colorAnalysis.bestSimulation` e `avoidSimulation` ganham `imageUrl` apontando para os IDs curados.

3. `HairRecommendationCard.tsx` — adicionar `SampleImage` topo do card com aviso "Imagem ilustrativa. Na versão final, a IA gerará uma simulação com a foto enviada." Os 4 cortes e 4 barbas em `mockAnalysisResult.hairAnalysis` recebem `imageUrl`.

### PARTE 2 — PDF baixável

**Biblioteca**: `jspdf` (pure JS, sem deps nativas, funciona no browser e é estável). Sem `html2canvas` — montaremos o PDF programaticamente para garantir layout limpo, leve e independente de fontes externas.

**Novo arquivo**: `src/lib/generateMockPdf.ts`
- Função `generateMockPdf()` assíncrona.
- Cria documento A4, fontes built-in (helvetica), paleta sóbria (azul petróleo `#1F5B5B`, vinho `#8A3F5C`, grafite `#2D3436`).
- Helpers internos: `addHeading`, `addParagraph`, `addSwatchRow(colors[])`, `addBulletList`, `addPageIfNeeded(yCursor)`.
- Lê dados de `mockAnalysisResult` para manter consistência com a tela.

**Estrutura do PDF** (`visume-relatorio-exemplo.pdf`):
1. **Capa**: faixa decorativa, "VisuMe", "Relatório visual personalizado", selo "Exemplo visual", parágrafo demonstrativo.
2. **Resumo**: Combo Completo, Confiança Média, melhor direção visual.
3. **Análise de cores**: estação, temperatura, intensidade, profundidade, contraste, subtom, paleta "ficam melhor" (swatches coloridos + nome + HEX), paleta "evitar".
4. **Cabelo/Barba**: formato de rosto, textura, cortes recomendados, cortes a evitar, barbas recomendadas, box "Como pedir ao barbeiro".
5. **Guia prático**: comprar, evitar, salão/barbeiro, checklist.
6. **Rodapé fixo** em todas as páginas: aviso completo sobre simulações aproximadas + "VisuMe — exemplo demonstrativo" + paginação.

### PARTE 3 — UX do botão

`PdfDownloadButton.tsx` e botão "Baixar PDF" do `ResultHeader.tsx` ganham:
- Estado `isGenerating`.
- Label muda para "Gerando PDF..." com spinner (`Loader2`) e fica `disabled`.
- Sucesso: `toast.success("PDF baixado com sucesso.")`.
- Erro: `toast.error("Não foi possível gerar o PDF agora. Tente novamente.")`.
- Import dinâmico de `jspdf` (`await import("jspdf")`) para não inflar o bundle inicial.

**Novo card informativo** ao lado do botão (em `ResultHeader.tsx` e/ou aba PDF): bloco compacto com ícone + "PDF demonstrativo disponível" + texto explicativo sobre versão final personalizada.

### PARTE 4 — Escopo mantido

Sem novas rotas, sem backend, sem auth, sem admin, sem histórico, sem pagamento real, sem IA, sem Supabase. Sem PDF Premium. Avisos de mock preservados em todos os pontos.

### Arquivos afetados

**Novos**
- `src/components/visume/SampleImage.tsx`
- `src/components/visume/PdfInfoCard.tsx`
- `src/data/sampleImages.ts`
- `src/lib/generateMockPdf.ts`

**Editados**
- `src/data/mockAnalysisResult.ts` — adiciona `imageUrl` em `bestSimulation`, `avoidSimulation`, `bestHaircuts`, `avoidHaircuts`, `beardStyles.recommended`.
- `src/components/visume/ResultHeader.tsx` — foto principal real, botão com loading, info card.
- `src/components/visume/VisualSimulationCarousel.tsx` — usa `SampleImage` + overlay swatch.
- `src/components/visume/HairRecommendationCard.tsx` — imagem topo + aviso.
- `src/components/visume/PdfDownloadButton.tsx` — estado de loading + chamada real.
- `src/routes/resultado.mock.tsx` — passar nova prop / posicionar `PdfInfoCard` na aba PDF.

### Dependências

- Adicionar `jspdf` (`bun add jspdf`). Pure JS, ~200kb, sem nativos — compatível com o runtime do projeto e carregado dinamicamente apenas quando o usuário clica.

### Resultado

`/resultado/mock` fica mais editorial e visual com fotos exemplo claramente rotuladas, e o botão "Baixar PDF" gera de fato um arquivo `visume-relatorio-exemplo.pdf` bonito, com toasts de loading/sucesso/erro e card explicativo sobre o caráter demonstrativo.
