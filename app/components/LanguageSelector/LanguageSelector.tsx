"use client";

import type { Lang } from '../../types';

interface LanguageSelectorProps {
  lang: Lang;
  onLanguageChange: (lang: Lang) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ lang, onLanguageChange }) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => onLanguageChange('tr')}
        className={`px-4 py-2 rounded-full ${lang === 'tr' ? 'active' : ''}`}
      >
        TR
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-4 py-2 rounded-full ${lang === 'en' ? 'active' : ''}`}
      >
        EN
      </button>
    </div>
  );
}; 