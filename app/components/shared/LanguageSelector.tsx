"use client";

import { Lang } from '../../types';

interface LanguageSelectorProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const LanguageSelector = ({ lang, setLang }: LanguageSelectorProps) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setLang('tr')}
        className={`px-3 py-1 rounded-md transition-colors ${
          lang === 'tr'
            ? 'bg-blue-500 text-white'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        TR
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded-md transition-colors ${
          lang === 'en'
            ? 'bg-blue-500 text-white'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector; 