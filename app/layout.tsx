import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import YandexMetrica from "./components/analytics/YandexMetrica";

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
        <YandexMetrica />
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
