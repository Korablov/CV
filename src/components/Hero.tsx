"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";
import { WaveDivider } from "./WaveDivider";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-navy flex flex-col items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-steel/30 mb-8"
      >
        <Image
          src={profile.profileImage}
          alt={profile.name}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-6xl font-black text-light-text tracking-[0.05em] text-center"
      >
        {profile.name.toUpperCase()}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-steel text-lg md:text-xl mt-4 tracking-wider font-medium"
      >
        {profile.title}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-light-text/60 mt-3 text-sm md:text-base"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex gap-4 mt-10"
      >
        <a
          href={profile.cvPath}
          download
          className="px-8 py-3 bg-steel text-white font-bold rounded tracking-wider text-sm hover:bg-gold-hover transition-colors"
        >
          DOWNLOAD CV
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-light-text/30 text-light-text rounded tracking-wider text-sm hover:border-steel hover:text-steel transition-colors"
        >
          CONTACT
        </a>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider />
      </div>
    </section>
  );
}
