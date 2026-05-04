import { cn } from "@/lib/utils";

export function MockBadge({
  className,
  children = "Exemplo visual",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-warning/40 bg-warning/15 px-2.5 py-1 text-xs font-medium text-warning-foreground",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-warning" />
      {children}
    </span>
  );
}
