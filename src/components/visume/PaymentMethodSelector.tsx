import { CreditCard, Smartphone, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const methods = [
  { id: "pix", label: "Pix", icon: Smartphone, hint: "Aprovação imediata" },
  { id: "card", label: "Cartão", icon: CreditCard, hint: "Crédito ou débito" },
  { id: "wallet", label: "Apple/Google Pay", icon: Wallet, hint: "1 toque" },
] as const;

export function PaymentMethodSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      {methods.map((m) => {
        const active = value === m.id;
        return (
          <button
            key={m.id}
            type="button"
            onClick={() => onChange(m.id)}
            className={cn(
              "flex items-center gap-3 rounded-2xl border p-4 text-left transition-all",
              active
                ? "border-primary/60 bg-primary/5 ring-1 ring-primary/30"
                : "border-border bg-card hover:bg-muted/40",
            )}
          >
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl",
                active
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground",
              )}
            >
              <m.icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium">{m.label}</p>
              <p className="text-xs text-muted-foreground">{m.hint}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
