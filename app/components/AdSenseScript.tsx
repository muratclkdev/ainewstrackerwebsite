"use client";

import Script from 'next/script';

const AdSenseScript = () => {
  return (
    <>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.onload = function() {
              try {
                (adsbygoogle = window.adsbygoogle || []).push({});
              } catch (err) {
                console.log('AdBlock may be enabled');
              }
            }
          `
        }}
      />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2763920619272344"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        onError={() => {
          console.log('AdBlock may be enabled');
        }}
      />
    </>
  );
};

export default AdSenseScript; 