"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const foods = [
  {
    src: "/images/macro-polos/food-01.jpg",
    alt: "Featured dish at MACRO POLO'S",
  },
  {
    src: "/images/macro-polos/food-02.jpg",
    alt: "Dish at MACRO POLO'S",
  },
  {
    src: "/images/macro-polos/food-03.jpg",
    alt: "Dish at MACRO POLO'S",
  },
  {
    src: "/images/macro-polos/food-04.jpg",
    alt: "Dish at MACRO POLO'S",
  },
  {
    src: "/images/macro-polos/food-05.jpg",
    alt: "Dish at MACRO POLO'S",
  },
  {
    src: "/images/macro-polos/food-06.jpg",
    alt: "Dish at MACRO POLO'S",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function FoodImage({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

export default function MenuPreview() {
  return (
    <section
      id="menu-preview"
      className="relative overflow-hidden bg-[#f2eee7] text-[#171514]"
    >
      <div className="mx-auto max-w-[1500px] px-6 pb-16 md:px-10 md:pb-36 lg:px-14">
        {/* Header */}
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="text-[8px] uppercase tracking-[0.38em] text-[#171514]/40">
              From the kitchen
            </span>

            <h2 className="mt-7 max-w-[760px] text-[clamp(3.2rem,6.5vw,7rem)] font-light leading-[0.86] tracking-[-0.075em]">
              A glimpse
              <br />
              <span className="ml-[0.7em] text-[#171514]/25">of the menu.</span>
            </h2>
          </motion.div>

          <span className="hidden pb-2 text-[8px] uppercase tracking-[0.3em] text-[#171514]/25 md:block">
            06 selections
          </span>
        </div>

        {/* Main composition */}
        <div className="relative mt-20 md:mt-28">
          {/* Hero food */}
          <FoodImage
            src={foods[0].src}
            alt={foods[0].alt}
            sizes="(max-width: 768px) 100vw, 63vw"
            className="aspect-[4/3] w-full md:ml-[9%] md:aspect-[16/10] md:w-[63%]"
          />

          {/* Floating second image */}
          <FoodImage
            src={foods[1].src}
            alt={foods[1].alt}
            sizes="(max-width: 768px) 80vw, 30vw"
            className="mt-5 aspect-[4/3] w-[82%] md:absolute md:right-0 md:top-[20%] md:mt-0 md:aspect-[4/5] md:w-[28%]"
          />

          {/* Small caption */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 flex items-center gap-4 md:absolute md:bottom-0 md:left-0 md:mt-0"
          >
            <span className="h-px w-8 bg-[#171514]/25" />

            <span className="text-[8px] uppercase tracking-[0.28em] text-[#171514]/40">
              Selected from our kitchen
            </span>
          </motion.div>
        </div>

        {/* Lower image rhythm */}
        <div className="mt-24 grid grid-cols-2 gap-3 md:mt-32 md:grid-cols-[0.8fr_1.2fr_0.8fr] md:items-end md:gap-5">
          <FoodImage
            src={foods[2].src}
            alt={foods[2].alt}
            sizes="(max-width: 768px) 50vw, 27vw"
            className="aspect-[3/4]"
          />

          <FoodImage
            src={foods[3].src}
            alt={foods[3].alt}
            sizes="(max-width: 768px) 50vw, 40vw"
            className="aspect-[4/3] translate-y-8 md:translate-y-14"
          />

          <FoodImage
            src={foods[4].src}
            alt={foods[4].alt}
            sizes="(max-width: 768px) 50vw, 27vw"
            className="aspect-[3/4]"
          />
        </div>

        {/* Final sixth image + menu link */}
        <div className="mt-20 grid items-end gap-10 md:mt-32 md:grid-cols-[1fr_0.75fr]">
          <FoodImage
            src={foods[5].src}
            alt={foods[5].alt}
            sizes="(max-width: 768px) 100vw, 58vw"
            className="aspect-[16/8] md:aspect-[16/9]"
          />

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="md:pb-3 md:pl-10"
          >
            <span className="text-[8px] uppercase tracking-[0.35em] text-[#171514]/35">
              The menu
            </span>

            <p className="mt-5 max-w-[280px] text-[13px] leading-6 text-[#171514]/50">
              Explore the dishes, flavours and selections waiting at MACRO
              POLO&apos;S.
            </p>

            <a
              href="#menu"
              className="group mt-7 inline-flex items-center gap-3 border-b border-[#171514]/20 pb-3 text-[8px] uppercase tracking-[0.28em] text-[#171514]/65 transition-colors duration-300 hover:border-[#171514]/60 hover:text-[#171514]"
            >
              Explore menu
              <ArrowUpRight
                size={13}
                strokeWidth={1.1}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
