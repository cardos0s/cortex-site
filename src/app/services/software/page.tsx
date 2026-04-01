"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import ServicePage from "@/components/ServicePage";

export default function SoftwarePage() {
  return (
    <LanguageProvider>
      <ServicePage
        serviceKey="software"
        accentColor="#34d399"
        accentGlow="rgba(52,211,153,0.3)"
        icon="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </LanguageProvider>
  );
}
