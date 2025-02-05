"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Link from "next/link";

const IntroSection = ({ topText, bottomText}: IntroSectionProps) => {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        <motion.h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          {topText} <br /> {bottomText}
        </motion.h1>

        <Link
          href="/about"
        >
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none  mt-10 outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white backdrop-blur-3xl">
              Get to know me
            </span>
          </button>
        </Link>
      </motion.div>
    </LampContainer>
  );
}

export default IntroSection;