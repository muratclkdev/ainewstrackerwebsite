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

  const handleAccept = async () => {
    localStorage.setItem('cookieConsent', 'true');
    try {
      const response = await fetch('/api/telegram-invite');
      const data = await response.json();
      if (data.success) {
        setTelegramInviteLink(data.inviteLink || 'https://t.me/ainewstracker');
      }
    } catch (error) {
      console.error('Error:', error);
      setTelegramInviteLink('https://t.me/ainewstracker');
    }
    setIsVisible(false);
  };

  const handleTelegramClick = () => {
    const url = telegramInviteLink || 'https://t.me/ainewstracker';
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
    setIsVisible(false);
  };

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
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleAccept}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                >
                  {content[lang].accept}
                </button>
                {showTelegramLink && (
                  <div className="flex flex-col items-center gap-2">
                    <button
                      onClick={handleTelegramClick}
                      className="text-sm text-blue-400 hover:text-blue-300 underline cursor-pointer"
                    >
                      {content[lang].fallbackText}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent; 