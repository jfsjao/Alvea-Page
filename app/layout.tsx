import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ALVEA | Velas aromáticas artesanais premium",
  description:
    "Velas aromáticas de cera de abelha, feitas à mão e totalmente personalizadas para elevar momentos, presentear com elegância e criar atmosferas únicas.",
  applicationName: "ALVEA",
  icons: {
    icon: "/alvea-icone.ico",
    shortcut: "/alvea-icone.ico",
    apple: "/alvea-icone.ico",
  },
  keywords: [
    "velas aromáticas",
    "cera de abelha",
    "velas personalizadas",
    "velas artesanais",
    "presentes premium",
    "eventos",
    "ALVEA",
  ],
};

export const viewport: Viewport = {
  themeColor: "#f7efe6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-[#f7efe6] text-[#2d2418] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
