"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-glass-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-lg font-bold tracking-wider gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            CÓRTEX
          </motion.a>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <a href="#about" className="hover:text-cyan transition-colors">
              {t.nav.about}
            </a>
            <a href="#services" className="hover:text-cyan transition-colors">
              {t.nav.services}
            </a>
            <a href="#julia" className="hover:text-cyan transition-colors">
              {t.nav.julia}
            </a>
            <a href="#contact" className="hover:text-cyan transition-colors">
              {t.nav.contact}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} CÓRTEX. {t.footer.rights}
          </p>
        </div>

        {/* Made with love */}
        <div className="text-center mt-6 text-text-secondary text-xs">
          {t.footer.madeWith}{" "}
          <motion.span
            className="inline-block text-pink"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            &#9829;
          </motion.span>{" "}
          {t.footer.by}
        </div>
      </div>
    </footer>
  );
}
