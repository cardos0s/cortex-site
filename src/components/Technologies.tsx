"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Python", color: "#3776AB" },
  { name: "Node.js", color: "#339933" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "React Native", color: "#61DAFB" },
  { name: "Flutter", color: "#02569B" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "OpenAI", color: "#00A67E" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Kotlin", color: "#7F52FF" },
  { name: "Swift", color: "#F05138" },
  { name: "Go", color: "#00ADD8" },
];

function TechBadge({ name, color, index }: { name: string; color: string; index: number }) {
  return (
    <motion.div
      className="glass-card px-5 py-3 flex items-center gap-3 cursor-default group whitespace-nowrap"
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 20px ${color}30`,
        borderColor: `${color}50`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
    >
      {/* Colored dot */}
      <div
        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}80` }}
      />
      <span className="text-sm font-medium text-text-secondary group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

export default function Technologies() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const row1 = technologies.slice(0, 10);
  const row2 = technologies.slice(10, 20);

  return (
    <section id="tech" className="relative py-24 md:py-32 overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.04),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.tech.title}
          </h2>
          <p className="text-text-secondary text-lg">{t.tech.subtitle}</p>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4">
        {/* Row 1 - left to right */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10" />
          <div className="flex gap-4 animate-marquee">
            {[...row1, ...row1].map((tech, i) => (
              <TechBadge key={`r1-${i}`} name={tech.name} color={tech.color} index={i} />
            ))}
          </div>
        </div>

        {/* Row 2 - right to left */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10" />
          <div
            className="flex gap-4 animate-marquee"
            style={{ animationDirection: "reverse" }}
          >
            {[...row2, ...row2].map((tech, i) => (
              <TechBadge key={`r2-${i}`} name={tech.name} color={tech.color} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Static grid for mobile / no-motion preference */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 gap-3">
          {technologies.map((tech, i) => (
            <TechBadge key={tech.name} name={tech.name} color={tech.color} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
