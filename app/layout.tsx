import "./globals.css";
import { Providers } from "./providers";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import YandexMetrica from "./components/analytics/YandexMetrica";
import Script from "next/script";
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
        
        {/* Twitter Pixel */}
        <Script id="twitter-pixel" strategy="afterInteractive">
          {`
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','p5rrf');
          `}
        </Script>
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
