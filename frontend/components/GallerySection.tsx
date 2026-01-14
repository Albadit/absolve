"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";
import { IMAGES } from "@/config/images";

const galleryItems = [
  {
    image: IMAGES.gallery.forsakenCathedral,
    title: "The Forsaken Cathedral",
  },
  {
    image: IMAGES.gallery.ancientBattlegrounds,
    title: "Ancient Battlegrounds",
  },
  {
    image: IMAGES.gallery.corruptedForest,
    title: "The Corrupted Forest",
  },
  {
    image: IMAGES.gallery.realmOfShadows,
    title: "Realm of Shadows",
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // Ensure we're on client side for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="relative py-32 bg-ash-black" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="heading-gothic text-4xl md:text-5xl lg:text-6xl text-bone mb-6">
            GLIMPSES OF <span className="text-blood">DAMNATION</span>
          </h2>
          <div className="w-24 h-px bg-linear-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-bone/60 text-lg max-w-2xl mx-auto">
            Witness the desolate beauty of a world consumed by darkness.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group cursor-pointer overflow-hidden rounded-sm"
              onClick={() => setSelectedImage(index)}
            >
              <motion.div
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-ash-black via-ash-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-blood/10 mix-blend-multiply" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.h3
                  className="heading-gothic text-xl md:text-2xl text-bone opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                >
                  {item.title}
                </motion.h3>
              </div>

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  className="w-16 h-16 rounded-full border border-gold/50 flex items-center justify-center bg-ash-black/50"
                  whileHover={{ scale: 1.1, borderColor: "#D9A441" }}
                >
                  <Play className="w-6 h-6 text-gold ml-1" />
                </motion.div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox - rendered via portal to escape stacking context */}
      {mounted && selectedImage !== null && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-909 flex items-center justify-center bg-ash-black/95 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            className="absolute top-8 right-8 text-bone/70 hover:text-gold transition-colors z-10"
            whileHover={{ scale: 1.1, rotate: 90 }}
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </motion.button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={galleryItems[selectedImage].image}
            alt={galleryItems[selectedImage].title}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <h3 className="heading-gothic text-2xl text-bone text-center">
              {galleryItems[selectedImage].title}
            </h3>
          </div>
        </motion.div>,
        document.body
      )}
    </section>
  );
}
