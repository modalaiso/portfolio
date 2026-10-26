"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

const MotionLink = motion.create(Link);

type Props = {
  href: string;
  variant?: "primary" | "outline";
  size?: "md" | "sm";
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

const sizes = {
  md: "h-12 min-w-[170px] px-6 text-base md:h-[60px] md:min-w-[214px] md:text-[18px]",
  sm: "h-10 min-w-0 px-4 text-sm md:h-[60px] md:min-w-[214px] md:px-6 md:text-[18px]",
};

const variants = {
  primary:
    "bg-gradient-to-b from-[#E37F1A] to-[#B04B08] font-medium text-white shadow-[0_6px_12px_rgba(120,50,0,0.3),inset_0_2px_3px_rgba(255,200,120,0.6)] hover:brightness-110 hover:shadow-[0_14px_24px_rgba(120,50,0,0.35),inset_0_2px_3px_rgba(255,200,120,0.6)]",
  outline:
    "border-[3px] border-ink font-bold text-ink hover:bg-ink hover:text-[#FFEEE8] hover:shadow-[0_12px_22px_rgba(51,20,0,0.25)]",
};

export default function Button({ href, variant = "primary", size = "md", icon, className = "", children }: Props) {
  return (
    <MotionLink
      href={href}
      whileHover={{ scale: 1.06, y: -3 }}
      whileTap={{ scale: 0.94, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`group relative inline-flex items-center justify-center gap-[10px] whitespace-nowrap rounded-full no-underline transition-[background-color,color,box-shadow,filter] duration-300 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {variant === "primary" && (
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-white/30 transition-transform duration-700 group-hover:translate-x-[450%]" />
        </span>
      )}
      <span className="relative">{children}</span>
      {icon && (
        <span className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-12 [&>svg]:block">
          {icon}
        </span>
      )}
    </MotionLink>
  );
}