import "./globals.css";
import { Providers } from "./providers";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import YandexMetrica from "./components/analytics/YandexMetrica";
import { Suspense } from "react";
import { metadata } from "./metadata";

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-2763920619272344" />
        <Suspense fallback={null}>
          <YandexMetrica />
        </Suspense>
      </head>
      <body className="bg-background" suppressHydrationWarning={true}>
        <CountdownTimer lang="en" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
