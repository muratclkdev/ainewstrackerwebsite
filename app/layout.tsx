import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import YandexMetrica from "./components/analytics/YandexMetrica";
import GoogleAdsense from "./components/analytics/GoogleAdsense";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "AI News Tracker",
  description: "AI News Tracker - Yapay Zeka Haberleri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <Suspense fallback={null}>
          <YandexMetrica />
          <GoogleAdsense />
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
