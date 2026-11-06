
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ArrowUp,
  Code2,
  Mail,
  BriefcaseBusiness,
} from "lucide-react";

const socials = [
  {
    label: "GitHub",
    url: "https://github.com/michaelwestern1",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/michael-pachowski-119b96300/",
    icon: BriefcaseBusiness,
  },
  {
    label: "Email",
    url: "mailto:michaelpachowski1@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080d17]/80 px-6 py-10">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-sky-400/5 blur-[90px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <a
            href="#"
            className="text-2xl font-black tracking-tight text-white"
          >
            Michael<span className="text-lime-400">.</span>
          </a>

          <p className="mt-2 text-sm text-slate-500">
            Building software. Breaking boundaries.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.label}
                href={social.url}
                target={
                  social.label === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  social.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={social.label}
                whileHover={
                  reduceMotion
                    ? {}
                    : { y: -5, scale: 1.08 }
                }
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-sky-400/40 hover:text-sky-400"
              >
                <Icon size={19} />
              </motion.a>
            );
          })}
        </div>

        <a
          href="#"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-lime-400"
        >
          Back to top
          <ArrowUp
            size={17}
            className="transition group-hover:-translate-y-1"
          />
        </a>
      </div>

      <div className="relative mx-auto mt-9 max-w-6xl border-t border-white/10 pt-6 text-center">
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Michael Pachowski.
          Built with React, Tailwind CSS & Motion.
        </p>
      </div>
    </footer>
  );
}
