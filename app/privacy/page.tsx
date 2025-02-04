"use client";

import { useState } from 'react';
import type { Lang, Theme } from '../types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const texts = {
  tr: {
    title: "Gizlilik Politikası",
    content: [
      "Bu gizlilik politikası...",
      // diğer içerikler
    ]
  },
  en: {
    title: "Privacy Policy",
    content: [
      "This privacy policy...",
      // diğer içerikler
    ]
  }
};

export default function Privacy() {
  const [lang, setLang] = useState<Lang>('tr');
  const [theme, setTheme] = useState<Theme>('dark');

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header
        lang={lang}
        theme={theme}
        onThemeChange={setTheme}
        onLanguageChange={setLang}
      />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          {texts[lang].title}
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          {texts[lang].content.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-600 dark:text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
} 