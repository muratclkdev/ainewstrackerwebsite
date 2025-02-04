"use client";

import { useState } from 'react';
import type { Lang, Theme } from './types';
import Header from './components/Header/Header';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import NewsSection from './components/NewsSection/NewsSection';
import AboutSection from './components/AboutSection/AboutSection';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

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
  const [lang, setLang] = useState<Lang>('tr');
  const [theme, setTheme] = useState<Theme>('dark');

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header
        lang={lang}
        theme={theme}
        onThemeChange={setTheme}
        onLanguageChange={setLang}
      />
      <CountdownTimer lang={lang} />
      <NewsSection lang={lang} />
      <AboutSection lang={lang} />
      <Team lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
