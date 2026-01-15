"use client";

import { motion } from "framer-motion";
import { Twitter, Youtube, Instagram, Twitch } from "lucide-react";
import Link from "next/link";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/config/links";

const socialLinks = [
  { icon: Twitter, href: SOCIAL_LINKS[0].href, label: SOCIAL_LINKS[0].name },
  { icon: Youtube, href: SOCIAL_LINKS[1].href, label: SOCIAL_LINKS[1].name },
  { icon: Instagram, href: SOCIAL_LINKS[2].href, label: SOCIAL_LINKS[2].name },
  { icon: Twitch, href: SOCIAL_LINKS[3].href, label: SOCIAL_LINKS[3].name },
];

export default function Footer() {
  return (
    <footer className="relative bg-ash-black border-t border-gold/10">
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <span className="heading-gothic text-2xl text-bone tracking-[0.2em]">
                ABSOLVE
              </span>
            </motion.div>
            <p className="text-bone/50 text-sm leading-relaxed max-w-sm">
              A dark fantasy action RPG where absolution is earned through blood
              and sacrifice. Developed by Penut Studios.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="heading-gothic text-sm text-gold tracking-widest">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <motion.div
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={link.href}
                      className="text-bone/50 hover:text-gold text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-6">
            <h4 className="heading-gothic text-sm text-gold tracking-widest">
              JOIN THE HUNT
            </h4>
            
            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-charcoal border border-gold/20 px-4 py-2 text-sm text-bone placeholder:text-bone/30 focus:outline-none focus:border-gold/50 transition-colors rounded-sm"
              />
              <motion.button
                className="btn-gothic px-4 py-2 text-xs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SUBSCRIBE
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                >
                  <motion.div
                    className="w-10 h-10 rounded-sm border border-gold/20 flex items-center justify-center text-bone/50 hover:text-gold hover:border-gold/50 transition-colors duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={18} />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-bone/30 text-xs">
              © 2026 OfficialPeanutsStudio. All rights reserved.
            </p>
            <p className="text-bone/30 text-xs italic">
              &quot;There is no mercy here.&quot;
            </p>
            <div className="flex gap-6">
              <span className="text-bone/30 text-xs">EN</span>
              <span className="text-bone/20 text-xs">|</span>
              <span className="text-bone/30 text-xs">Rated M for Mature</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-blood/5 blur-3xl pointer-events-none" />
    </footer>
  );
}
