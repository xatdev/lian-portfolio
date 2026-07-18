import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const cormorantBody = Cormorant_Garamond({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const cormorantDisplay = Cormorant_Garamond({
  variable: "--font-display",
  weight: ["500", "600", "700"],
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
    <html
      lang="en"
      className={`${cormorantBody.variable} ${cormorantDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-sand">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
