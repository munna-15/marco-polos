"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Reservation", href: "#reservation" },
  { label: "Location", href: "#location" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b0a09] text-[#f2eee7]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
        {/* Main footer */}
        <div className="grid gap-16 py-20 md:py-24 lg:grid-cols-[1.4fr_0.6fr] lg:gap-24">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
          >
            <div className="flex items-center gap-4">
              <Image
                src="/images/macro-polos/logo.jpg"
                alt="MACRO POLO'S"
                width={58}
                height={58}
                className="h-12 w-12 object-contain md:h-14 md:w-14"
              />

              <div>
                <span className="block text-[13px] tracking-[0.18em]">
                  MACRO POLO&apos;S
                </span>

                <span className="mt-1 block text-[7px] uppercase tracking-[0.3em] text-white/30">
                  Dhanmondi · Dhaka
                </span>
              </div>
            </div>

            <h2 className="mt-16 max-w-[850px] text-[clamp(3.2rem,7vw,7.5rem)] font-light leading-[0.86] tracking-[-0.075em]">
              See you
              <br />
              <span className="ml-[0.65em] text-white/25">at the table.</span>
            </h2>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="lg:pt-2"
          >
            <span className="text-[7px] uppercase tracking-[0.35em] text-white/25">
              Explore
            </span>

            <nav className="mt-7 flex flex-col">
              {links.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between border-b border-white/[0.08] py-3.5 text-[10px] uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-white"
                >
                  <span>{link.label}</span>

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-60"
                  />
                </Link>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Address / contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid border-t border-white/10 py-8 md:grid-cols-3 md:items-end"
        >
          <div>
            <span className="block text-[7px] uppercase tracking-[0.32em] text-white/25">
              Visit
            </span>

            <p className="mt-3 text-[11px] leading-5 text-white/45">
              Unimart Building, Level 6
              <br />
              House 80, Road 8/A
            </p>
          </div>

          <div className="mt-7 md:mt-0">
            <span className="block text-[7px] uppercase tracking-[0.32em] text-white/25">
              Location
            </span>

            <p className="mt-3 text-[11px] leading-5 text-white/45">
              Satmasjid Road
              <br />
              Dhanmondi, Dhaka 1209
            </p>
          </div>

          <Link
            href="#reservation"
            className="group mt-8 flex w-fit items-center gap-4 border-b border-white/20 pb-3 text-[8px] uppercase tracking-[0.28em] text-white/65 transition-all duration-500 hover:border-white hover:text-white md:ml-auto md:mt-0"
          >
            Reserve a table
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[#0b0a09]">
              <ArrowUpRight
                size={13}
                strokeWidth={1}
                className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </motion.div>

        {/* Final line */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-5 md:flex-row md:items-center md:justify-between">
          <span className="text-[7px] uppercase tracking-[0.28em] text-white/20">
            Dhanmondi · Dhaka · Bangladesh
          </span>

          <div className="flex items-center gap-6">
            <span className="text-[7px] uppercase tracking-[0.25em] text-white/20">
              © {new Date().getFullYear()} MACRO POLO&apos;S
            </span>

            <span className="text-[7px] uppercase tracking-[0.25em] text-white/20">
              Website by Quarry
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
