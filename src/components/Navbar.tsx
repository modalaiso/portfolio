"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Button from "./ui/Button";
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
      className="pointer-events-none fixed inset-x-0 top-4 z-50 transition-transform duration-500 ease-out md:top-14.5 md:data-[scrolled=true]:-translate-y-10.5"
    >
      <motion.nav
        initial={{ y: -140, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.1 }}
        className="pointer-events-auto fixed left-1/2 flex -translate-x-1/2 w-[min(65%)] items-center justify-around gap-8 rounded-full border-t-2 border-primary-50 bg-linear-to-t from-[#ffcaba] to-[#ffe0d6] primary-100 py-5 transition-[height,background-color,box-shadow] shadow-[inset_0_-8px_8px_rgba(0,0,0,0.25),0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] duration-500"
        
      >
        <motion.a
          href="#"
          aria-label="Accueil"
        >
          <Logo />
        </motion.a>

        <ul className="hidden gap-10 text-md md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <motion.a
                href={l.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="group relative inline-block text-ink text-shadow-lg no-underline hover:font-bold all-transition duration-300"
              >
                {l.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <Button href="#projets" size="sm" icon={<ArrowRight size={18} strokeWidth={2.2} />}>
          Voir mes projets
        </Button>
      </motion.nav>
    </header>
  );
}