import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CORTEX | IA, Acessibilidade, Mobile & Software",
  description:
    "CÓRTEX — Transformando ideias em soluções digitais inteligentes. Especialista em Inteligência Artificial, Acessibilidade, Desenvolvimento Mobile e Software.",
  keywords: [
    "CORTEX",
    "IA",
    "Inteligência Artificial",
    "Acessibilidade",
    "Mobile",
    "Software",
    "Júlia Cardoso",
    "Tecnologia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-bg-primary text-foreground cursor-none md:cursor-none">
        {children}
      </body>
    </html>
  );
}
