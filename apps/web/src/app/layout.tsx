import type { Metadata } from "next";
import { Cairo, Sora } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مصنع المحيط للأسماك | Ocean Fisheries",
  description: "Ocean Fisheries Factory website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${sora.variable}`}>
      <body className="ar">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
