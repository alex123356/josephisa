import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joseph Isa — Independent Web Designer" },
      { name: "description", content: "Joseph Isa — independent web designer crafting distinctive, high-performance websites. Get in touch: Isajoseph.cw@gmail.com" },
      { property: "og:title", content: "Joseph Isa — Independent Web Designer" },
      { property: "og:description", content: "Distinctive, high-performance websites designed and built by Joseph Isa." },
    ],
  }),
  component: Landing,
});
