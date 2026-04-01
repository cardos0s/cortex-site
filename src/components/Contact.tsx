"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t, lang } = useLanguage();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mqeglozl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `[CÓRTEX] Novo contato de ${formState.name}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const successMsg = lang === "pt" ? "Mensagem enviada com sucesso! Entraremos em contato em breve." : "Message sent successfully! We'll get back to you soon.";
  const errorMsg = lang === "pt" ? "Erro ao enviar. Tente novamente." : "Failed to send. Please try again.";

  return (
    <section id="contact" className="relative py-24 md:py-32" ref={sectionRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_50%)]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.contact.title}
          </h2>
          <p className="text-text-secondary text-lg">{t.contact.subtitle}</p>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </motion.div>

        {/* Success/Error messages */}
        {status === "success" && (
          <motion.div
            className="mb-8 p-4 rounded-xl border border-green-500/30 bg-green-500/10 text-green-400 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {successMsg}
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            className="mb-8 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errorMsg}
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          onSubmit={handleSubmit}
        >
          {(["name", "email", "message"] as const).map((field, i) => (
            <motion.div
              key={field}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            >
              <label className="block text-sm text-text-secondary mb-2 font-mono">
                {t.contact[field]}
              </label>
              {field === "message" ? (
                <textarea
                  rows={5}
                  required
                  className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all duration-300 resize-none ${
                    focused === field
                      ? "border-cyan/50 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                      : "border-glass-border"
                  }`}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  onFocus={() => setFocused(field)}
                  onBlur={() => setFocused(null)}
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  required
                  className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all duration-300 ${
                    focused === field
                      ? "border-cyan/50 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                      : "border-glass-border"
                  }`}
                  value={formState[field]}
                  onChange={(e) =>
                    setFormState({ ...formState, [field]: e.target.value })
                  }
                  onFocus={() => setFocused(field)}
                  onBlur={() => setFocused(null)}
                />
              )}

              {/* Animated bottom line */}
              <div
                className={`absolute bottom-0 left-1/2 h-[2px] bg-cyan transition-all duration-500 rounded-full ${
                  focused === field
                    ? "w-full -translate-x-1/2"
                    : "w-0 -translate-x-1/2"
                }`}
              />
            </motion.div>
          ))}

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={status === "sending"}
            className={`group relative w-full py-4 rounded-xl border border-cyan/50 text-cyan font-semibold text-lg overflow-hidden transition-all duration-500 hover:bg-cyan/10 ${
              status === "sending" ? "opacity-60 cursor-not-allowed" : ""
            }`}
            whileHover={status !== "sending" ? { scale: 1.01 } : {}}
            whileTap={status !== "sending" ? { scale: 0.99 } : {}}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <span className="relative z-10">
              {status === "sending" ? t.contact.sending : t.contact.send}
            </span>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Border glow on hover */}
            <div className="absolute inset-0 neon-border rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
