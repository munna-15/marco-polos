"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#100d0e] text-[#f4eee7]"
    >
      <div className="mx-auto max-w-[1500px] px-6  md:px-10 py-24  lg:px-14">
        {/* Header */}
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/30" />

              <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
                Featured Menu
              </span>
            </div>

            <h2 className="mt-10 max-w-[700px] text-[clamp(3rem,5.8vw,6.5rem)] font-light leading-[0.9] tracking-[-0.065em]">
              A taste of
              <br />
              <span className="text-white/35">Macro Polo&apos;s.</span>
            </h2>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden pb-2 text-[9px] tracking-[0.3em] text-white/25 md:block"
          >
            01 / 03
          </motion.span>
        </div>

        {/* Featured dish */}
        <div className="relative mt-20 md:mt-28">
          {/* Large image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 1.1,
              ease,
            }}
            className="relative ml-auto aspect-[4/3] w-full overflow-hidden md:aspect-[16/9] md:w-[78%]"
          >
            <motion.div
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease,
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/macro-polos/food-05.jpg"
                alt="Featured dish at Macro Polo's"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 78vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Dish information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease,
            }}
            className="relative z-10 mt-[-1px] bg-[#100d0e] py-8 pr-5 md:absolute md:bottom-[-1px] md:left-0 md:mt-0 md:w-[46%] md:py-10 md:pr-12"
          >
            <div className="flex items-center gap-3">
              <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                Signature
              </span>

              <span className="h-px w-6 bg-white/20" />
            </div>

            <h3 className="mt-5 text-[clamp(2rem,3.5vw,4rem)] font-light leading-[0.92] tracking-[-0.055em]">
              Chef&apos;s
              <br />
              <span className="text-white/40">Selection</span>
            </h3>

            <p className="mt-6 max-w-md text-[13px] leading-6 text-white/45 md:text-[14px]">
              A signature expression of Macro Polo&apos;s — thoughtfully
              composed around flavour, texture and the finest seasonal
              ingredients.
            </p>
          </motion.div>
        </div>

        {/* Bottom detail */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 md:ml-[22%]"
        >
          <span className="text-[8px] uppercase tracking-[0.28em] text-white/25">
            Selected from our kitchen
          </span>

          <span className="text-[8px] uppercase tracking-[0.28em] text-white/25">
            01
          </span>
        </motion.div>
      </div>
    </section>
  );
}
