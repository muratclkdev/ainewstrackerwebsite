"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lang } from '../../types';

interface CookieConsentProps {
  lang: Lang;
}

export const CookieConsent = ({ lang }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const content = {
    tr: {
      title: "🍪 Çerez ve İzleme Bildirimi",
      description: "Bu web sitesi, deneyiminizi geliştirmek ve site trafiğini analiz etmek için Yandex Metrica kullanmaktadır. Siteyi kullanmaya devam ederek çerezlerin kullanımını kabul etmiş olursunuz.",
      accept: "Anladım"
    },
    en: {
      title: "🍪 Cookie and Tracking Notice",
      description: "This website uses Yandex Metrica to enhance your experience and analyze site traffic. By continuing to use the site, you agree to the use of cookies.",
      accept: "I understand"
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-800 z-50"
    >
      <h3 className="text-lg font-semibold mb-2 text-white">
        {content[lang].title}
      </h3>
      <p className="text-gray-300 mb-4 text-sm">
        {content[lang].description}
      </p>
      <button
        onClick={handleAccept}
        className="w-full md:w-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
      >
        {content[lang].accept}
      </button>
    </motion.div>
  );
};

export default CookieConsent; 