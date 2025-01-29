"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lang } from '../../types';

interface CookieConsentProps {
  lang: Lang;
}

export const CookieConsent = ({ lang }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTelegramLink, setShowTelegramLink] = useState(false);
  const [telegramInviteLink, setTelegramInviteLink] = useState('');

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
      setShowTelegramLink(true);
    }
  }, []);




  if (!isVisible) return null;

  const content = {
    tr: {
      title: "Çerez Bildirimi",
      description: "Bu web sitesi, size daha iyi bir deneyim sunmak için çerezleri ve Yandex Metrica analiz araçlarını kullanmaktadır.",
      accept: "Anladım",
      telegramText: "Telegram kanalımıza katılmak için tıklayın",
      joinChannel: "Kanala Katıl",
      fallbackText: "Eğer kanala katılamadıysanız buraya tıklayın"
    },
    en: {
      title: "Cookie Notice",
      description: "This website uses cookies and Yandex Metrica analytics tools to provide you with a better experience.",
      accept: "I understand",
      telegramText: "Click to join our Telegram channel",
      joinChannel: "Join Channel",
      fallbackText: "If you couldn't join the channel, click here"
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900 shadow-lg z-50 p-4 md:p-6 border-t border-gray-800"
        >
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  {content[lang].title}
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  {content[lang].description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent; 