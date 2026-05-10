# Plano — Duas landings por gênero, foco em visagismo

## Objetivo
Substituir a landing genérica por **duas páginas de venda específicas** — uma feminina e uma masculina — focadas no produto **Visagismo (análise de cores + formato de rosto)**. Cabelo/barba e combo continuam visíveis como upsell secundário. Ambas convertem para o mesmo fluxo: `/checkout → /upload → /processando → /resultado/mock`.

## Rotas (mantém limite de rotas combinado)
```
/              → redireciona para /mulher (Navigate)
/mulher        → landing feminina (nova)
/homem         → landing masculina (nova)
/produtos      → mantém (visagismo em destaque)
/checkout      → mantém mockado
/upload        → mantém
/processando   → mantém
/resultado/mock → mantém
```
Removo o conteúdo da `index.tsx` atual (LandingHero + seções) e transformo em redirect. As seções viram componentes reutilizáveis pelas duas novas landings.

## Estrutura de cada landing
Mesmo layout base, **copy e imagens diferentes**:

1. **Hero específico do gênero**
   - Headline + subhead com tom adequado
   - CTA principal: "Começar minha análise de visagismo" → `/checkout?product=visagismo`
   - CTA secundário: "Ver exemplo do relatório" → `/resultado/mock`
   - Imagem hero modelo (feminino / masculino)

2. **Como funciona** (3 passos — reaproveita `HowItWorks`)
3. **O que você recebe** (foco em visagismo: paleta + formato de rosto + sugestões)
4. **Prévia visual** (`ExampleShowcase` com imagens do gênero)
5. **Diferenciais** (`Differentials`)
6. **Produto principal: Visagismo** + card menor "Combo completo (com cabelo/barba)" como upsell
7. **FAQ** (`FAQSection` — perguntas levemente ajustadas por gênero)
8. **CTA final**

## Produto "Visagismo"
Adiciono novo produto em `src/data/products.ts`:
- `id: "visagismo"`, nome "Análise de Visagismo", preço a definir (sugiro R$ 39,90), highlights focados em cores + formato de rosto.
- Mantenho `cabelo` e `combo` como upsell.
- `/produtos` reordena: Visagismo em destaque (featured), combo como upgrade.

## Copy & tom (resumo)

| | Feminino (/mulher) | Masculino (/homem) |
|---|---|---|
| Headline | "Descubra as cores e os traços que valorizam a sua beleza única" | "O visual certo pra impor presença sem esforço" |
| Tom | acolhedor, sofisticado, empoderador | direto, confiante, prático |
| Paleta de imagens | retratos femininos editoriais | retratos masculinos editoriais |
| Prova social/copy | "milhares de mulheres" | "homens que querem evoluir o visual" |
| Mantém marca | VisuMe, mesmas cores/tipografia | idem |

## Arquivos

**Criar**
- `src/routes/mulher.tsx`
- `src/routes/homem.tsx`
- `src/components/visume/GenderLanding.tsx` — componente compartilhado que recebe props (`gender`, `headline`, `subhead`, `heroImage`, `showcaseImages`, `ctaCopy`, etc.)
- `src/data/landingContent.ts` — objeto com a copy de cada gênero
- Adicionar URLs de imagens femininas/masculinas em `src/data/sampleImages.ts`

**Editar**
- `src/routes/index.tsx` → vira `<Navigate to="/mulher" replace />` com `head()` apontando metadata genérica VisuMe
- `src/data/products.ts` → adicionar produto `visagismo` e marcar como featured
- `src/components/visume/SiteHeader.tsx` → nav passa a ter "Para ela" / "Para ele" no lugar de links genéricos
- `src/components/visume/ProductPricingCards.tsx` → destacar Visagismo
- `src/components/visume/LandingHero.tsx` → refatorar para receber props e ser reutilizado pelo `GenderLanding`

**Não mexer**
- `/checkout`, `/upload`, `/processando`, `/resultado/mock` (mantêm fluxo atual)
- Backend / Supabase / pagamento real (continua tudo mock)

## SEO
Cada landing recebe `head()` próprio:
- `/mulher`: title "Visagismo Feminino — VisuMe", description focada em mulher
- `/homem`: title "Visagismo Masculino — VisuMe", description focada em homem
- `/`: noindex + redirect

## Mobile-first
Mesmo padrão atual: layout em coluna no mobile, hero com imagem abaixo do texto, CTAs full-width até `sm:`.

## Fora do escopo (próximas fases)
- Integração real Kiwify (placeholder mantido como `/checkout` interno)
- Backend / IA real / login
- Variações de tipografia/paleta por gênero (mesma marca por enquanto)
