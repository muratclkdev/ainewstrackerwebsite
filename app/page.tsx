"use client";

import { useState } from 'react';
import type { Lang, Theme } from './types';
import Header from './components/Header/Header';
import Hero from './components/home/Hero';
import AllInOne from './components/home/AllInOne';
import Features from './components/home/Features';
import AboutSection from './components/AboutSection/AboutSection';
import NewsSection from './components/NewsSection/NewsSection';
import FeedbackSection from './components/FeedbackSection/FeedbackSection';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import { CustomCursor } from './components/CustomCursor';
import PoweredBy from './components/home/PoweredBy';
import { CookieConsent } from './components/analytics/CookieConsent';

const texts = {
  tr: {
    title: "AI News Tracker",
    description: "Kripto para haberleri yapay zeka destekli takip sistemi",
    features: "Özellikler",
    about: "Hakkında",
    team: "Takım"
  },
  en: {
    title: "AI News Tracker",
    description: "AI-powered crypto news tracking system",
    features: "Features",
    about: "About",
    team: "Team"
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <main className="min-h-screen bg-background">
      <CustomCursor />
      <Header 
        lang={lang} 
        theme={theme}
        onThemeChange={setTheme}
        onLanguageChange={setLang}
      />

      {/* Ana İçerik Bölümü */}
      <div className="pt-[160px]">
        <Hero lang={lang} />
        <AllInOne lang={lang} />
        <Features lang={lang} />
        <Team lang={lang} />
        <AboutSection lang={lang} />
        <NewsSection lang={lang} />
        <PoweredBy lang={lang} />
        <FeedbackSection lang={lang} />
      </div>
      <Footer lang={lang} />
      <CookieConsent lang={lang} />
    </main>
  );
}
