"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/config/images";
import { LINKS } from "@/config/links";

export default function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    // Create floating ember particles
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 8 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      particle.style.opacity = `${Math.random() * 0.6 + 0.4}`;
      // Vary particle sizes
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particlesRef.current?.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 18000);
    };

    // Initial particles - more particles
    for (let i = 0; i < 50; i++) {
      setTimeout(createParticle, i * 80);
    }

    // Continuous particle generation - faster interval
    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${IMAGES.hero.background}')`,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-ash-black/70 via-ash-black/50 to-ash-black" />
        {/* Red tint overlay */}
        <div className="absolute inset-0 bg-blood/10 mix-blend-multiply" />
      </div>

      {/* Fog layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="fog-layer opacity-30"
          style={{ top: "60%", animationDelay: "0s" }}
        />
        <div
          className="fog-layer opacity-20"
          style={{ top: "70%", animationDelay: "-10s" }}
        />
      </div>

      {/* Floating particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main Title - Logo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/logo.png"
            alt="ABSØLVE"
            width={800}
            height={200}
            priority
            className="w-full max-w-2xl h-auto drop-shadow-[0_0_15px_rgba(200,200,200,0.5)]"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="heading-gothic text-xl md:text-2xl text-gold/80 tracking-[0.3em] mb-4"
        >
          THERE IS NO MERCY HERE
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-bone/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Enter a world of dark fantasy and gothic horror. 
          <span className="text-blood"> Only the strong endure.</span>
          <br />
          Absolution is earned in blood.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href={LINKS.cta.beginJourney}
            className="btn-gothic bg-blood/20 border-blood hover:border-gold px-10 py-4"
          >
            Begin Your Journey
          </Link>
          <Link
            href={LINKS.cta.watchTrailer}
            className="btn-gothic px-10 py-4"
          >
            Watch Trailer
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-bone/40"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-ash-black to-transparent" />
    </section>
  );
}
