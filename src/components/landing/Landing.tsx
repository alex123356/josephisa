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

const navLinks = ["Home", "Voyages", "Worlds", "Innovation", "Plan Launch"];

const capabilities = [
  {
    icon: ImageIcon,
    tags: ["Natural Context", "Photo Realism", "Infinite Settings", "Eco-Vibe"],
    title: "AI Scenery",
    body: "AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.",
  },
  {
    icon: MovieIcon,
    tags: ["Scale Fast", "Visual Consistency", "Time Saver", "Ready to Post"],
    title: "Batch Production",
    body: "Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.",
  },
  {
    icon: LightbulbIcon,
    tags: ["Ray Tracing", "Physical Shadows", "Studio Quality", "Sunlight Sync"],
    title: "Smart Lighting",
    body: "Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.",
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
              <span className="font-heading italic text-white text-2xl leading-none -mt-1">a</span>
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
                href="#"
                className="ml-1 inline-flex items-center gap-1 bg-white text-black rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap"
              >
                Claim a Spot
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
              <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">New</span>
              <span className="text-sm text-white/90">Maiden Crewed Voyage to Mars Arrives 2026</span>
            </motion.div>

            <div className="mt-6 max-w-2xl">
              <BlurText
                text="Venture Past Our Sky Across the Universe"
                className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8]"
              />
            </div>

            <motion.p
              {...fadeUp(0.8)}
              className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
            >
              Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough
              engineering bring deep-space exploration within reach—secure and extraordinary.
            </motion.p>

            <motion.div {...fadeUp(1.1)} className="flex items-center gap-6 mt-6">
              <a
                href="#"
                className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white inline-flex items-center gap-2"
              >
                Start Your Voyage
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <a href="#" className="text-sm text-white inline-flex items-center gap-2">
                View Liftoff
                <Play className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div {...fadeUp(1.3)} className="flex items-stretch gap-4 mt-8">
              {[
                { Icon: ClockIcon, num: "34.5 Min", label: "Average Videos Watch Time" },
                { Icon: GlobeIcon, num: "2.8B+", label: "Users Across the Globe" },
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

          {/* Partners */}
          <motion.div
            {...fadeUp(1.4)}
            className="flex flex-col items-center gap-4 pb-8 px-4"
          >
            <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white">
              Collaborating with top aerospace pioneers globally
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 font-heading italic text-white text-2xl md:text-3xl tracking-tight">
              {["Aeon", "Vela", "Apex", "Orbit", "Zeno"].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
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
            <div className="text-sm font-body text-white/80 mb-6">// Capabilities</div>
            <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
              Production
              <br />
              evolved
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
        </div>
      </section>
    </main>
  );
}
