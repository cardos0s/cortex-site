"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Julia from "@/components/Julia";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Preloader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Julia />
        <div className="section-divider" />
        <Technologies />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
