"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sword, Shield, Skull, Flame, Eye, Crown } from "lucide-react";

const features = [
  {
    icon: Sword,
    title: "BRUTAL COMBAT",
    description:
      "Master a visceral combat system where every strike carries weight. Chain devastating combos, parry with precision, and execute your foes with ritualistic finishers.",
  },
  {
    icon: Shield,
    title: "ANCIENT ARTIFACTS",
    description:
      "Discover cursed relics scattered across the forsaken lands. Each artifact holds immense power — and a terrible price.",
  },
  {
    icon: Skull,
    title: "MERCILESS ENEMIES",
    description:
      "Face nightmarish creatures born from corruption and despair. Learn their patterns, exploit their weaknesses, or perish.",
  },
  {
    icon: Flame,
    title: "DARK MAGIC",
    description:
      "Harness forbidden arts that consume the very essence of your soul. Power demands sacrifice.",
  },
  {
    icon: Eye,
    title: "HIDDEN SECRETS",
    description:
      "Uncover the mysteries of a dying world. Ancient ruins, forgotten tombs, and whispered prophecies await the worthy.",
  },
  {
    icon: Crown,
    title: "RISE OR FALL",
    description:
      "Your choices shape the fate of kingdoms. Become a savior, a tyrant, or something far worse.",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-32 bg-ash-black" ref={ref}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D9A441' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="heading-gothic text-4xl md:text-5xl lg:text-6xl text-bone mb-6">
            EMBRACE THE <span className="text-blood">DARKNESS</span>
          </h2>
          <div className="w-24 h-px bg-linear-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-bone/60 text-lg max-w-2xl mx-auto">
            In this forsaken realm, strength is the only currency that matters.
            Forge your path through blood and fire.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card-stone p-8 rounded-sm group cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <feature.icon className="size-12 text-gold torch-glow" />
              </div>

              {/* Title */}
              <h3 className="heading-gothic text-xl text-bone mb-4 group-hover:text-gold transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-bone/60 leading-relaxed group-hover:text-bone/80 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/20 rounded-tr-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/20 rounded-bl-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Atmospheric divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-24 fill-charcoal"
          preserveAspectRatio="none"
        >
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
}
