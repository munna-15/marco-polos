"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#f2eee7] text-[#171514]"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-24 lg:px-14">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#171514]/10 pb-4">
          <span className="text-[8px] uppercase tracking-[0.38em] text-[#171514]/45">
            Find us
          </span>

          <span className="text-[8px] uppercase tracking-[0.3em] text-[#171514]/25">
            06
          </span>
        </div>

        {/* Main */}
        <div className="mt-16 grid gap-14 md:grid-cols-[1.35fr_0.65fr] md:items-end md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease }}
          >
            <span className="text-[8px] uppercase tracking-[0.35em] text-[#171514]/35">
              Dhanmondi · Dhaka
            </span>

            <h2 className="mt-8 text-[clamp(3.5rem,7vw,7.5rem)] font-light leading-[0.82] tracking-[-0.075em]">
              Come
              <br />
              <span className="ml-[0.65em] text-[#171514]/25">find us.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="md:pb-2"
          >
            <div className="border-t border-[#171514]/15 pt-5">
              <span className="text-[7px] uppercase tracking-[0.3em] text-[#171514]/35">
                Address
              </span>

              <p className="mt-4 text-[13px] leading-6 text-[#171514]/60">
                Unimart Building, Level 6
                <br />
                House 80, Road 8/A
                <br />
                Satmasjid Road, Dhanmondi
                <br />
                Dhaka 1209
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Macro%20Polo's%20Dhanmondi%20Dhaka"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 border-b border-[#171514]/20 pb-3 text-[8px] uppercase tracking-[0.28em] text-[#171514]/65 transition-colors duration-300 hover:border-[#171514]/60 hover:text-[#171514]"
              >
                Open in maps
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.1}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Coordinates-style detail */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-20 grid border-t border-[#171514]/10 pt-5 md:mt-24 md:grid-cols-3"
        >
          <span className="text-[7px] uppercase tracking-[0.3em] text-[#171514]/25">
            MACRO POLO&apos;S
          </span>

          <span className="mt-3 text-[8px] uppercase tracking-[0.25em] text-[#171514]/30 md:mt-0">
            Unimart Building · Level 6
          </span>

          <span className="mt-3 text-[8px] uppercase tracking-[0.25em] text-[#171514]/25 md:mt-0 md:text-right">
            Dhanmondi · Dhaka
          </span>
        </motion.div>
      </div>
    </section>
  );
}
