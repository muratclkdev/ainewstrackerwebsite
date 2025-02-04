"use client";

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from 'lucide-react';
import type { Lang, Theme } from '../../types';

interface ThemeSwitchProps {
  theme: Theme;
  lang: Lang;
  onThemeChange: (theme: Theme) => void;
}

const texts = {
  tr: {
    lightMode: "Aydınlık Mod",
    darkMode: "Karanlık Mod"
  },
  en: {
    lightMode: "Light Mode",
    darkMode: "Dark Mode"
  }
};

export default function ThemeSwitch({ theme, lang, onThemeChange }: ThemeSwitchProps) {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      title={theme === 'light' ? texts[lang].darkMode : texts[lang].lightMode}
    >
      {theme === 'light' ? (
        <MoonIcon className="w-5 h-5 text-gray-800" />
      ) : (
        <SunIcon className="w-5 h-5 text-gray-200" />
      )}
    </button>
  );
} 