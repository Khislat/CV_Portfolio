import type { Metadata } from "next";
import { Outfit, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LanguageProviderWrapper from "@/components/LanguageProviderWrapper";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Senior Full-Stack Engineer | System Architect",
  description:
    "I don't just write code — I ship systems that scale. Multi-tenant ERP, AI/OCR, High-Availability infrastructure. Based in South Korea (E-7).",
  openGraph: {
    title: "Senior Full-Stack Engineer | System Architect",
    description: "Problem Solver who turns complex requirements into reliable, high-availability systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <LanguageProviderWrapper>
          <Navbar />
          {children}
        </LanguageProviderWrapper>
      </body>
    </html>
  );
}
