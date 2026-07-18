import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const archivoBlack = Archivo_Black({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lian | Product Design Portfolio",
  description:
    "Portfolio of Lian, a B.Des Product Design student building thoughtful, human-centered products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivoBlack.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ink text-sand">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
