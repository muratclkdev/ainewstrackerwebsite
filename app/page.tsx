"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { content } from './content';
import type { Lang, Theme, TelegramResponse } from './types';
import { CustomCursor } from './components/CustomCursor';
import { CountdownTimer } from './components/CountdownTimer/CountdownTimer';
import { Header } from './components/Header/Header';
import Hero from './components/home/Hero';
import { Features } from './components/Features/Features';
import { NewsSection } from './components/NewsSection/NewsSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { FeedbackSection } from './components/FeedbackSection/FeedbackSection';
import { Footer } from './components/Footer/Footer';
import Image from 'next/image';
import { Team } from './components/Team/Team';
import { YandexMetrica } from './components/analytics/YandexMetrica';
import { CookieConsent } from './components/analytics/CookieConsent';

declare global {
  interface Window {
    adsbygoogle: Record<string, any>[];
    ethereum: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      selectedAddress: string;
    };
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>('tr');
  const [theme, setTheme] = useState<Theme>('dark');
  const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);
  const [telegramInviteLink, setTelegramInviteLink] = useState<string>('');

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  const handleTelegramClick = async (): Promise<void> => {
    try {
      const response: Response = await fetch('/api/telegram-invite');
      const data: TelegramResponse = await response.json();
      
      if (data.success) {
        const telegramUrl = data.inviteLink || 'https://t.me/ainewstracker';
        setTelegramInviteLink(telegramUrl);
        
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location.href = telegramUrl;
        } else {
          window.open(telegramUrl, '_blank');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setTelegramInviteLink('https://t.me/ainewstracker');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <YandexMetrica />
      <CustomCursor />
      <CountdownTimer lang={lang} />
      <Header
        lang={lang}
        theme={theme}
        onThemeChange={setTheme}
        onLanguageChange={setLang}
      />
      <main className="pt-[176px]">
        <Hero 
          lang={lang} 
          handleTelegramClick={handleTelegramClick} 
          telegramInviteLink={telegramInviteLink}
          content={content} 
        />
        <Features lang={lang} />
        <Team lang={lang} />
        <NewsSection lang={lang} />
        <AboutSection lang={lang} />
        <FeedbackSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <CookieConsent lang={lang} />
    </div>
  );
}
