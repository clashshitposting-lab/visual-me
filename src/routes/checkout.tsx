import { useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check, Lock, Tag } from "lucide-react";
import { useVisume, formatBRL } from "@/context/VisumeContext";
import { getProductById } from "@/data/products";
import { orderBumps } from "@/data/orderBumps";
import { CheckoutSummary } from "@/components/visume/CheckoutSummary";
import { OrderBumpCard } from "@/components/visume/OrderBumpCard";
import { PaymentMethodSelector } from "@/components/visume/PaymentMethodSelector";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — VisuMe" },
      {
        name: "description",
        content: "Finalize seu pedido VisuMe com extras opcionais.",
      },
      { property: "og:title", content: "Checkout — VisuMe" },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const navigate = useNavigate();
  const { selectedProduct, selectedBumps, toggleBump } = useVisume();
  const product = getProductById(selectedProduct?.id);

  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [method, setMethod] = useState("pix");

  const bumpsTotal = useMemo(
    () =>
      orderBumps
        .filter((b) => b.available && selectedBumps.includes(b.id))
        .reduce((s, b) => s + b.price, 0),
    [selectedBumps],
  );
  const bumpsCount = selectedBumps.filter(
    (id) => orderBumps.find((b) => b.id === id)?.available,
  ).length;
  const total = product.price + bumpsTotal;

  const onFinish = () => {
    // TODO (futuro): integrar com pagamento real
    navigate({ to: "/upload" });
  };

  return (
    <div className="bg-nude/20">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Checkout
          </p>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl">Finalize seu pedido</h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Pagamento seguro, ambiente protegido. Você recebe acesso ao envio das
            fotos logo após a confirmação.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            {/* Cupom */}
            <section className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
              <h2 className="font-display text-xl">Cupom de desconto</h2>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <Tag className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    value={coupon}
                    onChange={(e) => {
                      setCoupon(e.target.value);
                      setCouponApplied(false);
                    }}
                    placeholder="Insira seu cupom"
                    className="h-11 w-full rounded-full border border-input bg-background pl-9 pr-4 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <button
                  onClick={() => coupon && setCouponApplied(true)}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Aplicar
                </button>
              </div>
              {couponApplied && (
                <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-success">
                  <Check className="h-3.5 w-3.5" /> Cupom aplicado
                </p>
              )}
            </section>

            {/* Order bumps */}
            <section className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
              <div className="flex flex-wrap items-end justify-between gap-2">
                <div>
                  <h2 className="font-display text-xl">Adicionais recomendados</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Personalize sua experiência VisuMe.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Lock className="h-3 w-3" /> Itens "Em breve" não selecionáveis
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3">
                {orderBumps.map((b) => (
                  <OrderBumpCard
                    key={b.id}
                    bump={b}
                    selected={selectedBumps.includes(b.id)}
                    onToggle={() => toggleBump(b.id)}
                  />
                ))}
              </div>
            </section>

            {/* Payment */}
            <section className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
              <h2 className="font-display text-xl">Forma de pagamento</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Demonstração visual — nenhum pagamento real será cobrado.
              </p>
              <div className="mt-5">
                <PaymentMethodSelector value={method} onChange={setMethod} />
              </div>
            </section>
          </div>

          <div className="lg:sticky lg:top-20 lg:self-start">
            <CheckoutSummary
              product={product}
              bumpsTotal={bumpsTotal}
              bumpsCount={bumpsCount}
              total={total}
            />
            <button
              onClick={onFinish}
              className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              Finalizar pedido · {formatBRL(total)}
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Ao finalizar, você concorda com os termos do serviço VisuMe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
