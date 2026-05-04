import { mockAnalysisResult } from "@/data/mockAnalysisResult";

const COLORS = {
  petrol: [31, 91, 91] as [number, number, number],
  wine: [138, 63, 92] as [number, number, number],
  graphite: [45, 52, 54] as [number, number, number],
  muted: [110, 115, 120] as [number, number, number],
  nude: [245, 240, 232] as [number, number, number],
  border: [220, 215, 208] as [number, number, number],
};

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const v = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  return [
    parseInt(v.slice(0, 2), 16),
    parseInt(v.slice(2, 4), 16),
    parseInt(v.slice(4, 6), 16),
  ];
}

export async function generateMockPdf(): Promise<void> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const marginX = 48;
  const contentW = pageW - marginX * 2;
  const bottomLimit = pageH - 70;

  let y = 0;

  const ensureSpace = (needed: number) => {
    if (y + needed > bottomLimit) {
      addPageFooter();
      doc.addPage();
      y = 56;
    }
  };

  const setFill = (rgb: [number, number, number]) =>
    doc.setFillColor(rgb[0], rgb[1], rgb[2]);
  const setText = (rgb: [number, number, number]) =>
    doc.setTextColor(rgb[0], rgb[1], rgb[2]);
  const setDraw = (rgb: [number, number, number]) =>
    doc.setDrawColor(rgb[0], rgb[1], rgb[2]);

  const addHeading = (text: string, size = 18) => {
    ensureSpace(size + 14);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(size);
    setText(COLORS.graphite);
    doc.text(text, marginX, y);
    y += size * 0.5 + 6;
    setDraw(COLORS.petrol);
    doc.setLineWidth(1.2);
    doc.line(marginX, y, marginX + 36, y);
    y += 14;
  };

  const addSubheading = (text: string) => {
    ensureSpace(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    setText(COLORS.petrol);
    doc.text(text, marginX, y);
    y += 14;
  };

  const addParagraph = (text: string, size = 10) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    setText(COLORS.graphite);
    const lines = doc.splitTextToSize(text, contentW) as string[];
    lines.forEach((ln) => {
      ensureSpace(size + 4);
      doc.text(ln, marginX, y);
      y += size + 4;
    });
    y += 4;
  };

  const addLabelValue = (label: string, value: string) => {
    ensureSpace(22);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    setText(COLORS.muted);
    doc.text(label.toUpperCase(), marginX, y);
    y += 11;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    setText(COLORS.graphite);
    const lines = doc.splitTextToSize(value, contentW) as string[];
    lines.forEach((ln) => {
      ensureSpace(14);
      doc.text(ln, marginX, y);
      y += 13;
    });
    y += 4;
  };

  const addBulletList = (items: string[]) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    setText(COLORS.graphite);
    items.forEach((it) => {
      const lines = doc.splitTextToSize(it, contentW - 14) as string[];
      ensureSpace(lines.length * 13 + 4);
      setFill(COLORS.wine);
      doc.circle(marginX + 3, y - 3, 1.6, "F");
      lines.forEach((ln, idx) => {
        doc.text(ln, marginX + 14, y);
        if (idx < lines.length - 1) y += 13;
      });
      y += 14;
    });
    y += 4;
  };

  const addSwatchRow = (swatches: { name: string; hex: string }[]) => {
    const cols = 4;
    const gap = 10;
    const cellW = (contentW - gap * (cols - 1)) / cols;
    const cellH = 56;
    let col = 0;
    let rowY = y;
    ensureSpace(cellH + 8);
    rowY = y;

    swatches.forEach((sw) => {
      if (col === cols) {
        col = 0;
        y += cellH + 8;
        ensureSpace(cellH + 8);
        rowY = y;
      }
      const x = marginX + col * (cellW + gap);
      setFill(hexToRgb(sw.hex));
      doc.roundedRect(x, rowY, cellW, 28, 4, 4, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      setText(COLORS.graphite);
      const nameLines = doc.splitTextToSize(sw.name, cellW) as string[];
      doc.text(nameLines[0] ?? "", x, rowY + 40);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      setText(COLORS.muted);
      doc.text(sw.hex.toUpperCase(), x, rowY + 50);
      col++;
    });
    y = rowY + cellH + 8;
  };

  const addQuoteBox = (text: string) => {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    const lines = doc.splitTextToSize(text, contentW - 24) as string[];
    const boxH = lines.length * 13 + 24;
    ensureSpace(boxH + 8);
    setFill(COLORS.nude);
    doc.roundedRect(marginX, y, contentW, boxH, 8, 8, "F");
    setDraw(COLORS.wine);
    doc.setLineWidth(2);
    doc.line(marginX, y, marginX, y + boxH);
    setText(COLORS.graphite);
    lines.forEach((ln, idx) => {
      doc.text(ln, marginX + 14, y + 18 + idx * 13);
    });
    y += boxH + 12;
  };

  const addBadge = (text: string, x: number, yPos: number) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    const w = doc.getTextWidth(text) + 14;
    setFill([245, 215, 110]);
    doc.roundedRect(x, yPos - 9, w, 14, 7, 7, "F");
    setText([90, 65, 10]);
    doc.text(text, x + 7, yPos);
    return w;
  };

  const addPageFooter = () => {
    const total = doc.getNumberOfPages();
    const current = doc.getCurrentPageInfo().pageNumber;
    setDraw(COLORS.border);
    doc.setLineWidth(0.5);
    doc.line(marginX, pageH - 56, pageW - marginX, pageH - 56);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(7.5);
    setText(COLORS.muted);
    const footer =
      "As simulações visuais são aproximações demonstrativas. O resultado real pode variar conforme iluminação, foto enviada, cabelo, produto, corte e execução profissional.";
    const lines = doc.splitTextToSize(footer, contentW - 60) as string[];
    lines.forEach((ln, i) => doc.text(ln, marginX, pageH - 44 + i * 9));
    doc.setFont("helvetica", "bold");
    setText(COLORS.petrol);
    doc.text("VisuMe — exemplo demonstrativo", marginX, pageH - 18);
    doc.setFont("helvetica", "normal");
    setText(COLORS.muted);
    doc.text(`${current} / ${total}`, pageW - marginX, pageH - 18, {
      align: "right",
    });
  };

  // ============= CAPA =============
  setFill(COLORS.petrol);
  doc.rect(0, 0, pageW, 220, "F");
  setFill(COLORS.wine);
  doc.rect(0, 220, pageW, 6, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(36);
  setText([255, 255, 255]);
  doc.text("VisuMe", marginX, 110);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.text("Relatório visual personalizado", marginX, 138);

  y = 270;
  addBadge("EXEMPLO VISUAL", marginX, y);
  y += 28;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  setText(COLORS.graphite);
  doc.text("Sua análise está pronta", marginX, y);
  y += 26;
  addParagraph(
    "Este é um relatório demonstrativo. Na versão final, a análise será personalizada com base nas fotos enviadas pelo usuário.",
    11,
  );

  y += 14;
  addHeading("Resumo", 16);
  addLabelValue("Tipo de análise", "Combo Completo");
  addLabelValue("Confiança", "Média");
  addLabelValue(
    "Melhor direção visual",
    "Tons frios + neutros profundos com toque vinho queimado",
  );

  // ============= CORES =============
  doc.addPage();
  y = 56;
  addHeading("Análise de cores", 18);
  const c = mockAnalysisResult.colorAnalysis;
  addLabelValue("Estação / sazonalidade", c.season);
  addLabelValue("Temperatura", c.temperature);
  addLabelValue("Intensidade", c.intensity);
  addLabelValue("Profundidade", c.depth);
  addLabelValue("Contraste", c.contrast);
  addLabelValue("Subtom", c.undertone);

  addSubheading("Exemplo: cores que ficam melhor");
  addSwatchRow(c.bestColors);

  addSubheading("Exemplo: cores para evitar");
  addSwatchRow(c.avoidColors);

  // ============= CABELO / BARBA =============
  doc.addPage();
  y = 56;
  addHeading("Cabelo & Barba", 18);
  const h = mockAnalysisResult.hairAnalysis;
  addLabelValue("Formato de rosto", h.faceShape);
  addLabelValue("Textura", h.hairTexture);

  addSubheading("Cortes recomendados");
  addBulletList(h.bestHaircuts.map((x) => `${x.title} — ${x.description}`));

  addSubheading("Cortes a evitar");
  addBulletList(h.avoidHaircuts.map((x) => `${x.title} — ${x.description}`));

  addSubheading("Barbas recomendadas");
  addBulletList(
    h.beardStyles.recommended.map((x) => `${x.title} — ${x.description}`),
  );

  addSubheading("Como pedir ao barbeiro");
  addQuoteBox(h.barberInstruction);

  // ============= GUIA PRÁTICO =============
  doc.addPage();
  y = 56;
  addHeading("Guia prático", 18);
  const guideKeys = [
    "O que comprar",
    "O que evitar",
    "O que pedir no salão/barbeiro",
    "Checklist rápido",
  ];
  guideKeys.forEach((key) => {
    const section = mockAnalysisResult.practicalGuide.find(
      (g) => g.title === key,
    );
    if (!section) return;
    addSubheading(section.title);
    addBulletList(section.items);
  });

  // Footer em todas as páginas
  const total = doc.getNumberOfPages();
  for (let i = 1; i <= total; i++) {
    doc.setPage(i);
    addPageFooter();
  }

  doc.save("visume-relatorio-exemplo.pdf");
}
