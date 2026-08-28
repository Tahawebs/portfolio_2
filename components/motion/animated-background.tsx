"use client";

import { motion, useReducedMotion } from "motion/react";

export function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="ambient" aria-hidden="true">
      <motion.div
        className="ambient-orb"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 40, 0], y: [0, -25, 0] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 16,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }
        }
      />
      <div className="grid-lines" />
    </div>
  );
}
