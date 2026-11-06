
import { motion, useReducedMotion } from "motion/react";
import {
  BriefcaseBusiness,
  CheckCircle2,
  GitBranch,
  Zap,
  Code2,
} from "lucide-react";

const highlights = [
  {
    value: "100+",
    label: "Automated UI & API Tests",
    icon: CheckCircle2,
  },
  {
    value: "CI/CD",
    label: "Jenkins & Maven Pipelines",
    icon: GitBranch,
  },
  {
    value: "Agile",
    label: "Engineering Collaboration",
    icon: Zap,
  },
];

const responsibilities = [
  "Developed and maintained automated UI and API test suites using Java, Selenium, JUnit, and Cucumber for enterprise cloud applications.",
  "Integrated automated regression tests into Maven-based Jenkins CI/CD pipelines to validate builds and improve software quality.",
  "Collaborated with software engineers, product managers, and QA teams in Agile stand-ups to support feature development and release planning.",
  "Investigated automated test failures, performed root cause analysis, and identified functional and integration issues.",
  "Helped improve automated test coverage and software reliability across enterprise applications.",
];

const technologies = [
  "Java",
  "Selenium",
  "JUnit",
  "Cucumber",
  "Maven",
  "Jenkins",
  "REST APIs",
  "CI/CD",
];

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <div className="mb-14">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
          02 / EXPERIENCE
        </p>

        <h2 className="text-4xl font-black tracking-tight md:text-5xl">
          Where I've <span className="gradient-text">worked.</span>
        </h2>

        <p className="mt-5 max-w-2xl text-slate-400">
          Building reliable software and solving real-world
          engineering challenges.
        </p>
      </div>

      <div className="mb-12 grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={reduceMotion ? {} : { y: -6 }}
              className="glass-card rounded-2xl p-6"
            >
              <Icon className="mb-5 text-lime-400" size={24} />

              <div className="text-3xl font-black text-white">
                {item.value}
              </div>

              <p className="mt-2 text-sm text-slate-400">
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="relative border-l border-sky-400/30 pl-8 md:pl-12">
        <div className="absolute -left-[7px] top-8 h-3.5 w-3.5 rounded-full border-[3px] border-[#080d17] bg-lime-400 shadow-[0_0_18px_rgba(190,242,100,0.7)]" />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 md:p-9"
        >
          <div className="mb-7 flex flex-wrap items-start justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-sky-400/20 bg-sky-400/10 p-3 text-sky-400">
                <BriefcaseBusiness size={25} />
              </div>

              <div>
                <h3 className="text-xl font-bold md:text-2xl">
                  Software Engineer in Test Intern
                </h3>

                <p className="mt-2 font-semibold text-sky-400">
                  Veeva Systems
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Toronto, Ontario
                </p>
              </div>
            </div>

            <span className="rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2 text-xs font-medium text-lime-300">
              June 2026 — Present
            </span>
          </div>

          <div className="mb-8 h-px bg-gradient-to-r from-sky-400/30 via-lime-400/20 to-transparent" />

          <ul className="space-y-5">
            {responsibilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-slate-400 md:text-base"
              >
                <Code2
                  size={17}
                  className="mt-1 shrink-0 text-sky-400"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-lime-400/40 hover:text-lime-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
