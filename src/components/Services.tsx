"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const serviceIcons = [
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a1 1 0 100-2 1 1 0 000 2zm-2 7l1.5-5h1l1.5 5m-5-3h6",
  "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
];

const serviceColors = [
  { primary: "#8b5cf6", glow: "rgba(139,92,246,0.3)" },
  { primary: "#8b5cf6", glow: "rgba(139,92,246,0.3)" },
  { primary: "#f0abfc", glow: "rgba(240,171,252,0.3)" },
  { primary: "#34d399", glow: "rgba(52,211,153,0.3)" },
];

const serviceLinks = [
  "/services/ai",
  "/services/accessibility",
  "/services/mobile",
  "/services/software",
];

const projectNames = ["AgroCortex", "Aurora", "PulseConnect", "NexusERP"];

function ServiceCard({
  icon,
  title,
  description,
  color,
  index,
  inView,
  href,
  projectName,
  viewLabel,
}: {
  icon: string;
  title: string;
  description: string;
  color: (typeof serviceColors)[0];
  index: number;
  inView: boolean;
  href: string;
  projectName: string;
  viewLabel: string;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      className="glass-card p-8 cursor-pointer relative overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color.glow}, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative"
        style={{ background: `${color.primary}15` }}
      >
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color.primary}
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{ border: `1px solid ${color.primary}` }}
          animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        />
      </div>

      {/* Content */}
      <h3
        className="text-xl font-semibold mb-3"
        style={{ color: color.primary }}
      >
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed text-sm mb-6">
        {description}
      </p>

      {/* Project link */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-mono group/link relative z-10"
        style={{ color: color.primary }}
      >
        <span className="opacity-60">{viewLabel}:</span>
        <span className="font-semibold group-hover/link:underline">{projectName}</span>
        <svg
          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${color.primary}, transparent)` }}
      />
    </motion.div>
  );
}

export default function Services() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    { ...t.services.ai, icon: serviceIcons[0], color: serviceColors[0], href: serviceLinks[0], projectName: projectNames[0] },
    { ...t.services.accessibility, icon: serviceIcons[1], color: serviceColors[1], href: serviceLinks[1], projectName: projectNames[1] },
    { ...t.services.mobile, icon: serviceIcons[2], color: serviceColors[2], href: serviceLinks[2], projectName: projectNames[2] },
    { ...t.services.software, icon: serviceIcons[3], color: serviceColors[3], href: serviceLinks[3], projectName: projectNames[3] },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32" ref={sectionRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.services.title}
          </h2>
          <p className="text-text-secondary text-lg">{t.services.subtitle}</p>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              index={i}
              inView={inView}
              href={service.href}
              projectName={service.projectName}
              viewLabel={t.services.viewProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
