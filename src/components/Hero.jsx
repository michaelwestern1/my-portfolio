
import { useState } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Terminal,
  Cpu,
  Braces,
} from "lucide-react";

const tech = ["React", "Python", "Java", "C++", "Docker", "ROS2"];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
  });

  function handleMouseMove(event) {
    if (reduceMotion || event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  const fadeUp = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 35 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  });

  return (
    <section
      onPointerMove={handleMouseMove}
      className="relative flex min-h-0 items-start overflow-hidden px-5 pb-16 pt-12 sm:px-6 md:pt-20 lg:min-h-screen lg:items-center lg:pt-28"
    >
      {/* Cursor-following glow */}
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute z-0 h-[450px] w-[450px] rounded-full bg-sky-400/10 blur-[110px]"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}

      {/* Ambient lighting */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-lime-400/5 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl min-w-0 items-center gap-10 py-6 md:py-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16 lg:py-20">
        {/* Left: Introduction */}
        <div className="min-w-0">
          <motion.div
            {...fadeUp(0)}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-3 py-2 sm:gap-3 sm:px-4 lg:mb-8"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-lime-400 shadow-[0_0_12px_#a3e635]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-lime-400 sm:text-xs sm:tracking-[0.16em]">
              Software Engineer & Developer
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.12)}
            className="text-[clamp(2.5rem,10vw,4.5rem)] font-black leading-[1.08] tracking-tight lg:text-7xl"
          >
            Building
            <br />
            software.
            <br />
            <span className="gradient-text">
              Breaking boundaries.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mt-8"
          >
            Hey, I'm{" "}
            <span className="font-semibold text-white">
              Michael
            </span>
            . A Computer Science student at Western University
            and Software Engineer in Test Intern at Veeva
            Systems. I build applications, solve challenging
            problems, and turn ideas into working software.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            {...fadeUp(0.35)}
            className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 py-3.5 font-semibold text-[#080d17] transition hover:-translate-y-1 hover:bg-sky-300 hover:shadow-[0_0_35px_rgba(56,189,248,0.3)] sm:px-7 sm:py-4"
            >
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-lime-400/40 sm:px-7 sm:py-4"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            {...fadeUp(0.5)}
            className="mt-8 flex flex-wrap items-center gap-5 text-slate-500 sm:gap-6 lg:mt-10"
          >
            <a
              href="https://github.com/michaelwestern1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:text-sky-400"
            >
              <Code2 size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/michael-pachowski-119b96300/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-lime-400"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
            </a>

            <span className="h-5 w-px bg-white/15" />

            <span className="text-xs uppercase tracking-widest">
              Toronto, Canada
            </span>
          </motion.div>
        </div>

        {/* Right: Animated developer terminal */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 40, rotateY: -8 }
          }
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          whileHover={
            reduceMotion
              ? {}
              : { y: -8, rotateY: 3 }
          }
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="relative hidden lg:block"
          style={{ perspective: 1000 }}
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sky-400/20 to-lime-400/10 blur-3xl" />

          <div className="glass-card relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="font-mono text-xs text-slate-500">
                michael@portfolio ~
              </span>

              <Terminal size={16} className="text-slate-500" />
            </div>

            {/* Terminal content */}
            <div className="space-y-5 p-6 font-mono text-sm">
              <div>
                <p className="text-slate-500">
                  // developer profile
                </p>

                <p className="mt-3 text-sky-400">
                  const{" "}
                  <span className="text-white">
                    developer
                  </span>{" "}
                  = {"{"}
                </p>

                <p className="pl-5 text-slate-300">
                  name:{" "}
                  <span className="text-lime-400">
                    "Michael Pachowski"
                  </span>
                  ,
                </p>

                <p className="pl-5 text-slate-300">
                  role:{" "}
                  <span className="text-lime-400">
                    "Software Engineer"
                  </span>
                  ,
                </p>

                <p className="pl-5 text-slate-300">
                  company:{" "}
                  <span className="text-lime-400">
                    "Veeva Systems"
                  </span>
                  ,
                </p>

                <p className="pl-5 text-slate-300">
                  passion:{" "}
                  <span className="text-lime-400">
                    "Building cool things"
                  </span>
                </p>

                <p className="text-sky-400">
                  {"};"}
                </p>
              </div>

              {/* Technologies */}
              <div className="border-t border-white/10 pt-5">
                <p className="mb-4 text-slate-500">
                  // technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-sky-400/15 bg-sky-400/5 px-3 py-1.5 text-xs text-sky-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated terminal command */}
              <div className="flex items-center gap-2 border-t border-white/10 pt-5 text-lime-400">
                <span className="text-sky-400">
                  $
                </span>

                <span>
                  {hovered
                    ? "ready_to_collaborate"
                    : "npm run build"}
                </span>

                <motion.span
                  animate={
                    reduceMotion
                      ? {}
                      : { opacity: [1, 0, 1] }
                  }
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="inline-block h-4 w-2 bg-lime-400"
                />
              </div>
            </div>
          </div>

          {/* Floating decorations */}
          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    y: [0, -12, 0],
                    rotate: [0, 5, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-6 -top-7 rounded-2xl border border-lime-400/20 bg-[#101c28] p-4 text-lime-400 shadow-xl"
          >
            <Cpu size={28} />
          </motion.div>

          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    y: [0, 12, 0],
                    rotate: [0, -5, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-6 -left-7 rounded-2xl border border-sky-400/20 bg-[#101c28] p-4 text-sky-400 shadow-xl"
          >
            <Braces size={28} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        animate={
          reduceMotion
            ? {}
            : { y: [0, 8, 0] }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-500 lg:block"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
