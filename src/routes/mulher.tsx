import { createFileRoute } from "@tanstack/react-router";
import { GenderLanding } from "@/components/visume/GenderLanding";
import { landingByGender } from "@/data/landingContent";

const content = landingByGender.mulher;

export const Route = createFileRoute("/mulher")({
  head: () => ({
    meta: [
      { title: content.metaTitle },
      { name: "description", content: content.metaDescription },
      { property: "og:title", content: content.metaTitle },
      { property: "og:description", content: content.metaDescription },
      { property: "og:image", content: content.heroImage },
      { name: "twitter:image", content: content.heroImage },
    ],
  }),
  component: () => <GenderLanding content={content} />,
});
