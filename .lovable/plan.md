## Comparativo de preços nas landings

Substituir os 3 cards atuais de `ProductPricingCards` por **2 cards lado a lado** que comparam o preço de uma consultoria tradicional com a análise da VisuMe.

### Mudança de dados
- `src/data/products.ts`: subir `visagismo.price` de R$ 39,90 → **R$ 67,00**.
- `cabelo` e `combo` continuam no array (usados em `/produtos` e `/checkout`), mas não aparecem mais nas landings `/mulher` e `/homem`.

### Novo `ProductPricingCards`
Renderiza dois cards fixos (não mapeia mais `products`):

**Card esquerdo — Consultoria tradicional (referência)**
- Badge sutil "Referência de mercado"
- Título: "Consultoria de visagismo presencial"
- Preço: ~~R$ 500,00~~ por sessão (line-through, cor `muted-foreground`)
- Lista do que costuma incluir: agendamento, 1–2 horas presenciais, deslocamento, retorno limitado
- Visual gray/muted, sem CTA (ou CTA desabilitado)

**Card direito — VisuMe (destaque)**
- Badge "Mais escolhido" com cor primária
- Título: "Análise de Visagismo VisuMe"
- Preço: **R$ 67,00** em destaque, com microcopy "pagamento único"
- Highlights vindos de `products.visagismo.highlights` + "Resultado em minutos" e "Sem sair de casa"
- Borda primária + shadow
- CTA "Começar minha análise" → seta `visagismo` no contexto e navega para `/checkout`

### Layout
- Desktop (`lg:`): `grid-cols-2`, cards lado a lado, mesma altura.
- Mobile: empilhado, card VisuMe primeiro.
- Mantém o cabeçalho da seção ("Escolha sua análise / Preços") e o link "Ver detalhes dos pacotes" → `/produtos`.

### Arquivos
- Editar: `src/components/visume/ProductPricingCards.tsx` (reescrita do grid), `src/data/products.ts` (preço).
- Sem mudanças em rotas, checkout, upload, header, FAQ.

### Fora do escopo
- Integração Kiwify, mudanças em `/produtos` e `/checkout`, novo produto/SKU.

Pesquisei rapidamente na web: consultorias de visagismo presenciais no Brasil costumam ficar entre R$ 300 e R$ 800 — usar **R$ 500** como referência de mercado é coerente.
