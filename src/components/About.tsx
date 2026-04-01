"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = target / 60;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 25);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { value: 50, suffix: "+", label: t.about.stats.projects },
    { value: 30, suffix: "+", label: t.about.stats.clients },
    { value: 5, suffix: "+", label: t.about.stats.years },
    { value: 25, suffix: "+", label: t.about.stats.technologies },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.about.title}
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-center text-text-secondary text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t.about.description}
        </motion.p>

        {/* Mission & Vision cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {[
            { title: t.about.mission, text: t.about.missionText, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { title: t.about.vision, text: t.about.visionText, icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="glass-card p-8 group cursor-default"
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-cyan"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={card.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-text-secondary text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
