"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { IMAGES } from "@/config/images";
import { LINKS } from "@/config/links";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('${IMAGES.cta.background}')`,
          }}
        />
        <div className="absolute inset-0 bg-ash-black/80" />
        <div className="absolute inset-0 bg-linear-to-b from-ash-black via-transparent to-ash-black" />
        {/* Blood red glow from bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-blood/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
 
        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-gothic text-4xl md:text-6xl lg:text-7xl text-bone mb-6"
        >
          YOUR <span className="text-blood text-glow-red">DESTINY</span> AWAITS
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "12rem" } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-px bg-linear-to-r from-transparent via-gold to-transparent mx-auto mb-8"
        />

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-bone/70 mb-4 italic"
        >
          &quot;In darkness, we find our true selves.&quot;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-bone/50 mb-12 max-w-2xl mx-auto"
        >
          Join thousands of warriors who have already embraced the darkness.
          Pre-order now and receive exclusive corrupted artifacts.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link
            href={LINKS.cta.preOrder}
            className="relative inline-block btn-gothic bg-blood/30 border-blood hover:border-gold px-12 py-5 text-lg group overflow-hidden"
          >
            PRE-ORDER NOW
          </Link>
        </motion.div>

        {/* Platforms */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex justify-center gap-8 text-bone/30"
        >
          <span className="heading-gothic text-sm tracking-widest">PC</span>
          <span className="heading-gothic text-sm tracking-widest">MAC</span>
          <span className="heading-gothic text-sm tracking-widest">LINUX</span>
        </motion.div>
      </div>
    </section>
  );
}
