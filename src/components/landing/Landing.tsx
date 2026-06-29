import { motion } from "framer-motion";
import { FadingVideo } from "@/components/landing/FadingVideo";
import { BlurText } from "@/components/landing/BlurText";
import {
  ArrowUpRight,
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

const EMAIL = "isajoseph.cw@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

const services = [
  {
    icon: ImageIcon,
    title: "Website Design",
    body: "Custom, brand-led websites designed to feel premium and distinct.",
  },
  {
    icon: MovieIcon,
    title: "Development",
    body: "Fast, responsive, modern code that works on every device.",
  },
  {
    icon: LightbulbIcon,
    title: "Creative Direction",
    body: "Strategy and design decisions that turn ideas into real products.",
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
            className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
          >
            <div className="liquid-glass h-11 px-4 rounded-full flex items-center">
              <span className="font-heading italic text-white text-lg leading-none">Joseph Isa</span>
            </div>
            <a
              href={MAILTO}
              className="inline-flex items-center gap-1 bg-white text-black rounded-full px-4 py-2 text-sm font-medium"
            >
              Contact
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.nav>

          {/* Hero content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              {...fadeUp(0.4)}
              className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white"
            >
              Independent Web Designer
            </motion.div>

            <div className="mt-6 max-w-3xl">
              <BlurText
                text="Websites Designed With Intention"
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85]"
              />
            </div>

            <motion.p
              {...fadeUp(0.8)}
              className="mt-5 text-sm md:text-base text-white max-w-xl font-body font-light leading-snug"
            >
              I'm Joseph Isa. I design and build distinctive websites for brands,
              founders, and creators who want to stand apart.
            </motion.p>

            <motion.div {...fadeUp(1.0)} className="mt-7">
              <a
                href={MAILTO}
                className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white inline-flex items-center gap-2"
              >
                Start a Project
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 px-6 md:px-16 lg:px-20 pt-24 pb-16 flex flex-col min-h-screen">
          <div>
            <div className="text-sm font-body text-white/80 mb-5">// Services</div>
            <h2 className="font-heading italic text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]">
              What I do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
            {services.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="liquid-glass rounded-[1.25rem] p-6 flex flex-col gap-6"
              >
                <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading italic text-white text-3xl tracking-[-1px] leading-none">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-auto pt-20 flex flex-col items-center text-center gap-5">
            <h3 className="font-heading italic text-white text-4xl md:text-6xl tracking-[-1px] leading-[0.9]">
              Let's build
              <br />
              something great
            </h3>
            <a
              href={MAILTO}
              className="liquid-glass-strong rounded-full px-6 py-3 text-sm md:text-base font-medium text-white inline-flex items-center gap-2"
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
