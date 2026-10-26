"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Respecte « réduire les animations » du système pour toutes les animations. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}