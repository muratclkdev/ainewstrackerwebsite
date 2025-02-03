"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      title: "Çerez Bildirimi",
      description: "Bu web sitesi, size daha iyi bir deneyim sunmak için çerezleri ve Yandex Metrica analiz araçlarını kullanmaktadır.",
      accept: "Anladım",
    },
    en: {
      title: "Cookie Notice",
      description: "This website uses cookies and Yandex Metrica analytics tools to provide you with a better experience.",
      accept: "I Understand",
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg z-50 p-4 md:p-6 border-t border-gray-700"
        >
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-white mb-2">
                  {content[lang].title}
                </h2>
                <p className="text-sm text-gray-300">
                  {content[lang].description}
                </p>
              </div>
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAccept}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {content[lang].accept}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;