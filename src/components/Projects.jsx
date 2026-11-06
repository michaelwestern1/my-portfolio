
import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Bot,
  Gamepad2,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Job Application Tracker",
    category: "FULL-STACK APPLICATION",
    description:
      "A full-stack application for organizing and managing job applications. Built with a React frontend, FastAPI backend, and PostgreSQL database, with RESTful APIs and Docker containerization.",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Python",
    ],
    github: "https://github.com/michaelwestern1/job-track",
    icon: BriefcaseBusiness,
    accent: "blue",
  },
  {
    number: "02",
    title: "WE Autopilot",
    category: "ROBOTICS & AUTONOMOUS SYSTEMS",
    description:
      "Contributed to the Planning & Control team, developing motion-planning and control modules for an autonomous vehicle using C++, Python, and ROS2.",
    technologies: [
      "C++",
      "Python",
      "ROS2",
      "Motion Planning",
      "PID Control",
    ],
    github: null,
    icon: Bot,
    accent: "lime",
  },
  {
    number: "03",
    title: "Virtual Pet Game",
    category: "JAVA APPLICATION",
    description:
      "A Java-based virtual pet game featuring a graphical user interface, interactive gameplay, multiple screens, and persistent save/load functionality, supported by JUnit tests.",
    technologies: [
      "Java",
      "Java GUI",
      "JUnit",
      "OOP",
    ],
    github: "https://github.com/michaelwestern1/PetGame",
    icon: Gamepad2,
    accent: "blue",
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const springX = useSpring(tiltX, {
    stiffness: 160,
    damping: 22,
  });

  const springY = useSpring(tiltY, {
    stiffness: 160,
    damping: 22,
  });

  const rotateX = useTransform(springY, (value) => -value);
  const rotateY = springX;

  const Icon = project.icon;
  const isLime = project.accent === "lime";

  const accentColor = isLime
    ? "163,230,53"
    : "56,189,248";

  // Hooks must run unconditionally.
  const spotlightBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}px ${y}px, rgba(${accentColor},0.12), transparent 70%)`
  );

  function handlePointerMove(event) {
    if (
      reduceMotion ||
      event.pointerType !== "mouse" ||
      !cardRef.current
    ) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const normalizedX = x / rect.width - 0.5;
    const normalizedY = y / rect.height - 0.5;

    tiltX.set(normalizedX * 8);
    tiltY.set(normalizedY * 8);
  }

  function handlePointerEnter(event) {
    if (
      reduceMotion ||
      event.pointerType !== "mouse"
    ) {
      return;
    }

    setHovered(true);
  }

  function handlePointerLeave() {
    setHovered(false);
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 45 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
      }}
      className={`group relative ${
        index === 0 ? "md:col-span-2" : ""
      }`}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="glass-card relative h-full overflow-hidden rounded-3xl border border-white/10 p-7 transition-colors duration-300 hover:border-white/20 md:p-10"
      >
        {/* Cursor-following spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: spotlightBackground,
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Ambient background glow */}
        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[100px] ${
            isLime
              ? "bg-lime-400/10"
              : "bg-sky-400/10"
          }`}
        />

        <div className="relative z-10">
          <div className="mb-10 flex items-start justify-between">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${
                isLime
                  ? "border-lime-400/20 bg-lime-400/10 text-lime-400"
                  : "border-sky-400/20 bg-sky-400/10 text-sky-400"
              }`}
            >
              <Icon size={30} />
            </div>

            <span className="font-mono text-sm text-slate-500">
              / {project.number}
            </span>
          </div>

          <p
            className={`mb-3 text-xs font-bold tracking-[0.2em] ${
              isLime
                ? "text-lime-400"
                : "text-sky-400"
            }`}
          >
            {project.category}
          </p>

          <h3 className="mb-5 text-2xl font-black tracking-tight md:text-3xl">
            {project.title}
          </h3>

          <p className="mb-8 max-w-2xl leading-relaxed text-slate-400">
            {project.description}
          </p>

          <div className="mb-9 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition-colors group-hover:border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 font-semibold transition ${
                isLime
                  ? "hover:text-lime-400"
                  : "hover:text-sky-400"
              }`}
            >
              <Code2 size={19} />
              View Source Code
              <ArrowUpRight size={18} />
            </a>
          ) : (
            <span className="text-sm text-slate-500">
              Team engineering project
            </span>
          )}
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <div className="mb-14">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
          03 / FEATURED PROJECTS
        </p>

        <h2 className="text-4xl font-black tracking-tight md:text-5xl">
          Things I've{" "}
          <span className="gradient-text">built.</span>
        </h2>

        <p className="mt-5 max-w-2xl text-slate-400">
          A selection of projects where I've explored
          full-stack development, robotics, and software
          engineering.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/michaelwestern1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-sky-400/40 hover:text-sky-400"
        >
          <Code2 size={20} />
          More on GitHub
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
