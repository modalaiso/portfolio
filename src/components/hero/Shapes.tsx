"use client";

import { motion } from "motion/react";

const box = { transformBox: "fill-box", transformOrigin: "center" } as const;

/** Anneau, triangle et étoile : flottent en continu, réagissent au survol et au clic. */
export default function Shapes() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1140 560" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#26B5D0" />
          <stop offset=".5" stopColor="#5CC050" />
          <stop offset="1" stopColor="#9AD14A" />
        </linearGradient>
        <linearGradient id="tri" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FF7436" />
          <stop offset="1" stopColor="#FF8A55" />
        </linearGradient>
        <linearGradient id="star" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4DBFA0" />
          <stop offset="1" stopColor="#85CF7C" />
        </linearGradient>
      </defs>

      <motion.circle
        cx="550"
        cy="445"
        r="162"
        fill="none"
        stroke="url(#ring)"
        strokeWidth="30"
        style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <motion.g
        style={{ ...box, pointerEvents: "auto", cursor: "pointer" }}
        animate={{ y: [0, -14, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92, rotate: 12 }}
      >
        <path d="M343 282 480 548H208Z" fill="url(#tri)" stroke="#8ACB4A" strokeWidth="8" strokeLinejoin="round" />
      </motion.g>

      <motion.g
        style={{ ...box, pointerEvents: "auto", cursor: "pointer" }}
        animate={{ y: [0, 12, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9, rotate: 90 }}
      >
        <path
          d="M797 232l36 78 86-14-62 66 40 70-84-28-34 62-8-90-80-36 80-24Z"
          fill="url(#star)"
          stroke="#FF7A30"
          strokeWidth="9"
          strokeLinejoin="round"
          opacity=".92"
        />
      </motion.g>
    </svg>
  );
}