
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function Background() {
  const reduceMotion = useReducedMotion();

  const [mouse, setMouse] = useState({
    x: -1000,
    y: -1000,
  });

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouseMove = (event) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("pointermove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
    };
  }, [reduceMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div className="cyber-grid absolute inset-0" />

      {/* Mouse-following electric blue spotlight */}
      {!reduceMotion && (
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(
              550px circle at ${mouse.x}px ${mouse.y}px,
              rgba(56,189,248,0.15),
              transparent 65%
            )`,
          }}
        />
      )}

      {/* Animated electric blue orb */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, 70, 0],
                y: [0, -60, 0],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-sky-500/10 blur-[120px]"
      />

      {/* Animated neon lime orb */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, -70, 0],
                y: [0, 60, 0],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-lime-400/10 blur-[120px]"
      />

      {/* Additional atmospheric glow */}
      <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-sky-400/5 blur-[100px]" />
    </div>
  );
}
