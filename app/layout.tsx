import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Francisca Alemão — Communication Designer",
    template: "%s — Francisca Alemão",
  },
  description:
    "Portfolio of Francisca Alemão, Communication Designer based in Porto. Specialising in graphic design, editorial, and data visualisation.",
  keywords: [
    "communication designer",
    "graphic design",
    "editorial",
    "data visualisation",
    "Porto",
    "Portugal",
    "portfolio",
  ],
  authors: [{ name: "Francisca Alemão", url: "https://www.franciscaalemao.pt" }],
  creator: "Francisca Alemão",
  metadataBase: new URL("https://www.franciscaalemao.pt"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://www.franciscaalemao.pt",
    siteName: "Francisca Alemão",
    title: "Francisca Alemão — Communication Designer",
    description:
      "Portfolio of Francisca Alemão, Communication Designer based in Porto. Specialising in graphic design, editorial, and data visualisation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisca Alemão — Communication Designer",
    description:
      "Portfolio of Francisca Alemão, Communication Designer based in Porto.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={inter.variable}>
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
