import { Check } from "lucide-react";
import type { Product } from "@/data/products";
import { formatBRL } from "@/context/VisumeContext";

export function CheckoutSummary({
  product,
  bumpsTotal,
  bumpsCount,
  total,
}: {
  product: Product;
  bumpsTotal: number;
  bumpsCount: number;
  total: number;
}) {
  return (
    <aside className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-7">
      <h2 className="font-display text-xl">Resumo do pedido</h2>

      <div className="mt-5 rounded-2xl bg-muted/60 p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Produto escolhido
        </p>
        <p className="mt-1 font-display text-lg">{product.name}</p>
        <p className="text-sm text-muted-foreground">{product.short}</p>
      </div>

      <ul className="mt-4 space-y-2 text-sm">
        {product.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-2 border-t border-dashed border-border pt-4 text-sm">
        <Row label="Subtotal" value={formatBRL(product.price)} />
        <Row
          label={`Extras (${bumpsCount})`}
          value={bumpsTotal > 0 ? formatBRL(bumpsTotal) : "—"}
          muted
        />
      </div>

      <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
        <span className="text-sm font-medium">Total</span>
        <span className="font-display text-2xl">{formatBRL(total)}</span>
      </div>
    </aside>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={muted ? "text-muted-foreground" : ""}>{label}</span>
      <span className={muted ? "text-muted-foreground" : "font-medium"}>{value}</span>
    </div>
  );
}
