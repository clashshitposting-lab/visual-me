import { createFileRoute } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockAnalysisResult } from "@/data/mockAnalysisResult";
import { ResultHeader } from "@/components/visume/ResultHeader";
import { ResultExpirationBanner } from "@/components/visume/ResultExpirationBanner";
import { ColorAnalysisSummary } from "@/components/visume/ColorAnalysisSummary";
import { ColorPaletteCard } from "@/components/visume/ColorPaletteCard";
import { VisualSimulationCarousel } from "@/components/visume/VisualSimulationCarousel";
import { HairRecommendationCard } from "@/components/visume/HairRecommendationCard";
import { BarberInstructionBox } from "@/components/visume/BarberInstructionBox";
import { PracticalGuideCard } from "@/components/visume/PracticalGuideCard";
import { PdfDownloadButton } from "@/components/visume/PdfDownloadButton";
import { MockBadge } from "@/components/visume/MockBadge";
import { SectionDisclaimer } from "@/components/visume/SectionDisclaimer";

export const Route = createFileRoute("/resultado/mock")({
  head: () => ({
    meta: [
      { title: "Sua análise visual — VisuMe (Exemplo)" },
      {
        name: "description",
        content:
          "Exemplo visual do relatório VisuMe com paleta, simulações e guia prático.",
      },
      { property: "og:title", content: "Exemplo de relatório VisuMe" },
      {
        property: "og:description",
        content: "Veja como será apresentado seu resultado de análise visual.",
      },
    ],
  }),
  component: ResultadoMock,
});

function ResultadoMock() {
  const { colorAnalysis, hairAnalysis, practicalGuide, confidence } = mockAnalysisResult;

  return (
    <div className="bg-gradient-to-b from-background via-nude/20 to-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <ResultHeader />

        <div className="mt-6">
          <ResultExpirationBanner />
        </div>

        <div className="mt-8">
          <Tabs defaultValue="resumo" className="w-full">
            <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 rounded-2xl bg-muted/60 p-1.5">
              <TabsTrigger value="resumo" className="rounded-xl">Resumo</TabsTrigger>
              <TabsTrigger value="cores" className="rounded-xl">Cores</TabsTrigger>
              <TabsTrigger value="cabelo" className="rounded-xl">Cabelo & Barba</TabsTrigger>
              <TabsTrigger value="guia" className="rounded-xl">Guia prático</TabsTrigger>
              <TabsTrigger value="pdf" className="rounded-xl">PDF</TabsTrigger>
            </TabsList>

            {/* RESUMO */}
            <TabsContent value="resumo" className="mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <SummaryCard label="Tipo de análise" value="Combo Completo" />
                <SummaryCard
                  label="Confiança da análise"
                  value={confidence}
                  capitalize
                />
                <SummaryCard
                  label="Melhor direção visual"
                  value="Tons frios + neutros profundos com toque vinho"
                />
                <SummaryCard
                  label="Principais recomendações"
                  value="Paleta fria, degradê baixo, barba curta"
                />
              </div>
              <SectionDisclaimer>
                Estes cards estão preenchidos com dados mockados apenas para
                demonstrar o layout. A versão final terá conteúdo personalizado.
              </SectionDisclaimer>
            </TabsContent>

            {/* CORES */}
            <TabsContent value="cores" className="mt-6 space-y-6">
              <ColorAnalysisSummary data={colorAnalysis} />

              <ColorPaletteCard
                title="Exemplo: cores que ficam melhor"
                caption="Paleta sugerida para o exemplo apresentado."
                swatches={colorAnalysis.bestColors}
                tone="good"
              />

              <ColorPaletteCard
                title="Exemplo: cores para evitar"
                caption="Tons que tendem a competir com o rosto neste exemplo."
                swatches={colorAnalysis.avoidColors}
                tone="avoid"
              />

              <VisualSimulationCarousel
                title="Exemplo: você usando suas melhores cores"
                caption="Estas imagens são apenas placeholders. Futuramente, a IA vai gerar simulações reais com a foto enviada pelo usuário."
                items={colorAnalysis.bestSimulation}
                tone="good"
              />

              <VisualSimulationCarousel
                title="Exemplo: cores que podem pesar no visual"
                caption="Esta seção é apenas demonstrativa. Na análise real, as cores podem mudar totalmente conforme o perfil da pessoa."
                items={colorAnalysis.avoidSimulation}
                tone="avoid"
              />
            </TabsContent>

            {/* CABELO & BARBA */}
            <TabsContent value="cabelo" className="mt-6 space-y-6">
              <section className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-display text-xl">Características</h3>
                  <MockBadge>Exemplo de resultado</MockBadge>
                </div>
                <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <Mini label="Formato de rosto" value={hairAnalysis.faceShape} />
                  <Mini label="Textura" value={hairAnalysis.hairTexture} />
                  <Mini label="Volume natural" value={hairAnalysis.hairVolume} />
                  <Mini label="Direção" value={hairAnalysis.direction} />
                </dl>
              </section>

              <section className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
                <h3 className="font-display text-xl">Cortes que favorecem</h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {hairAnalysis.bestHaircuts.map((h) => (
                    <HairRecommendationCard
                      key={h.title}
                      title={h.title}
                      description={h.description}
                      tone="good"
                    />
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
                <h3 className="font-display text-xl">Cortes a evitar</h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {hairAnalysis.avoidHaircuts.map((h) => (
                    <HairRecommendationCard
                      key={h.title}
                      title={h.title}
                      description={h.description}
                      tone="avoid"
                    />
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
                <h3 className="font-display text-xl">Barbas recomendadas</h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {hairAnalysis.beardStyles.recommended.map((h) => (
                    <HairRecommendationCard
                      key={h.title}
                      title={h.title}
                      description={h.description}
                      tone="good"
                    />
                  ))}
                </div>
              </section>

              <BarberInstructionBox text={hairAnalysis.barberInstruction} />
            </TabsContent>

            {/* GUIA PRÁTICO */}
            <TabsContent value="guia" className="mt-6 space-y-5">
              <SectionDisclaimer>
                Esta seção é um exemplo de como o guia será exibido. Os itens são
                placeholders.
              </SectionDisclaimer>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {practicalGuide.map((g) => (
                  <PracticalGuideCard key={g.title} title={g.title} items={g.items} />
                ))}
              </div>
            </TabsContent>

            {/* PDF */}
            <TabsContent value="pdf" className="mt-6 space-y-5">
              <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h3 className="font-display text-2xl">Seu relatório em PDF</h3>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  Salve, compartilhe e leve para suas próximas compras ou para o
                  salão. O PDF é montado automaticamente a partir desta análise.
                </p>
                <div className="mt-5">
                  <PdfDownloadButton />
                </div>
              </section>

              <SectionDisclaimer>
                As simulações visuais são aproximações geradas por IA para ajudar
                você a visualizar possibilidades. O resultado pode variar conforme
                iluminação, foto enviada, cabelo, produto, corte e execução
                profissional.
              </SectionDisclaimer>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  capitalize,
}: {
  label: string;
  value: string;
  capitalize?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p
        className={`mt-2 font-display text-lg leading-snug ${capitalize ? "capitalize" : ""}`}
      >
        {value}
      </p>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-muted/60 p-3.5">
      <dt className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold">{value}</dd>
    </div>
  );
}
