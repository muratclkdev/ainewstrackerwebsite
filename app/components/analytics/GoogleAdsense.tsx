"use client";

import Script from 'next/script';

export const GoogleAdsense = () => {
  return (
    <Script
      id="google-adsense"
      strategy="afterInteractive"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2763920619272344"
      crossOrigin="anonymous"
    />
  );
};

export default GoogleAdsense; 