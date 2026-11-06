
import { motion, useReducedMotion } from "motion/react";
import {
  Mail,
  BriefcaseBusiness,
  Code2,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const contacts = [
  {
    name: "Email",
    description: "Send me a message",
    icon: Mail,
    url: "mailto:michaelpachowski1@gmail.com",
  },
  {
    name: "LinkedIn",
    description: "Let's connect professionally",
    icon: BriefcaseBusiness,
    url: "https://www.linkedin.com/in/michael-pachowski-119b96300/",
  },
  {
    name: "GitHub",
    description: "Explore my repositories",
    icon: Code2,
    url: "https://github.com/michaelwestern1",
  },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const resumeUrl =
    `${import.meta.env.BASE_URL}Michael%20Resume%20October%202026.pdf`;

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-6 py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
          04 / GET IN TOUCH
        </p>

        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-black tracking-tight sm:text-5xl md:text-7xl"
        >
          Let's build something
          <br />
          <span className="gradient-text">
            great together.
          </span>
        </motion.h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
          Have an opportunity, a project idea, or just want to
          connect? My inbox is always open.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.name}
                href={contact.url}
                target={contact.name === "Email" ? undefined : "_blank"}
                rel={
                  contact.name === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={reduceMotion ? {} : { y: -7 }}
                className="glass-card group flex flex-col items-center rounded-2xl p-8"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-400 transition group-hover:border-lime-400/40 group-hover:text-lime-400">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-bold">
                  {contact.name}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {contact.description}
                </p>

                <ArrowUpRight
                  size={18}
                  className="mt-5 text-slate-500 transition group-hover:text-lime-400"
                />
              </motion.a>
            );
          })}
        </div>

        <div className="mt-14">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button inline-flex items-center gap-3 rounded-xl bg-sky-400 px-8 py-4 font-bold text-[#080d17] hover:bg-sky-300"
          >
            <FileText size={20} />
            View My Resume
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
