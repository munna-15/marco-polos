"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#100d0e] px-6 py-28 text-[#f4eee7] md:px-10 md:py-40 lg:px-14"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-white/30" />

          <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
            About Macro Polo&apos;s
          </span>
        </motion.div>

        {/* Main statement */}
        <div className="mt-16 grid lg:grid-cols-[0.65fr_1.8fr] lg:gap-20">
          <div className="hidden lg:block">
            <span className="text-[10px] tracking-[0.3em] text-white/20">
              01
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1.1,
              ease,
            }}
            className="max-w-[1050px] text-[clamp(2.8rem,6vw,7rem)] font-light leading-[0.94] tracking-[-0.06em]"
          >
            Dining is more than{" "}
            <span className="text-white/35">what is on the plate.</span>
          </motion.h2>
        </div>

        {/* Story */}
        <div className="mt-24 border-t border-white/10 pt-10 md:mt-32 md:pt-12">
          <div className="grid gap-14 md:grid-cols-[0.65fr_1fr_0.65fr] md:gap-16">
            {/* Small identity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[9px] uppercase tracking-[0.28em] text-white/30">
                The philosophy
              </span>

              <div className="mt-6 h-px w-8 bg-white/25" />
            </motion.div>

            {/* Main copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease,
              }}
            >
              <p className="max-w-2xl text-[17px] leading-8 text-white/65 md:text-[19px]">
                Macro Polo&apos;s brings together flavours, influences and ideas
                from around the world to create a dining experience that feels
                familiar, yet unexpected.
              </p>

              <p className="mt-7 max-w-xl text-[14px] leading-7 text-white/35 md:text-[15px]">
                Thoughtfully prepared dishes, an inviting atmosphere and moments
                worth staying a little longer for.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="flex flex-col justify-between md:items-end"
            >
              <div className="text-left md:text-right">
                <span className="block text-[8px] uppercase tracking-[0.3em] text-white/25">
                  Find us
                </span>

                <span className="mt-3 block text-[12px] leading-5 text-white/55">
                  Unimart Building
                  <br />
                  Level 6 · Dhanmondi
                  <br />
                  Dhaka
                </span>
              </div>

              <Link
                href="#menu"
                className="group mt-10 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-[9px] uppercase tracking-[0.25em] text-white/65 transition-colors duration-300 hover:text-white md:mt-0"
              >
                Discover the menu
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.1}
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-24 flex items-center justify-between border-t border-white/10 pt-6 md:mt-32"
        >
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
            Macro Polo&apos;s · Dhanmondi
          </span>

          <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
            02
          </span>
        </motion.div>
      </div>
    </section>
  );
}
