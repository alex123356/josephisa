import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joseph Isa — Venture Past Our Sky" },
      { name: "description", content: "Cinematic space-travel voyages by Joseph Isa. Deep-space exploration within reach—secure and extraordinary." },
      { property: "og:title", content: "Joseph Isa — Venture Past Our Sky" },
      { property: "og:description", content: "Cinematic space-travel voyages by Joseph Isa." },
    ],
  }),
  component: Landing,
});
