"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { content } from './content';
import type { Lang, Theme, TelegramResponse } from './types';
import { CustomCursor } from './components/CustomCursor';
import { CountdownTimer } from './components/CountdownTimer/CountdownTimer';
import { Header } from './components/Header/Header';
import Hero from './components/home/Hero';
import { Features } from './components/home/Features';
import { AllInOne } from './components/home/AllInOne';
import { NewsSection } from './components/NewsSection/NewsSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { Feedback } from './components/home/Feedback';
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

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  return (
    <div className="min-h-screen bg-black text-white" suppressHydrationWarning>
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
          content={content} 
        />
        <AllInOne lang={lang} content={content} />
        <Features lang={lang} content={content} />
        <Team lang={lang} />
        <NewsSection lang={lang} />
        <AboutSection lang={lang} />
        <Feedback 
          lang={lang} 
          content={{
            tr: {
              feedbackTitle: content.tr.feedback,
              feedbackSuccess: content.tr.feedbackSuccess,
              feedback: content.tr.feedback,
              feedbackDesc: content.tr.feedbackDesc,
              feedbackName: content.tr.feedbackName,
              feedbackEmail: content.tr.feedbackEmail,
              feedbackMessage: content.tr.feedbackMessage,
              feedbackSubmit: content.tr.feedbackSubmit,
            },
            en: {
              feedbackTitle: content.en.feedback,
              feedbackSuccess: content.en.feedbackSuccess,
              feedback: content.en.feedback,
              feedbackDesc: content.en.feedbackDesc,
              feedbackName: content.en.feedbackName,
              feedbackEmail: content.en.feedbackEmail,
              feedbackMessage: content.en.feedbackMessage,
              feedbackSubmit: content.en.feedbackSubmit,
            }
          }}
          showFeedbackMessage={showFeedbackMessage}
        />
      </main>
      <Footer lang={lang} />
      <CookieConsent lang={lang} />
    </div>
  );
}
