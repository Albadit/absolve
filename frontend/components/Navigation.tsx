"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Volume2, VolumeX, Volume1 } from "lucide-react";
import Link from "next/link";
import { useAudio } from "@/components/AudioProvider";
import { AUDIO_CONFIG } from "@/config/audio";
import { NAV_LINKS } from "@/config/links";

const navLinks = NAV_LINKS;

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const { isMuted, toggleMute, volume, setVolume } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-ash-black/95 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="heading-gothic text-2xl text-bone tracking-[0.3em] text-glow-gold"
          >
            ABSØLVE
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={link.href}
                  className="heading-gothic text-sm text-bone/70 hover:text-gold transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Volume Control */}
            <div 
              className="relative flex items-center"
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              {/* Mute Toggle */}
              <motion.button
                onClick={toggleMute}
                className="p-2 text-bone/50 hover:text-gold transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX size={20} />
                ) : volume < 0.5 ? (
                  <Volume1 size={20} />
                ) : (
                  <Volume2 size={20} />
                )}
              </motion.button>

              {/* Volume Slider */}
              <AnimatePresence>
                {showVolumeSlider && AUDIO_CONFIG.showVolumeSlider && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 bg-ash-black/75 rounded-sm p-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min={AUDIO_CONFIG.minVolume}
                        max={AUDIO_CONFIG.maxVolume}
                        step={AUDIO_CONFIG.volumeStep}
                        value={isMuted ? 0 : volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        className="w-24 h-1 bg-bone/50 rounded-full appearance-none cursor-pointer
                          [&::-webkit-slider-thumb]:appearance-none
                          [&::-webkit-slider-thumb]:w-3
                          [&::-webkit-slider-thumb]:h-3
                          [&::-webkit-slider-thumb]:rounded-full
                          [&::-webkit-slider-thumb]:bg-gold
                          [&::-webkit-slider-thumb]:cursor-pointer
                          [&::-webkit-slider-thumb]:transition-transform
                          [&::-webkit-slider-thumb]:hover:scale-125
                          [&::-moz-range-thumb]:w-3
                          [&::-moz-range-thumb]:h-3
                          [&::-moz-range-thumb]:rounded-full
                          [&::-moz-range-thumb]:bg-gold
                          [&::-moz-range-thumb]:border-0
                          [&::-moz-range-thumb]:cursor-pointer"
                        aria-label="Volume"
                      />
                      <span className="text-bone/50 text-xs w-8 text-right">
                        {Math.round((isMuted ? 0 : volume) * 100)}%
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-bone"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ash-black/98 border-b border-gold/10"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block heading-gothic text-lg text-bone/70 hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
