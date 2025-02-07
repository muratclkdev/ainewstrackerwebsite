import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI News Tracker",
  description: "AI News Tracker - Yapay Zeka Haberleri ve Güncel Gelişmeler",
  keywords: "yapay zeka, AI, yapay zeka haberleri, AI news, teknoloji haberleri",
  authors: [{ name: "AI News Tracker Team" }],
  creator: "AI News Tracker",
  publisher: "AI News Tracker",
  robots: "index, follow",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://ainewstracker.com",
    title: "AI News Tracker",
    description: "Yapay Zeka Dünyasından En Güncel Haberler ve Gelişmeler",
    siteName: "AI News Tracker",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI News Tracker",
    description: "Yapay Zeka Dünyasından En Güncel Haberler ve Gelişmeler",
    creator: "@ainewstracker",
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console doğrulama kodu
  },
  alternates: {
    canonical: "https://ainewstracker.com",
    languages: {
      "tr-TR": "https://ainewstracker.com",
      "en-US": "https://ainewstracker.com/en",
    },
  },
}; 