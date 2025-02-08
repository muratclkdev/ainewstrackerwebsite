"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
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
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const effectiveTheme = (mounted ? (resolvedTheme || "dark") : "dark") as Theme;

  return (
    <header className={`navbar ${effectiveTheme === 'dark' ? 'text-white' : 'text-black'}`} data-theme={effectiveTheme}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src={effectiveTheme === 'light' ? "/images/logo-black.png" : "/images/logo-white.png"}
            alt="AI News Tracker Logo"
            width={70}
            height={70}
            className="navbar-logo"
            priority
          />
          <div className="hidden md:block text-lg font-bold">
            <TypewriterText />
          </div>
        </Link>
        <div className="flex gap-4">
          <ThemeSwitch
            theme={effectiveTheme}
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