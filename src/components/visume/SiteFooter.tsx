export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg">VisuMe</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Veja seu melhor visual em você.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} VisuMe · Análise visual orientativa
          </p>
        </div>
      </div>
    </footer>
  );
}
