import { motion } from "framer-motion";
import { FadingVideo } from "@/components/landing/FadingVideo";
import { BlurText } from "@/components/landing/BlurText";
import {
  ArrowUpRight,
  Play,
  ClockIcon,
  GlobeIcon,
  ImageIcon,
  MovieIcon,
  LightbulbIcon,
} from "@/components/landing/icons";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay: number) => ({
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

const EMAIL = "Isajoseph.cw@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

const navLinks = ["Work", "Services", "Process", "About"];

const capabilities = [
  {
    icon: ImageIcon,
    tags: ["Brand Identity", "Visual System", "Custom UI", "Pixel Precision"],
    title: "Website Design",
    body: "Bespoke websites built around your brand — distinct layouts, refined typography, and details that make your business feel premium.",
  },
  {
    icon: MovieIcon,
    tags: ["Responsive", "Fast Loading", "SEO Ready", "Built to Scale"],
    title: "Development",
    body: "Hand-crafted, modern code. Lightning-fast pages that work flawlessly on every device and rank well on search.",
  },
  {
    icon: LightbulbIcon,
    tags: ["Strategy", "Wireframes", "Iteration", "Launch Support"],
    title: "Creative Direction",
    body: "From first concept to launch — strategy, structure, and design decisions that turn ideas into a product people remember.",
  },
];

export function Landing() {
  return (
    <main className="bg-black text-white font-body">
      {/* ============== HERO ============== */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
          style={{ width: "120%", height: "120%" }}
        />

        <div className="relative z-10 flex h-full flex-col">
          {/* Navbar */}
          <motion.nav
            {...fadeUp(0.2)}
            className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16"
          >
            <div className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center">
              <span className="font-heading italic text-white text-2xl leading-none -mt-1">J</span>
            </div>

            <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1">
              {navLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-white/90 font-body rounded-full hover:text-white"
                >
                  {l}
                </a>
              ))}
              <a
                href={MAILTO}
                className="ml-1 inline-flex items-center gap-1 bg-white text-black rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap"
              >
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="h-12 w-12" aria-hidden />
          </motion.nav>

          {/* Hero content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center pt-24 px-4">
            <motion.div
              {...fadeUp(0.4)}
              className="liquid-glass rounded-full inline-flex items-center gap-2 pl-1 pr-3 py-1"
            >
              <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">Open</span>
              <span className="text-sm text-white/90">Accepting new projects for 2026</span>
            </motion.div>

            <div className="mt-6 max-w-3xl">
              <BlurText
                text="Websites Designed Beyond the Ordinary"
                className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8]"
              />
            </div>

            <motion.p
              {...fadeUp(0.8)}
              className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
            >
              I'm Joseph Isa — an independent web designer crafting distinctive, high-performance
              websites for brands that want to stand apart. Strategy, design, and code, end to end.
            </motion.p>

            <motion.div {...fadeUp(1.1)} className="flex items-center gap-6 mt-6">
              <a
                href={MAILTO}
                className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white inline-flex items-center gap-2"
              >
                Start a Project
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <a href="#work" className="text-sm text-white inline-flex items-center gap-2">
                See Recent Work
                <Play className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div {...fadeUp(1.3)} className="flex items-stretch gap-4 mt-8">
              {[
                { Icon: ClockIcon, num: "5+ Yrs", label: "Designing for the web" },
                { Icon: GlobeIcon, num: "40+", label: "Sites shipped worldwide" },
              ].map(({ Icon, num, label }) => (
                <div key={label} className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
                  <Icon className="h-7 w-7 text-white" />
                  <div className="mt-6 font-heading italic text-white text-4xl leading-none tracking-[-1px]">
                    {num}
                  </div>
                  <div className="text-xs text-white font-body font-light mt-2">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Footer chip */}
          <motion.div
            {...fadeUp(1.4)}
            className="flex flex-col items-center gap-4 pb-8 px-4"
          >
            <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white">
              Trusted by founders, studios, and creators
            </div>
            <a
              href={MAILTO}
              className="font-heading italic text-white text-2xl md:text-3xl tracking-tight hover:opacity-80"
            >
              {EMAIL}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============== CAPABILITIES ============== */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
          <div className="mb-auto">
            <div className="text-sm font-body text-white/80 mb-6">// What I Do</div>
            <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
              Design that
              <br />
              moves people
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {capabilities.map(({ icon: Icon, tags, title, body }) => (
              <div
                key={title}
                className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-1" />
                <div className="mt-6">
                  <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 flex flex-col items-center text-center gap-4">
            <h3 className="font-heading italic text-white text-4xl md:text-5xl tracking-[-1px]">
              Have a project in mind?
            </h3>
            <a
              href={MAILTO}
              className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white inline-flex items-center gap-2"
            >
              {EMAIL}
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
