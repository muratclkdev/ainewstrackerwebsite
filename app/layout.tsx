import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Providers } from "./providers";
import AdSenseScript from "./components/AdSenseScript";
import AdBlockDetector from "./components/AdBlockDetector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI News Tracker",
  description: "AI News Tracker - Yapay Zeka Haberleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <AdSenseScript />
        <Script
          async
          src="https://fundingchoicesmessages.google.com/i/pub-2763920619272344?ers=1"
          nonce="your_nonce_value"
          strategy="afterInteractive"
        />
        <Script id="consent-management" strategy="afterInteractive">
          {`
            (function() {
              function signalGooglefcPresent() {
                if (!window.frames['googlefcPresent']) {
                  if (document.body) {
                    const iframe = document.createElement('iframe');
                    iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
                    iframe.style.display = 'none';
                    iframe.name = 'googlefcPresent';
                    document.body.appendChild(iframe);
                  } else {
                    setTimeout(signalGooglefcPresent, 0);
                  }
                }
              }
              signalGooglefcPresent();
            })();
          `}
        </Script>
      </head>
      <body className={`${inter.className} transition-colors duration-300`} suppressHydrationWarning>
        <Providers>
          {children}
          <AdBlockDetector lang="tr" />
        </Providers>
      </body>
    </html>
  );
}
