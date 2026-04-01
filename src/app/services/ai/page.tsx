"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import ServicePage from "@/components/ServicePage";

export default function AIPage() {
  return (
    <LanguageProvider>
      <ServicePage
        serviceKey="ai"
        accentColor="#8b5cf6"
        accentGlow="rgba(139,92,246,0.3)"
        icon="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </LanguageProvider>
  );
}
