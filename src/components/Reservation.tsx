"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Reservation() {
  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-[#0b0a09] text-[#f2eee7]"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-24 lg:px-14">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-[8px] uppercase tracking-[0.38em] text-white/40">
            Reservations
          </span>

          <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
            05
          </span>
        </div>

        {/* Main */}
        <div className="mt-14 grid items-center gap-12 md:mt-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 1,
              ease,
            }}
            className="relative z-10 md:py-8"
          >
            <span className="text-[8px] uppercase tracking-[0.35em] text-white/30">
              Your table awaits
            </span>

            <h2 className="mt-8 max-w-[650px] text-[clamp(3.6rem,6.5vw,7rem)] font-light leading-[0.84] tracking-[-0.075em]">
              Make an
              <br />
              <span className="ml-[0.7em] text-white/30">evening of it.</span>
            </h2>

            <p className="mt-10 max-w-[310px] text-[12px] leading-6 text-white/40">
              For reservations and dining enquiries, get in touch with our team.
            </p>

            <Link
              href="#contact"
              className="group mt-9 inline-flex items-center gap-4 border-b border-white/25 pb-3 text-[9px] uppercase tracking-[0.3em] text-white transition-colors duration-500 hover:border-white"
            >
              Reserve a table
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[#171514]">
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.1}
                  className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 1.2,
              ease,
            }}
            className="relative ml-auto h-[58vh] min-h-[420px] w-full max-w-[620px] overflow-hidden md:h-[65vh]"
          >
            <motion.div
              initial={{ scale: 1.07 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease,
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/macro-polos/reservation.jpg"
                alt="Dining interior at Macro Polo's"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
              />
            </motion.div>

            {/* Quiet image detail */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between bg-gradient-to-t from-black/45 to-transparent px-5 pb-5 pt-20">
              <span className="text-[7px] uppercase tracking-[0.3em] text-white/60">
                MACRO POLO&apos;S
              </span>

              <span className="text-[7px] uppercase tracking-[0.3em] text-white/45">
                Dhanmondi
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom details */}
        <div className="mt-14 grid border-t border-white/10 pt-5 md:mt-16 md:grid-cols-2">
          <div>
            <span className="block text-[7px] uppercase tracking-[0.3em] text-white/20">
              Find us
            </span>

            <span className="mt-2 block text-[10px] leading-5 text-white/40">
              Unimart Building · Level 6
              <br />
              House 80, Road 8/A · Dhanmondi
            </span>
          </div>

          <div className="mt-6 md:mt-0 md:text-right">
            <span className="block text-[7px] uppercase tracking-[0.3em] text-white/20">
              MACRO POLO&apos;S
            </span>

            <span className="mt-2 block text-[10px] text-white/40">
              Dhanmondi · Dhaka 1209
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
