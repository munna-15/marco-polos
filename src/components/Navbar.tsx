"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Reservation", href: "#reservation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-500 ${
          scrolled ? "bg-[#100d0e]/70 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[88px] max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-14">
          {/* =================================================
              BRAND
          ================================================= */}

          <Link href="/" className="group flex shrink-0 items-center gap-3">
            {/* LOGO */}

            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden">
              <Image
                src="/images/macro-polos/logo.jpg"
                alt="Marco Polo's"
                width={40}
                height={40}
                priority
                className="h-10 w-10 object-contain"
              />
            </div>

            {/* BRAND NAME */}

            <div className="flex flex-col leading-none">
              <span className="text-[14px] font-medium tracking-[0.16em] text-[#f4eee7]">
                MARCO POLO&apos;S
              </span>

              <span className="mt-1 text-[7px] uppercase tracking-[0.3em] text-[#f4eee7]/40">
                Dhanmondi · Dhaka
              </span>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative py-2 text-[11px] uppercase tracking-[0.18em] text-[#f4eee7]/65 transition-colors duration-300 hover:text-[#f4eee7]"
              >
                {link.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#f4eee7] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="hidden items-center gap-7 lg:flex">
            <Link
              href="#location"
              className="text-[10px] uppercase tracking-[0.18em] text-[#f4eee7]/40 transition-colors duration-300 hover:text-[#f4eee7]/75"
            >
              Find us
            </Link>

            <Link
              href="#reservation"
              className="group inline-flex items-center gap-3 border border-[#f4eee7]/35 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-[#f4eee7] transition-all duration-500 hover:border-[#f4eee7] hover:bg-[#f4eee7] hover:text-[#100d0e]"
            >
              Reserve a table
              <ArrowUpRight
                size={14}
                strokeWidth={1.2}
                className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-end text-[#f4eee7] lg:hidden"
          >
            <Menu size={23} strokeWidth={1.15} />
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] bg-[#100d0e] text-[#f4eee7]"
          >
            {/* MOBILE HEADER */}

            <div className="flex h-[88px] items-center justify-between px-6 md:px-10">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <Image
                  src="/images/marco-polos/logo.png"
                  alt="Marco Polo's"
                  width={38}
                  height={38}
                  className="h-[38px] w-[38px] object-contain"
                />

                <div className="flex flex-col leading-none">
                  <span className="text-[14px] font-medium tracking-[0.16em]">
                    MARCO POLO&apos;S
                  </span>

                  <span className="mt-1 text-[7px] uppercase tracking-[0.3em] text-white/35">
                    Dhanmondi · Dhaka
                  </span>
                </div>
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-end"
              >
                <X size={23} strokeWidth={1.15} />
              </button>
            </div>

            {/* MOBILE LINKS */}

            <div className="flex min-h-[calc(100vh-88px)] flex-col justify-between px-6 pb-8 pt-12 md:px-10">
              <nav className="flex flex-col">
                {links.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-white/10 py-6"
                    >
                      <span className="text-[clamp(2rem,9vw,4rem)] font-light tracking-[-0.04em]">
                        {link.label}
                      </span>

                      <ArrowUpRight
                        size={21}
                        strokeWidth={1.1}
                        className="text-white/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* MOBILE FOOTER */}

              <div className="flex items-end justify-between border-t border-white/10 pt-5">
                <div className="text-[8px] uppercase leading-5 tracking-[0.25em] text-white/35">
                  Unimart Building
                  <br />
                  Level 6 · Dhanmondi
                </div>

                <Link
                  href="#reservation"
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/70"
                >
                  Reserve
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.2}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
