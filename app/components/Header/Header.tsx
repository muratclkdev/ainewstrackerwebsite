"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypewriterText } from '../TypewriterText';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import type { Lang, Theme } from '../../types';

interface HeaderProps {
  lang: Lang;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  onLanguageChange: (lang: Lang) => void;
}

const texts = {
  tr: {
    title: "AI News Tracker",
    description: "Kripto para haberleri yapay zeka destekli takip sistemi",
    github: "GitHub'da İncele",
    telegram: "Telegram",
    lightMode: "Aydınlık Mod",
    darkMode: "Karanlık Mod"
  },
  en: {
    title: "AI News Tracker",
    description: "AI-powered crypto news tracking system",
    github: "View on GitHub",
    telegram: "Telegram",
    lightMode: "Light Mode",
    darkMode: "Dark Mode"
  }
};

export default function Header({ lang, theme, onThemeChange, onLanguageChange }: HeaderProps) {
  return (
    <header className="navbar">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="AI News Tracker Logo"
            width={70}
            height={70}
            className={`navbar-logo ${
              theme === 'dark'
                ? 'filter brightness-0 invert'
                : 'filter brightness-0 contrast-200'
            }`}
          />
          <div className="hidden md:block text-lg font-bold text-text">
            <TypewriterText />
          </div>
        </Link>
        <div className="flex gap-4">
          <ThemeSwitch
            theme={theme}
            lang={lang}
            onThemeChange={onThemeChange}
          />
          <LanguageSelector
            lang={lang}
            onLanguageChange={onLanguageChange}
          />
        </div>
      </div>
    </header>
  );
} 