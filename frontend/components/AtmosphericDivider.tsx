"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface DividerProps {
  variant?: "blood" | "gold" | "fade";
}

export default function AtmosphericDivider({ variant = "gold" }: DividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const lineColor = {
    blood: "from-transparent via-blood to-transparent",
    gold: "from-transparent via-gold to-transparent",
    fade: "from-transparent via-bone/20 to-transparent",
  };

  return (
    <div ref={ref} className="relative py-16 overflow-hidden">
      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`h-px bg-linear-to-r ${lineColor[variant]} mx-auto max-w-md`}
      />

      {/* Center ornament */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`w-3 h-3 rotate-45 border ${
            variant === "blood"
              ? "border-blood"
              : variant === "gold"
              ? "border-gold"
              : "border-bone/20"
          }`}
        />
      </motion.div>

      {/* Side ornaments */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 0.3, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute left-1/4 top-1/2 -translate-y-1/2"
      >
        <div className="flex gap-2">
          <div className="w-1 h-1 bg-gold/50 rotate-45" />
          <div className="w-1 h-1 bg-gold/30 rotate-45" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 0.3, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-1/4 top-1/2 -translate-y-1/2"
      >
        <div className="flex gap-2">
          <div className="w-1 h-1 bg-gold/30 rotate-45" />
          <div className="w-1 h-1 bg-gold/50 rotate-45" />
        </div>
      </motion.div>
    </div>
  );
}
