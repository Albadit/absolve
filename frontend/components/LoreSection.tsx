"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BookOpen } from "lucide-react";
import { IMAGES } from "@/config/images";

const loreItems = [
  {
    title: "THE FALL",
    content:
      "A thousand years ago, the gods abandoned this world. In their wake, they left only silence — and the corruption that now consumes all.",
    image: IMAGES.lore.theFall,
  },
  {
    title: "THE CURSE",
    content:
      "Those who seek power must pay the ultimate price. The curse spreads through bloodlines, twisting flesh and soul alike into something inhuman.",
    image: IMAGES.lore.theCurse,
  },
  {
    title: "THE ABSOLUTION",
    content:
      "There exists a path to salvation — but it is paved with the bones of the fallen. Only through absolute sacrifice can one find absolution.",
    image: IMAGES.lore.theAbsolution,
  },
];

export default function LoreSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="lore"
      ref={containerRef}
      className="relative py-32 bg-charcoal overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y }}
      >
        <div
          className="w-full h-[150%] bg-cover bg-center"
          style={{
            backgroundImage: `url('${IMAGES.lore.background}')`,
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <BookOpen className="w-12 h-12 text-gold/60 mx-auto mb-6 torch-glow" />
          <h2 className="heading-gothic text-4xl md:text-5xl lg:text-6xl text-bone mb-6">
            THE <span className="text-gold">FORGOTTEN</span> CHRONICLES
          </h2>
          <div className="w-24 h-px bg-linear-to-r from-transparent via-blood to-transparent mx-auto mb-6" />
          <p className="text-bone/60 text-lg max-w-2xl mx-auto italic">
            &quot;What was written in blood cannot be erased by time.&quot;
          </p>
        </motion.div>

        {/* Lore Cards */}
        <div className="space-y-24">
          {loreItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 relative group">
                <motion.div
                  className="relative overflow-hidden rounded-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="aspect-video bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-ash-black via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-blood/10 mix-blend-multiply" />
                  {/* Vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
                </motion.div>
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-gold/10 rounded-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "3rem" } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  className="h-px bg-gold"
                />
                <h3 className="heading-gothic text-3xl md:text-4xl text-bone">
                  {item.title}
                </h3>
                <p className="text-bone/70 text-lg leading-relaxed">
                  {item.content}
                </p>
                <motion.button
                  className="text-gold/70 heading-gothic text-sm tracking-widest hover:text-gold transition-colors group flex items-center gap-2"
                  whileHover={{ x: 10 }}
                >
                  Read More
                  <span className="transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
