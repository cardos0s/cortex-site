"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import ServicePage from "@/components/ServicePage";

export default function AccessibilityPage() {
  return (
    <LanguageProvider>
      <ServicePage
        serviceKey="accessibility"
        accentColor="#8b5cf6"
        accentGlow="rgba(139,92,246,0.3)"
        icon="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a1 1 0 100-2 1 1 0 000 2zm-2 7l1.5-5h1l1.5 5m-5-3h6"
      />
    </LanguageProvider>
  );
}
