"use client";

import Image from 'next/image';
import Link from 'next/link';
import { TypewriterText } from '../TypewriterText';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import type { Lang, Theme } from '../../types';

interface HeaderProps {
  lang: Lang;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  onLanguageChange: (lang: Lang) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  theme,
  onThemeChange,
  onLanguageChange
}) => {
  return (
    <header className="fixed top-[88px] left-0 right-0 z-40 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="AI News Tracker Logo"
            width={70}
            height={70}
            className="rounded-lg navbar-logo"
          />
          <div className="hidden md:block">
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
}; 