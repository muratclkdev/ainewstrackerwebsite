"use client";

import type { Lang } from '../../types';

interface LanguageSelectorProps {
  lang: Lang;
  onLanguageChange: (lang: Lang) => void;
}

export function LanguageSelector({ lang, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onLanguageChange('tr')}
        className={`lang-button ${lang === 'tr' ? 'active' : ''}`}
        aria-label="Türkçe"
      >
        TR
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={`lang-button ${lang === 'en' ? 'active' : ''}`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
} 