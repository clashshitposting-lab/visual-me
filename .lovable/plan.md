## Objetivo

Transformar `/mulher` e `/homem` em landings de funil de venda direto: copy persuasivo focado em dor → solução → prova → oferta → CTA. Remover navegação que distrai (links "Para ela / Para ele / Prévia") e remover o botão secundário "Ver exemplo do relatório" do hero. O usuário só tem um caminho: comprar.

## Mudanças

### 1. `SiteHeader.tsx` — enxugar para modo funil
- Remover os links de navegação ("Para ela", "Para ele", "Prévia").
- Logo VisuMe permanece (sem virar link, ou linka pra rota atual). Botão "Começar" no canto direito leva direto pro `/checkout`.
- Resultado: header limpo, sem fuga de atenção.

### 2. `GenderLanding.tsx` — reestruturar para funil de conversão
Nova ordem das seções (de cima pra baixo):

1. **Hero com dor + promessa** — headline forte, subhead que nomeia a dor, 1 CTA único ("Quero minha análise por R$67"), selo de confiança ("+pagamento único · resultado em minutos · sem agendamento"). Remover botão "Ver exemplo do relatório".
2. **Bloco de dor** (novo) — 3 bullets curtos: "Você já…" (ex: comprou roupa errada, mudou o corte e se arrependeu, ficou perdida/o em mil tutoriais). Conecta emocionalmente.
3. **Solução em 1 frase + HowItWorks** (4 passos, mantém componente).
4. **ExampleShowcase** (o que você recebe) — sem o link "Ver exemplo de relatório completo" (cortar pra não distrair).
5. **Differentials** (mantém).
6. **ProductPricingCards** (comparativo R$500 vs R$67, já existente).
7. **Bloco de garantia/objeção** (novo) — "E se eu não gostar?", "É pra mim?", "Quanto tempo demora?" — 3 cards curtos respondendo objeções de compra.
8. **CTA final** (mantém, copy mais agressivo de fechamento).
9. **FAQ** (mantém).

### 3. Copy novo em `landingContent.ts`
Reescrever com tom de venda direto, específico por gênero. Estrutura por gênero:

- `eyebrow` (selo curto)
- `headline` (promessa + transformação)
- `subhead` (nomeia a dor + apresenta a solução em 1 parágrafo)
- `painPoints: string[]` (3 dores — NOVO campo)
- `solutionLine` (frase ponte — NOVO)
- `ctaPrimary` ("Quero minha análise por R$67")
- `objections: { q, a }[]` (3 objeções — NOVO)
- `finalCtaTitle` / `finalCtaText` (fechamento agressivo)
- Remove `ctaSecondary` (não usado mais).

**Exemplo — Mulher:**
- Headline: "Pare de comprar roupa que não te valoriza. Descubra em minutos as cores e traços que fazem você brilhar."
- Dores: "Você já comprou uma peça linda na loja que ficou estranha em casa?" / "Mudou o corte achando que ia arrasar e se arrependeu?" / "Vive na dúvida sobre o que combina com seu rosto e seu tom de pele?"
- Fechamento: "Sua próxima compra de roupa ou ida ao salão pode ser a certa."

**Exemplo — Homem:**
- Headline: "O visual certo pra impor presença — sem palpite, sem gastar com roupa que você nunca usa."
- Dores: "Você já comprou camisa que parecia certa e nunca mais vestiu?" / "Mudou o corte e ficou pior do que estava?" / "Sente que poderia parecer mais bem apresentado, mas não sabe por onde começar?"
- Fechamento: "Em minutos você sabe exatamente o que comprar e como cortar o cabelo."

### 4. Pequenos ajustes
- `ExampleShowcase`: tornar o link "Ver exemplo de relatório completo" opcional via prop e passar `false` nas landings (mantém uso em outras telas).
- Remover do hero o link `to="/resultado/mock"`.

## Fora do escopo
- Página `/`, `/produtos`, `/checkout`, `/resultado/mock` — sem mudanças.
- Integração Kiwify / pagamento real.
- Imagens (mantêm as atuais).
