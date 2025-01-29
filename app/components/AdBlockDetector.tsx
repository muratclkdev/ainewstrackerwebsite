"use client";

import { useEffect, useState } from 'react';

interface AdBlockDetectorProps {
  lang?: string;
}

const AdBlockDetector: React.FC<AdBlockDetectorProps> = ({ lang = 'tr' }) => {
  const [isAdBlockEnabled, setIsAdBlockEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const detectAdBlock = async () => {
      try {
        const testAd = document.createElement('div');
        testAd.innerHTML = '&nbsp;';
        testAd.className = 'adsbox';
        document.body.appendChild(testAd);
        
        window.setTimeout(() => {
          if (testAd.offsetHeight === 0) {
            setIsAdBlockEnabled(true);
          }
          testAd.remove();
        }, 100);
      } catch (error) {
        setIsAdBlockEnabled(true);
      }
    };

    detectAdBlock();
  }, []);

  if (!isAdBlockEnabled || !isVisible) return null;

  const content = {
    tr: {
      title: "Reklam Engelleyici Tespit Edildi",
      message: "Sitemizi ücretsiz tutabilmek için reklamları devre dışı bırakmanızı rica ediyoruz.",
      close: "Kapat"
    },
    en: {
      title: "Ad Blocker Detected",
      message: "Please consider disabling your ad blocker to help us keep this site free.",
      close: "Close"
    }
  };

  const { title, message, close } = content[lang as keyof typeof content] || content.en;

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded shadow-lg max-w-md">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-yellow-700 hover:text-yellow-900"
        aria-label={close}
      >
        ✕
      </button>
      <p className="font-bold pr-6">{title}</p>
      <p className="text-sm mt-2">{message}</p>
    </div>
  );
};

export default AdBlockDetector; 