"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { content } from './content';
import type { Lang, Theme } from './types';
import { CustomCursor } from './components/CustomCursor';
import { CountdownTimer } from './components/CountdownTimer/CountdownTimer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { NewsSection } from './components/NewsSection/NewsSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { FeedbackSection } from './components/FeedbackSection/FeedbackSection';
import { Footer } from './components/Footer/Footer';
import Image from 'next/image';
import { Team } from './components/Team/Team';

declare global {
  interface Window {
    adsbygoogle: any[];
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

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <CountdownTimer lang={lang} />
      <Header
        lang={lang}
        theme={theme}
        onThemeChange={setTheme}
        onLanguageChange={setLang}
      />
      <main className="pt-[176px]">
        <Hero lang={lang} />
        <Features lang={lang} />
        <Team lang={lang} />
        <NewsSection lang={lang} />
        <AboutSection lang={lang} />
        <FeedbackSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
