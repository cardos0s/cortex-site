"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [inView, text, delay]);

  return (
    <span ref={ref} className="typing-cursor">
      {displayed}
    </span>
  );
}

const particlePositions = [
  { top: "25%", left: "30%", dur: 2.3 },
  { top: "45%", left: "65%", dur: 3.1 },
  { top: "70%", left: "40%", dur: 2.7 },
  { top: "35%", left: "75%", dur: 3.5 },
  { top: "60%", left: "25%", dur: 2.9 },
  { top: "50%", left: "55%", dur: 3.3 },
];

export default function Julia() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const timeline = [t.julia.timeline.t1, t.julia.timeline.t2, t.julia.timeline.t3, t.julia.timeline.t4];

  return (
    <section id="julia" className="relative py-24 md:py-32" ref={sectionRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.julia.title}
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar / Visual side */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Animated border ring */}
              <motion.div
                className="absolute -inset-3 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #8b5cf6, #8b5cf6, #f0abfc, #8b5cf6)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute -inset-2 rounded-full bg-bg-primary" />

              {/* Avatar placeholder */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan/20 via-purple/20 to-pink/20 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <span className="text-6xl md:text-7xl font-bold gradient-text">
                    JC
                  </span>
                  <p className="text-text-secondary text-xs mt-2 font-mono">
                    Júlia Cardoso
                  </p>
                </div>

                {/* Decorative floating particles - client only */}
                {mounted && particlePositions.map((p, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-cyan/60"
                    style={{ top: p.top, left: p.left }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: p.dur,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-white mb-1">
              {t.julia.name}
            </h3>
            <p className="text-cyan font-mono text-sm mb-6">{t.julia.role}</p>

            <p className="text-text-secondary leading-relaxed mb-8">
              {t.julia.bio}
            </p>

            {/* Quote */}
            <div className="glass-card p-6 mb-8 border-l-2 border-cyan">
              <p className="text-white/90 italic text-lg leading-relaxed">
                <TypingText text={t.julia.quote} delay={800} />
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan relative">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan"
                      animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="absolute ml-[3px] mt-8 w-[2px] h-4 bg-gradient-to-b from-cyan/30 to-transparent" />
                  )}
                  <span className="text-cyan font-mono text-sm font-semibold min-w-[80px]">
                    {item.year}
                  </span>
                  <span className="text-text-secondary text-sm">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-8">
              {[
                {
                  label: "LinkedIn",
                  icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                },
                {
                  label: "GitHub",
                  icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                },
                {
                  label: "Instagram",
                  icon: "M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm4.25 5a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.25-2.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:neon-border transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <svg
                    className="w-5 h-5 text-text-secondary hover:text-cyan transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
