"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#171514] text-[#f2eee7]"
    >
      <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32 lg:px-14">
        {/* Header */}
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-white/25" />

            <span className="text-[8px] uppercase tracking-[0.36em] text-white/40 sm:text-[9px]">
              The experience
            </span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[8px] uppercase tracking-[0.3em] text-white/20"
          >
            04
          </motion.span>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 1, ease }}
          className="mt-14 sm:mt-16 md:mt-20"
        >
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
            More than a meal
          </span>

          <h2 className="mt-6 max-w-[1000px] text-[clamp(3.3rem,8.5vw,8.5rem)] font-light leading-[0.82] tracking-[-0.08em]">
            Stay for the
            <br />
            <span className="ml-[0.55em] text-white/25">atmosphere.</span>
          </h2>
        </motion.div>

        {/* Art directed composition */}
        <div className="relative mt-14 sm:mt-16 md:mt-24">
          {/* Main interior image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.15, ease }}
            className="relative ml-auto aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] md:w-[76%]"
          >
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease }}
              className="absolute inset-0"
            >
              <Image
                src="/images/macro-polos/interior-03.jpg"
                alt="Interior experience at MACRO POLO'S"
                fill
                sizes="(max-width: 768px) 100vw, 76vw"
                className="object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-black/[0.08]" />

            <div className="absolute bottom-4 left-4 flex items-center gap-2 sm:bottom-5 sm:left-5">
              <span className="h-px w-6 bg-white/40" />

              <span className="text-[7px] uppercase tracking-[0.28em] text-white/55">
                Inside MACRO POLO&apos;S
              </span>
            </div>
          </motion.div>

          {/* Dark text panel */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.12, ease }}
            className="relative z-20 -mt-px w-[92%] bg-[#171514] py-8 pr-6 sm:py-10 sm:pr-8 md:absolute md:bottom-[6%] md:left-0 md:mt-0 md:w-[46%] md:py-11 md:pr-14 lg:pr-16"
          >
            <p className="max-w-[390px] text-[12px] leading-6 text-white/42 sm:text-[13px]">
              From the first step inside to the last conversation at the table,
              every detail is part of the evening.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-9 bg-white/20" />

              <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
                Dhanmondi · Dhaka
              </span>
            </div>
          </motion.div>

          {/* Secondary image */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.25, ease }}
            className="relative z-10 mt-6 ml-auto aspect-[4/3] w-[64%] overflow-hidden sm:w-[55%] md:absolute md:right-[2%] md:top-[52%] md:mt-0 md:aspect-[3/4] md:w-[21%]"
          >
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease }}
              className="absolute inset-0"
            >
              <Image
                src="/images/macro-polos/food-01.jpg"
                alt="Food at MACRO POLO'S"
                fill
                sizes="(max-width: 768px) 64vw, 21vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 border-t border-white/10 pt-6 sm:mt-20 sm:pt-7 md:mt-28"
        >
          <div className="flex flex-col gap-6 sm:gap-7 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[430px] text-[12px] leading-6 text-white/32 sm:text-[13px]">
              A contemporary setting designed for long evenings, thoughtful
              conversations and memorable tables.
            </p>

            <span className="text-[7px] uppercase tracking-[0.3em] text-white/20">
              MACRO POLO&apos;S · Dhanmondi · Dhaka
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
