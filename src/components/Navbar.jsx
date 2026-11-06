
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = ["About", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080d17]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-black tracking-tight"
        >
          Michael<span className="text-lime-400">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-slate-400 transition hover:text-sky-400"
            >
              {link}
            </a>
          ))}

          <a
            href="mailto:michaelpachowski1@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-lime-400/30 px-5 py-3 text-sm font-semibold text-lime-400 transition hover:bg-lime-400 hover:text-[#080d17]"
          >
            Let's Talk <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-lg border border-white/15 p-3 text-white md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Animated mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#080d17] md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-5">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-lg text-slate-300 transition hover:bg-white/5 hover:text-sky-400"
                >
                  {link}
                </a>
              ))}

              <a
                href="mailto:michaelpachowski1@gmail.com"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-xl bg-lime-400 px-5 py-3 text-center font-bold text-[#080d17]"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
