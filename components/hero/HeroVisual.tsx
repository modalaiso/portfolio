"use client";

import { motion } from "motion/react";
import Character from "./Character";
import PaintedBackground from "./PaintedBackground";
import Shapes from "./Shapes";

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      className="relative mx-auto aspect-[1140/560] w-[min(92vw,1140px)] overflow-hidden rounded-t-[min(13.7vw,170px)] bg-[#C9A24E]"
    >
      <PaintedBackground />
      <Shapes />
      <Character />
      {/* Bordure orange */}
      <div className="pointer-events-none absolute inset-0 z-[5] rounded-t-[min(13.7vw,170px)] border-[min(1.4vw,16px)] border-b-0 border-[#E8921F] shadow-[inset_0_0_18px_rgba(232,140,30,0.6)]" />
      {/* Fondu vers le fond de page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[6] h-[57%] bg-gradient-to-b from-[rgba(255,238,232,0)] via-[rgba(255,238,232,0.55)] to-background" />
    </motion.div>
  );
}