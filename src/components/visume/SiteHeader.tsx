import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/mulher" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            VisuMe
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <Link
            to="/mulher"
            activeProps={{ className: "text-foreground font-medium" }}
            className="transition-colors hover:text-foreground"
          >
            Para ela
          </Link>
          <Link
            to="/homem"
            activeProps={{ className: "text-foreground font-medium" }}
            className="transition-colors hover:text-foreground"
          >
            Para ele
          </Link>
          <Link to="/resultado/mock" className="transition-colors hover:text-foreground">
            Prévia
          </Link>
        </nav>
        <Link
          to="/checkout"
          className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90"
        >
          Começar
        </Link>
      </div>
    </header>
  );
}
