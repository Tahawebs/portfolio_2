"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { portfolio } from "@/config/portfolio";

export function ProfileVisual() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 90, damping: 18 });
  const y = useSpring(pointerY, { stiffness: 90, damping: 18 });
  const rotateX = useTransform(y, [-8, 8], [1.5, -1.5]);
  const rotateY = useTransform(x, [-8, 8], [-1.5, 1.5]);

  return (
    <motion.div
      className="profile-stage"
      initial={
        prefersReducedMotion
          ? { opacity: 0 }
          : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
      }
      animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      transition={{
        duration: prefersReducedMotion ? 0.15 : 0.85,
        delay: prefersReducedMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      onPointerMove={(event) => {
        if (prefersReducedMotion || event.pointerType !== "mouse") return;

        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 16);
        pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 16);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      <motion.div
        className="profile-float"
        animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 6.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }
        }
        style={
          prefersReducedMotion
            ? undefined
            : { x, y, rotateX, rotateY, transformPerspective: 1000 }
        }
      >
        <div className="profile-back" aria-hidden="true" />
        <div className="profile-frame">
          <Image
            src={portfolio.person.profileImage}
            alt="Professional portrait of Muhammad Taha wearing a tan blazer"
            fill
            priority
            quality={92}
            sizes="(max-width: 760px) 86vw, (max-width: 1100px) 46vw, 520px"
          />
          <span aria-hidden="true" />
        </div>
      </motion.div>

      <div className="orbit" aria-hidden="true" />
    </motion.div>
  );
}
