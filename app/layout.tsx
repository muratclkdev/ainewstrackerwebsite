import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import YandexMetrica from "./components/analytics/YandexMetrica";

import { Suspense } from "react";

export const metadata: Metadata = {
  title: "AI News Tracker",
  description: "AI News Tracker - Yapay Zeka Haberleri",
  metadataBase: new URL('https://ainewstracker.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: "ca-pub-2763920619272344",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-2763920619272344" />
        <Suspense fallback={null}>
          <YandexMetrica />
        </Suspense>
      </head>
      <body className="bg-background" suppressHydrationWarning={true}>
        <CountdownTimer lang="tr" />
        <Providers>
          {children}

        </Providers>
      </body>
    </html>
  );
}
