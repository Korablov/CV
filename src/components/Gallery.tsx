"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const photos = profile.gallery as readonly { src: string; alt: string }[];

  if (photos.length === 0) return null;

  return (
    <section id="gallery" className="bg-light-bg py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-dark-text tracking-wider mb-12 text-center">
            OPERATIONS
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <button
                onClick={() => setSelected(i)}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-lg group cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors flex items-end">
                  <span className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {photo.alt}
                  </span>
                </div>
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selected].src}
                alt={photos[selected].alt}
                width={1200}
                height={800}
                className="object-contain w-full h-auto max-h-[85vh] rounded"
              />
              <p className="text-white/70 text-sm text-center mt-3">
                {photos[selected].alt}
              </p>
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-2 -right-2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
