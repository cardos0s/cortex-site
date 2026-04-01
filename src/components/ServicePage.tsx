"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

type ServicePageProps = {
  serviceKey: "ai" | "accessibility" | "mobile" | "software";
  accentColor: string;
  accentGlow: string;
  icon: string;
};

export default function ServicePage({
  serviceKey,
  accentColor,
  accentGlow,
  icon,
}: ServicePageProps) {
  const { t, lang, toggleLanguage } = useLanguage();
  const p = t.pages[serviceKey];
  const common = t.pages;

  const heroRef = useRef(null);
  const challengeRef = useRef(null);
  const solutionRef = useRef(null);
  const resultsRef = useRef(null);
  const featuresRef = useRef(null);
  const techRef = useRef(null);
  const portfolioRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const challengeInView = useInView(challengeRef, { once: true, margin: "-80px" });
  const solutionInView = useInView(solutionRef, { once: true, margin: "-80px" });
  const resultsInView = useInView(resultsRef, { once: true, margin: "-80px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-80px" });
  const techInView = useInView(techRef, { once: true, margin: "-80px" });
  const portfolioInView = useInView(portfolioRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-bg-primary text-foreground">
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-xl border-b border-glass-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-mono">{common.backHome}</span>
          </Link>
          <Link href="/" className="text-lg font-bold tracking-wider gradient-text">
            CORTEX
          </Link>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-border hover:border-cyan/50 transition-all text-sm"
          >
            <span className={lang === "pt" ? "text-cyan" : "text-text-secondary"}>PT</span>
            <span className="text-glass-border">/</span>
            <span className={lang === "en" ? "text-cyan" : "text-text-secondary"}>EN</span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        {/* Accent background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at 30% 20%, ${accentGlow}, transparent 60%)`,
          }}
        />
        {/* Floating grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${accentColor}40 1px, transparent 1px), linear-gradient(90deg, ${accentColor}40 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${accentColor}20` }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
              </svg>
            </div>
            <span className="text-sm font-mono tracking-wider uppercase" style={{ color: accentColor }}>
              {t.services[serviceKey].title}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ color: accentColor }}
          >
            {p.title}
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl font-light text-white/80 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {p.subtitle}
          </motion.p>

          <motion.p
            className="text-lg text-text-secondary max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {p.heroText}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mt-12 h-[1px] max-w-xs"
            style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
            initial={{ width: 0 }}
            animate={heroInView ? { width: "100%" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </section>

      {/* Challenge */}
      <section ref={challengeRef} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[200px_1fr] gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={challengeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-mono tracking-wider uppercase sticky top-24" style={{ color: accentColor }}>
                {common.challenge}
              </h2>
            </motion.div>
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={challengeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-text-secondary text-lg leading-relaxed">{p.challenge}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section ref={solutionRef} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[200px_1fr] gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={solutionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-mono tracking-wider uppercase sticky top-24" style={{ color: accentColor }}>
                {common.solution}
              </h2>
            </motion.div>
            <motion.div
              className="glass-card p-8 border-l-2"
              style={{ borderColor: accentColor }}
              initial={{ opacity: 0, y: 30 }}
              animate={solutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-white/90 text-lg leading-relaxed">{p.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section ref={resultsRef} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-sm font-mono tracking-wider uppercase mb-12"
            style={{ color: accentColor }}
            initial={{ opacity: 0 }}
            animate={resultsInView ? { opacity: 1 } : {}}
          >
            {common.results}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {p.results.map((r: { value: string; label: string }, i: number) => (
              <motion.div
                key={r.label}
                className="text-center glass-card p-6"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={resultsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-black mb-2" style={{ color: accentColor }}>
                  {r.value}
                </div>
                <div className="text-text-secondary text-sm">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-sm font-mono tracking-wider uppercase mb-12"
            style={{ color: accentColor }}
            initial={{ opacity: 0 }}
            animate={featuresInView ? { opacity: 1 } : {}}
          >
            {common.features}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.features.map((f: { title: string; desc: string }, i: number) => (
              <motion.div
                key={f.title}
                className="glass-card p-6 group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: accentColor }}
                />
                {/* Number */}
                <span
                  className="text-xs font-mono mb-3 block opacity-40"
                  style={{ color: accentColor }}
                >
                  0{i + 1}
                </span>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section ref={techRef} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-sm font-mono tracking-wider uppercase mb-12"
            style={{ color: accentColor }}
            initial={{ opacity: 0 }}
            animate={techInView ? { opacity: 1 } : {}}
          >
            {common.techStack}
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {p.techStack.map((tech: string, i: number) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-full border text-sm font-mono"
                style={{ borderColor: `${accentColor}40`, color: accentColor }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={techInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{
                  backgroundColor: `${accentColor}15`,
                  boxShadow: `0 0 15px ${accentGlow}`,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      {p.portfolio && p.portfolio.length > 0 && (
        <section ref={portfolioRef} className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-sm font-mono tracking-wider uppercase mb-4"
              style={{ color: accentColor }}
              initial={{ opacity: 0 }}
              animate={portfolioInView ? { opacity: 1 } : {}}
            >
              {common.portfolioTitle}
            </motion.h2>
            <motion.div
              className="h-[1px] mb-12 max-w-[60px]"
              style={{ background: accentColor }}
              initial={{ width: 0 }}
              animate={portfolioInView ? { width: 60 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

            <div className="space-y-6">
              {p.portfolio.map(
                (
                  project: {
                    name: string;
                    tag: string;
                    description: string;
                    metrics: string[];
                  },
                  i: number
                ) => (
                  <motion.div
                    key={project.name}
                    className="glass-card p-8 group relative overflow-hidden"
                    initial={{ opacity: 0, x: -30 }}
                    animate={portfolioInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                  >
                    {/* Left accent bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px]"
                      style={{ background: `linear-gradient(180deg, ${accentColor}, transparent)` }}
                    />

                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Left: project info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-white">{project.name}</h3>
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded-full border"
                            style={{ borderColor: `${accentColor}50`, color: accentColor }}
                          >
                            {project.tag}
                          </span>
                        </div>
                        <p className="text-text-secondary leading-relaxed text-sm">
                          {project.description}
                        </p>
                      </div>

                      {/* Right: metrics */}
                      <div className="flex flex-wrap md:flex-col gap-2 md:min-w-[180px]">
                        {project.metrics.map((metric: string) => (
                          <div
                            key={metric}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: accentColor }}
                            />
                            <span className="text-white/80 font-mono text-xs">
                              {metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at 0% 50%, ${accentGlow}20, transparent 60%)`,
                      }}
                    />
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section ref={ctaRef} className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="glass-card p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{ background: `radial-gradient(circle at center, ${accentGlow}, transparent 70%)` }}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
              {common.cta}
            </h2>
            <p className="text-text-secondary text-lg mb-8 relative">{common.ctaText}</p>
            <Link
              href="/#contact"
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full border font-medium transition-all duration-500 hover:scale-105"
              style={{
                borderColor: `${accentColor}80`,
                color: accentColor,
              }}
            >
              {common.ctaButton}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-glass-border py-6 text-center text-text-secondary text-sm">
        &copy; {new Date().getFullYear()} CORTEX. {t.footer.rights}
      </footer>
    </div>
  );
}
