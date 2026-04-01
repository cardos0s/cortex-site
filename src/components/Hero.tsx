"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import dynamic from "next/dynamic";

const NeuralNetwork = dynamic(() => import("./NeuralNetwork"), { ssr: false });

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <NeuralNetwork />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0f_70%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-8 h-[1px] bg-cyan" />
          <span className="text-cyan text-sm font-mono tracking-[0.3em] uppercase">
            AI &bull; Accessibility &bull; Mobile &bull; Software
          </span>
          <span className="w-8 h-[1px] bg-cyan" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.0, duration: 0.8, ease: "easeOut" }}
          className="glitch text-7xl sm:text-8xl md:text-9xl font-black tracking-wider mb-6"
          data-text="CORTEX"
        >
          <span className="gradient-text">CÓRTEX</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="text-sm md:text-base font-mono tracking-[0.4em] uppercase text-white/60 mb-4"
        >
          THINK. BUILD. EVOLVE.
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
        >
          <a
            href="#services"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-cyan/50 text-cyan hover:bg-cyan/10 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 font-medium">{t.hero.cta}</span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <div className="absolute inset-0 neon-border rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
      >
        <span className="text-text-secondary text-xs font-mono tracking-widest">
          {t.hero.scroll}
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border border-text-secondary/30 flex justify-center pt-1.5"
          animate={{ borderColor: ["rgba(148,163,184,0.3)", "rgba(139,92,246,0.5)", "rgba(148,163,184,0.3)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-cyan"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
