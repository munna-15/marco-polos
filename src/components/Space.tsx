"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Space() {
  return (
    <section
      id="space"
      className="relative overflow-hidden bg-[#100d0e] text-[#f4eee7]"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 sm:py-28 md:relative md:min-h-[115vh] md:px-10 md:py-0 lg:px-14">
        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center gap-3 md:absolute md:left-10 md:top-20 lg:left-14"
        >
          <span className="h-px w-8 bg-white/30" />

          <span className="text-[8px] uppercase tracking-[0.35em] text-white/35">
            The Space
          </span>
        </motion.div>

        {/* Mobile heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease }}
          className="mt-14 md:hidden"
        >
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
            Inside MACRO POLO&apos;S
          </span>

          <h2 className="mt-5 text-[clamp(4rem,20vw,7rem)] font-light leading-[0.76] tracking-[-0.08em]">
            The
            <br />
            <span className="ml-[0.35em] text-white/30">Space</span>
          </h2>
        </motion.div>

        {/* Mobile image */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease }}
          className="relative mt-14 aspect-[4/5] w-full overflow-hidden md:hidden"
        >
          <motion.div
            initial={{ scale: 1.07 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease }}
            className="absolute inset-0"
          >
            <Image
              src="/images/macro-polos/interior-04.jpg"
              alt="Interior of MACRO POLO'S"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <span className="absolute bottom-5 left-5 text-[7px] uppercase tracking-[0.3em] text-white/55">
            MACRO POLO&apos;S · Dhanmondi
          </span>
        </motion.div>

        {/* Mobile statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="mt-12 max-w-[360px] md:hidden"
        >
          <p className="text-[clamp(1.35rem,5.5vw,1.8rem)] font-light leading-[1.12] tracking-[-0.035em] text-white/65">
            Designed for long evenings,
            <span className="text-white/25">
              {" "}
              quiet conversations and memorable tables.
            </span>
          </p>
        </motion.div>

        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5 md:hidden">
          <span className="text-[7px] uppercase tracking-[0.3em] text-white/20">
            Dhanmondi · Dhaka
          </span>

          <span className="text-[7px] tracking-[0.3em] text-white/20">04</span>
        </div>

        {/* ================= DESKTOP ================= */}

        {/* Oversized typography */}
        <div className="absolute left-10 top-[20%] z-10 hidden md:block lg:left-14">
          <motion.h2
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1.1,
              ease,
            }}
            className="text-[clamp(4.5rem,11vw,12rem)] font-light leading-[0.78] tracking-[-0.08em]"
          >
            The
            <br />
            <span className="ml-[0.35em] text-white/30">Space</span>
          </motion.h2>
        </div>

        {/* Interior image */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 1.2,
            ease,
          }}
          className="absolute right-[4%] top-[18%] hidden h-[58vh] w-[57%] md:block md:right-[7%] md:h-[62vh] md:w-[54%] lg:right-[10%] lg:w-[50%]"
        >
          <motion.div
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease,
            }}
            className="relative h-full w-full overflow-hidden"
          >
            <Image
              src="/images/macro-polos/interior-04.jpg"
              alt="Interior of MACRO POLO'S"
              fill
              sizes="50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            <span className="absolute bottom-5 left-5 text-[7px] uppercase tracking-[0.3em] text-white/50">
              Inside MACRO POLO&apos;S
            </span>
          </motion.div>
        </motion.div>

        {/* Vertical detail */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
          className="absolute right-6 top-[78%] hidden md:block md:right-10 lg:right-14"
        >
          <span className="text-[8px] uppercase tracking-[0.35em] text-white/30 [writing-mode:vertical-rl]">
            Dhanmondi · Dhaka
          </span>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease,
          }}
          className="absolute bottom-[8%] left-10 hidden max-w-[430px] md:block lg:left-14"
        >
          <p className="text-[clamp(1.2rem,2vw,2rem)] font-light leading-[1.15] tracking-[-0.035em] text-white/65">
            Designed for long evenings,
            <span className="text-white/30">
              {" "}
              quiet conversations and memorable tables.
            </span>
          </p>
        </motion.div>

        {/* Section number */}
        <span className="absolute bottom-[8%] right-6 hidden text-[8px] tracking-[0.3em] text-white/20 md:block md:right-10 lg:right-14">
          04
        </span>
      </div>
    </section>
  );
}
