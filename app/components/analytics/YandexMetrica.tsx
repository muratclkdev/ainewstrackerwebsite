"use client";

import Script from 'next/script';

export const YandexMetrica = () => {
  const metricaId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;

  if (!metricaId) {
    console.warn('Yandex Metrica ID is not defined');
    return null;
  }

  return (
    <>
      <Script 
        id="yandex-metrica" 
        strategy="afterInteractive"
        crossOrigin="anonymous"
      >
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,k.crossOrigin="anonymous",a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(${metricaId}, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });
        `}
      </Script>
      <noscript>
        <div>
          <img 
            src={`https://mc.yandex.ru/watch/${metricaId}`} 
            style={{ position: 'absolute', left: '-9999px' }} 
            alt=""
            crossOrigin="anonymous"
          />
        </div>
      </noscript>
    </>
  );
};

export default YandexMetrica; 