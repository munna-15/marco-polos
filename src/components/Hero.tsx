"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1695094411862-0e047fbddcb1?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#100d0e] text-[#f4eee7]">
      {/* Cinematic image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.4,
          ease,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${HERO_IMAGE}")`,
          }}
        />
      </motion.div>

      {/* Soft cinematic contrast */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/25 via-transparent to-black/55" />

      {/* Subtle edge vignette */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.28)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-end px-6 pb-8 md:px-10 md:pb-10 lg:px-14 lg:pb-12">
        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease,
          }}
          className="mb-7 flex items-center gap-3"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 36 }}
            transition={{
              duration: 0.8,
              delay: 0.55,
              ease,
            }}
            className="h-px bg-white/45"
          />

          <span className="text-[9px] uppercase tracking-[0.35em] text-white/65">
            Dhanmondi · Dhaka
          </span>
        </motion.div>

        {/* Brand */}
        <h1 className="select-none text-[clamp(4.4rem,10.5vw,10.5rem)] font-light leading-[0.76] tracking-[-0.075em]">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1.15,
                delay: 0.25,
                ease,
              }}
              className="block"
            >
              Macro
            </motion.span>
          </span>

          <span className="ml-[7vw] block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1.2,
                delay: 0.38,
                ease,
              }}
              className="block text-white/60"
            >
              Polo&apos;s
            </motion.span>
          </span>
        </h1>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.75,
            ease,
          }}
          className="mt-10 border-t border-white/20 pt-5"
        >
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-6 text-white/65 md:text-[15px]">
              A contemporary dining experience shaped by flavour, atmosphere and
              discovery.
            </p>

            <Link
              href="#menu"
              className="group inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.28em] text-white"
            >
              <span>Explore the menu</span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.2}
                  className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Bottom metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: 1.1,
          }}
          className="mt-8 flex items-center justify-between text-[8px] uppercase tracking-[0.28em] text-white/45"
        >
          <span>Unimart Building · Level 6</span>

          <span className="hidden items-center gap-2 sm:flex">
            Scroll to explore
            <ArrowDown size={13} strokeWidth={1.1} className="animate-pulse" />
          </span>

          <span className="sm:hidden">
            <ArrowDown size={14} strokeWidth={1.1} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
