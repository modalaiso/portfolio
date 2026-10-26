"use client";

import { motion } from "motion/react";

const line = {
  hidden: { opacity: 0, y: 50, filter: "blur(14px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function HeroTitle() {
  return (
    <motion.h1
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.18, delayChildren: 0.35 }}
      className="px-4 text-center font-display text-[clamp(44px,7vw,134px)] font-extrabold leading-[1.06] tracking-[-0.022em] text-ink"
    >
      <motion.span variants={line} transition={{ duration: 0.8, ease: "easeOut" }} className="block">
        Lorem ipsum
      </motion.span>
      <motion.span
        variants={line}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-wrap items-center justify-center"
      >
        dolor sit
        <motion.span
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: -4 }}
          whileHover={{ rotate: -9, scale: 1.08 }}
          whileTap={{ scale: 0.93, rotate: 2 }}
          transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.9 }}
          className="relative mx-[0.07em] ml-[0.16em] inline-block h-[1.03em] cursor-pointer select-none rounded-full bg-gradient-to-b from-[#FF8A22] via-[#F2552C] to-[#E8402B] px-[0.33em] pb-[0.04em] leading-[1.03em] tracking-normal text-white shadow-[inset_0_-8px_14px_rgba(180,30,10,0.35),0_6px_10px_rgba(150,50,0,0.25)] [text-shadow:0_5px_8px_rgba(120,30,0,0.35)]"
        >
          amet
          <svg
            className="absolute bottom-[-0.03em] left-[0.34em] h-auto w-[2.7em]"
            viewBox="0 0 360 26"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="M4 22C90 8 250 2 358 10"
              stroke="#2A1005"
              strokeWidth="7"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
            />
            <motion.path
              d="M60 24c80-8 180-10 290-8"
              stroke="#2A1005"
              strokeWidth="3"
              strokeLinecap="round"
              opacity=".6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            />
          </svg>
        </motion.span>
        <motion.span
          aria-hidden="true"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 12, delay: 1.2 }}
          className="mb-[0.12em] ml-[0.04em] size-[0.21em] self-end rounded-full bg-ink"
        />
      </motion.span>
    </motion.h1>
  );
}