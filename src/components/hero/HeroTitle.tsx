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
      className="px-4 text-center font-display text-[clamp(44px,7vw,134px)] font-normal leading-[1.06] tracking-[-0.022em] text-ink"
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
          className="relative mx-[0.07em] ml-[0.16em] inline-block h-[1.03em] cursor-pointer select-none rounded-full bg-linear-to-b from-[#FF8A22] via-[#F2552C] to-[#E8402B] px-[0.33em] pb-[0.04em] leading-[1.03em] tracking-normal text-white shadow-[inset_0_-8px_14px_rgba(180,30,10,0.35),0_6px_10px_rgba(150,50,0,0.25)] [text-shadow:0_5px_8px_rgba(120,30,0,0.35)]"
        >
          amet
          <svg width="400" height="85" viewBox="0 0 400 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_di_41_2277)">
              <path d="M373.677 28.6143C370.843 27.3755 368.459 25.4167 352.078 23.8499C346.475 23.3392 340.88 22.7534 335.278 22.28C293.515 19.7162 289.928 20.1708 259.236 20C242.815 20.1688 226.414 21.2435 210.019 22.1165C198.47 22.8968 186.949 24.1175 175.421 25.1574C113.444 32.2383 134.975 29.2734 91.9273 36.1295C73.4392 39.9506 55.0219 44.1447 36.5575 48.091C33.8183 48.8817 31.0257 49.5145 28.3347 50.4609C25.3579 51.5193 25.2416 51.4926 24.8359 51.9187C22.9573 53.4871 24.4464 56.9529 27.298 56.0972C35.5512 53.1658 35.1433 53.418 70.8783 45.6761C72.0107 46.7107 72.742 46.3861 75.4935 46.1265C78.7542 45.819 82.0169 45.5386 85.2705 45.1644C98.4553 43.2953 111.571 40.9337 124.739 38.9364C129.276 38.296 133.798 37.5273 138.33 36.8177C144.057 36.1288 149.788 35.4471 155.519 34.7704C185.267 32.1533 176.627 32.5163 213.599 30.3312C219.416 30.1706 213.985 30.2595 244.851 29.8612C268.928 30.3852 295.089 33.2943 318.804 36.1556C329.062 37.4048 348.097 39.8749 358.148 42.5481C359.11 42.7419 360.194 42.338 360.689 41.4805C361.409 40.5053 361.18 39.0347 360.268 38.2457C359.41 37.5301 358.193 37.5356 357.164 37.1998C352.633 36.0623 346.012 34.974 341.111 34.2054L347.646 34.5639C353.401 34.9396 359.174 34.7323 364.934 35.0331C367.625 35.0836 371.262 35.0406 373.361 33.3524C373.894 32.9323 374.517 32.5879 374.808 31.9411C375.412 30.7578 374.896 29.1853 373.682 28.6189L373.677 28.6143ZM252.27 25.0714C261.615 24.766 290.591 25.0891 301.223 25.3624C312.697 25.9299 324.169 26.5 335.634 27.2297C341.722 27.9899 354.185 28.7194 361.137 29.9561C358.178 29.8771 355.217 29.8803 352.256 29.8164C318.932 28.1938 285.616 26.2673 252.27 25.0714Z" fill="#351500"/>
            </g>
            <defs>
              <filter id="filter0_di_41_2277" x="0" y="0" width="399.062" height="84.2311" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="12"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_2277"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_2277" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-4" dy="-2"/>
                <feGaussianBlur stdDeviation="3"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_41_2277"/>
              </filter>
            </defs>
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