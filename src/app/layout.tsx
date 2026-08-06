import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Igor Rian — Desenvolvedor Full Stack",
  description:
    "Portfólio de Igor Rian, desenvolvedor Full Stack com experiência em React, Next.js, TypeScript, Node.js e PostgreSQL.",
  keywords: [
    "full stack",
    "front-end",
    "desenvolvedor",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "portfólio",
  ],
  authors: [{ name: "Igor Rian" }],
  openGraph: {
    title: "Igor Rian — Desenvolvedor Full Stack",
    description:
      "Portfólio de Igor Rian, desenvolvedor Full Stack com experiência em React, Next.js, TypeScript, Node.js e PostgreSQL.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
