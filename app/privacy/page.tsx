"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CustomCursor } from '../components/CustomCursor';
import { TypewriterText } from '../components/TypewriterText';

type Lang = 'tr' | 'en';
type Theme = 'light' | 'dark';

type ContentType = {
  [key in Lang]: {
    title: string;
    dataCollection: string;
    dataCollectionDesc: string[];
    dataUsage: string;
    dataUsageDesc: string[];
    security: string;
    securityDesc: string[];
    cookies: string;
    cookiesDesc: string[];
    alphaAccess: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    lightMode: string;
    darkMode: string;
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Privacy() {
  const [lang, setLang] = useState<Lang>('tr');
  const [theme, setTheme] = useState<Theme>('dark');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // 14 Şubat 2025 23:59:59
    const targetDate = new Date('2025-02-14T23:59:59');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  const content: ContentType = {
    tr: {
      title: "Gizlilik Politikası",
      dataCollection: "Veri Toplama",
      dataCollectionDesc: [
        "Kullanıcılarımızın gizliliği bizim için önemlidir.",
        "Sadece gerekli olan minimum bilgiyi toplarız.",
        "Toplanan veriler güvenli bir şekilde saklanır."
      ],
      dataUsage: "Veri Kullanımı",
      dataUsageDesc: [
        "Verileriniz sadece hizmet kalitesini artırmak için kullanılır.",
        "Üçüncü taraflarla paylaşılmaz.",
        "İstatistiksel analizler için anonim olarak kullanılabilir."
      ],
      security: "Güvenlik",
      securityDesc: [
        "En son güvenlik protokolleri kullanılır.",
        "Düzenli güvenlik kontrolleri yapılır.",
        "Verileriniz şifrelenerek saklanır."
      ],
      cookies: "Çerezler",
      cookiesDesc: [
        "Daha iyi bir deneyim için çerezler kullanılır.",
        "Çerezler tarayıcınızdan devre dışı bırakılabilir.",
        "Zorunlu olmayan çerezler için izniniz alınır."
      ],
      alphaAccess: "Alfa Sürümüne Katıl",
      days: "Gün",
      hours: "Saat",
      minutes: "Dakika",
      seconds: "Saniye",
      lightMode: "Gündüz Modu",
      darkMode: "Gece Modu"
    },
    en: {
      title: "Privacy Policy",
      dataCollection: "Data Collection",
      dataCollectionDesc: [
        "We value our users' privacy.",
        "We collect only the minimum required information.",
        "Collected data is stored securely."
      ],
      dataUsage: "Data Usage",
      dataUsageDesc: [
        "Your data is used only to improve service quality.",
        "Not shared with third parties.",
        "May be used anonymously for statistical analysis."
      ],
      security: "Security",
      securityDesc: [
        "Latest security protocols are used.",
        "Regular security checks are performed.",
        "Your data is stored encrypted."
      ],
      cookies: "Cookies",
      cookiesDesc: [
        "Cookies are used for a better experience.",
        "Cookies can be disabled from your browser.",
        "Your consent is obtained for non-essential cookies."
      ],
      alphaAccess: "Join Alpha Version",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      lightMode: "Light Mode",
      darkMode: "Dark Mode"
    }
  };

  return (
    <main className={`min-h-screen ${theme === 'light' ? 'light-theme' : ''}`}>
      <CustomCursor />
      {/* Countdown Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="fixed top-0 left-0 right-0 z-50 countdown-section border-b border-gray-800"
      >
        <div className="container mx-auto px-4 py-2">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2 text-white">
              {content[lang].alphaAccess}
            </h3>
            <div className="flex justify-center items-center gap-6">
              <div className="text-center">
                <span className="text-2xl font-bold text-white">{timeLeft.days}</span>
                <p className="text-xs text-gray-200">{content[lang].days}</p>
              </div>
              <div className="text-xl font-bold text-gray-300">:</div>
              <div className="text-center">
                <span className="text-2xl font-bold text-white">{timeLeft.hours}</span>
                <p className="text-xs text-gray-200">{content[lang].hours}</p>
              </div>
              <div className="text-xl font-bold text-gray-300">:</div>
              <div className="text-center">
                <span className="text-2xl font-bold text-white">{timeLeft.minutes}</span>
                <p className="text-xs text-gray-200">{content[lang].minutes}</p>
              </div>
              <div className="text-xl font-bold text-gray-300">:</div>
              <div className="text-center">
                <span className="text-2xl font-bold text-white">{timeLeft.seconds}</span>
                <p className="text-xs text-gray-200">{content[lang].seconds}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Header */}
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
            {/* Theme Switch */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="theme-switch"
              data-theme={theme}
              aria-label={content[lang][theme === 'dark' ? 'lightMode' : 'darkMode']}
            >
              <div className="theme-icons">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div className="switch-handle">
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="switch-icon">
                    <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="switch-icon">
                    <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                )}
              </div>
            </button>
            {/* Language Buttons */}
            <button
              onClick={() => setLang('tr')}
              className={`px-4 py-2 rounded-full ${lang === 'tr' ? 'active' : ''}`}
            >
              TR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 rounded-full ${lang === 'en' ? 'active' : ''}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-[176px]">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12 text-center">{content[lang].title}</h1>
            
            {/* Data Collection */}
            <motion.div variants={fadeInUp} className="mb-12 about-card p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">{content[lang].dataCollection}</h2>
              {content[lang].dataCollectionDesc.map((desc, index) => (
                <p key={index} className="mb-2">{desc}</p>
              ))}
            </motion.div>

            {/* Data Usage */}
            <motion.div variants={fadeInUp} className="mb-12 about-card p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">{content[lang].dataUsage}</h2>
              {content[lang].dataUsageDesc.map((desc, index) => (
                <p key={index} className="mb-2">{desc}</p>
              ))}
            </motion.div>

            {/* Security */}
            <motion.div variants={fadeInUp} className="mb-12 about-card p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">{content[lang].security}</h2>
              {content[lang].securityDesc.map((desc, index) => (
                <p key={index} className="mb-2">{desc}</p>
              ))}
            </motion.div>

            {/* Cookies */}
            <motion.div variants={fadeInUp} className="mb-12 about-card p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">{content[lang].cookies}</h2>
              {content[lang].cookiesDesc.map((desc, index) => (
                <p key={index} className="mb-2">{desc}</p>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 