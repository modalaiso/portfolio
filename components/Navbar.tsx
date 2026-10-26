"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";

const links = [
  { label: "Accueil", href: "#" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <header
      data-scrolled={scrolled}
      className="pointer-events-none fixed inset-x-0 top-4 z-50 transition-transform duration-500 ease-out md:top-[58px] md:data-[scrolled=true]:-translate-y-[42px]"
    >
      <motion.nav
        initial={{ y: -140, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.1 }}
        className={`pointer-events-auto relative mx-auto flex w-[min(92%,1760px)] items-center justify-between rounded-full border-t-2 border-white/80 px-5 backdrop-blur-xl backdrop-saturate-150 transition-[height,background-color,box-shadow] duration-500 lg:px-[9%] ${
          scrolled
            ? "h-14 bg-gradient-to-b from-[#FFEDE6]/80 via-[#FFE0D2]/75 to-[#FFCBB5]/75 shadow-[0_8px_30px_rgba(120,60,30,0.25)] md:h-[88px]"
            : "h-16 bg-gradient-to-b from-[#FFEDE6]/65 via-[#FFE0D2]/55 to-[#FFCBB5]/55 shadow-[0_10px_24px_rgba(120,60,30,0.28),inset_0_-6px_12px_rgba(255,170,140,0.35)] md:h-[114px]"
        }`}
      >
        <motion.a
          href="#"
          aria-label="modalaiso — accueil"
          whileHover={{ rotate: -3, scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Logo />
        </motion.a>

        <ul className="hidden gap-10 text-[21px] md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
          {links.map((l) => (
            <li key={l.label}>
              <motion.a
                href={l.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="group relative inline-block text-ink no-underline"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-ink transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            </li>
          ))}
        </ul>

        <Button href="#projets" size="sm" icon={<ArrowRight size={16} strokeWidth={2.2} />}>
          Voir mes projets
        </Button>
      </motion.nav>
    </header>
  );
}