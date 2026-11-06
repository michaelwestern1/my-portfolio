
import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  Database,
  Wrench,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks",
    icon: BrainCircuit,
    skills: ["React", "FastAPI", "Selenium", "JUnit", "Cucumber"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "Jenkins", "Maven", "Linux"],
  },
  {
    title: "Other",
    icon: Database,
    skills: ["PostgreSQL", "REST APIs", "CI/CD", "ROS2", "Agile"],
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <div className="mb-14">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
          01 / ABOUT ME
        </p>

        <h2 className="text-4xl font-black tracking-tight md:text-5xl">
          A little about <span className="gradient-text">me.</span>
        </h2>
      </div>

      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div className="space-y-6 text-lg leading-relaxed text-slate-400">
          <p>
            I'm <span className="font-semibold text-white">Michael</span>,
            a Computer Science student at Western University
            passionate about software engineering and building
            meaningful applications.
          </p>

          <p>
            I'm currently working as a{" "}
            <span className="font-medium text-sky-400">
              Software Engineer in Test Intern at Veeva Systems
            </span>
            , where I build automated tests, work with CI/CD
            pipelines, and collaborate with engineers to
            deliver reliable software.
          </p>

          <p>
            I enjoy solving challenging problems, exploring
            new technologies, and developing projects that
            help me grow as an engineer.
          </p>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 font-semibold text-lime-400 transition hover:gap-3"
          >
            Explore my projects
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={reduceMotion ? {} : { y: -7 }}
                className="glass-card group rounded-2xl p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400 transition group-hover:border-lime-400/40 group-hover:text-lime-400">
                  <Icon size={22} />
                </div>

                <h3 className="mb-4 font-bold text-white">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
