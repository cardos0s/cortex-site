"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import ServicePage from "@/components/ServicePage";

export default function MobilePage() {
  return (
    <LanguageProvider>
      <ServicePage
        serviceKey="mobile"
        accentColor="#f0abfc"
        accentGlow="rgba(240,171,252,0.3)"
        icon="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </LanguageProvider>
  );
}
