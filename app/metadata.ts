import type { Metadata } from "next";

const title = "AI News Tracker - Yapay Zeka Destekli Kripto Haber Takip Sistemi";
const description = "Yapay zeka destekli kripto para haberleri takip sistemi. Telegram üzerinden anlık kripto haber bildirimleri, piyasa analizleri ve özel içerikler.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | AI News Tracker`,
  },
  description,
  keywords: [
    "kripto haber",
    "yapay zeka",
    "kripto para",
    "bitcoin",
    "ethereum",
    "blockchain",
    "AI",
    "haber takip",
    "telegram",
    "anlık bildirim",
    "piyasa analizi",
    "kripto haber takibi",
    "crypto news tracker",
    "crypto news",
    "crypto market",
    "crypto analysis",
    "crypto alerts",
    "crypto notifications",
    "crypto news alerts",
    "kripto haberler",
    "kripto haber takip",
    "kripto haberleri",
    "kripto haberleri takip",
    "kripto haberleri bildirimleri",
    "kripto haberleri analizi",
    "kripto haberleri uyarıları"
    
  ],
  authors: [{ name: "AI News Tracker" }],
  creator: "AI News Tracker",
  publisher: "AI News Tracker",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://ainewstracker.xyz",
    title,
    description,
    siteName: "AI News Tracker",
    images: [
      {
        url: "/images/og-image.jpg", // Eğer varsa
        width: 1200,
        height: 630,
        alt: "AI News Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/twitter-image.jpg"], // Eğer varsa
    creator: "@ainewstracker", // Twitter hesabınız varsa
  },
  alternates: {
    canonical: "https://ainewstracker.xyz",
    languages: {
      "tr-TR": "https://ainewstracker.xyz",
      "en-US": "https://ainewstracker.xyz",
    },
  },
  metadataBase: new URL("https://ainewstracker.xyz"),
  verification: {
    google: "ca-pub-2763920619272344",
  },
}; 