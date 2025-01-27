"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lang, Theme } from '../../types';
import { ThemeToggle } from '../shared/ThemeToggle';
import { LanguageSelector } from '../shared/LanguageSelector';

interface HeaderProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const TypewriterText = () => {
  const [text, setText] = useState('');
  const fullText = 'AI News Tracker';
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const period = 2000;
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, isDeleting]);

  const tick = () => {
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <span className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
      {text}
    </span>
  );
};

export const Header = ({ lang, setLang, theme, setTheme }: HeaderProps) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className="navbar fixed top-0 left-0 right-0 z-40 pt-16 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="AI News Tracker Logo"
                width={70}
                height={70}
                className="rounded-lg navbar-logo"
              />
            </Link>
            <div className="hidden md:block">
              <TypewriterText />
            </div>
          </div>

          <div className="flex gap-4">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <LanguageSelector lang={lang} setLang={setLang} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 