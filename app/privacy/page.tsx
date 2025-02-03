"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CustomCursor } from '../components/CustomCursor';
import { YandexMetrica } from '../components/analytics/YandexMetrica';
import { CookieConsent } from '../components/analytics/CookieConsent';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { CountdownTimer } from '../components/CountdownTimer/CountdownTimer';
import type { Lang } from "../types";

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
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleJoinClick = () => {
    // Feedback bölümüne yönlendirme
    const feedbackSection = document.getElementById("feedback");
    if (feedbackSection) {
      feedbackSection.scrollIntoView({ behavior: "smooth" });
    }
    // Popup modali göster
    setModalVisible(true);
  };

  const handleInvite = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/telegram/invite');
      const data = await res.json();
      if (data && data.inviteLink) {
        window.location.href = data.inviteLink;
      } else {
        alert("Bir hata oluştu. Lütfen tekrar deneyiniz.");
      }
    } catch (err) {
      console.error(err);
      alert("Bir hata oluştu. Lütfen tekrar deneyiniz.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-[#0f1117]'}`}>
      <YandexMetrica />
      <CustomCursor />
      <CountdownTimer lang={lang} theme={theme} />
      <Header 
        lang={lang} 
        theme={theme} 
        onThemeChange={(newTheme: Theme) => setTheme(newTheme)}
        onLanguageChange={(newLang: Lang) => setLang(newLang)}
      />
      
      {/* Main Content */}
      <main className="pt-[220px] container mx-auto px-4 pb-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto space-y-12"
        >
          <h1 className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text`}>
            {content[lang].title}
          </h1>

          {/* Privacy Sections */}
          {['dataCollection', 'dataUsage', 'security', 'cookies'].map((section) => (
            <motion.div 
              key={section} 
              className={`p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02] ${
                theme === 'light' 
                  ? 'bg-white shadow-lg hover:shadow-xl border border-gray-100' 
                  : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50'
              }`}
              whileHover={{ y: -5 }}
            >
              <h2 className={`text-2xl font-bold mb-6 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                {content[lang][section as keyof typeof content[typeof lang]]}
              </h2>
              <ul className="space-y-4">
                {(content[lang][`${section}Desc` as keyof typeof content[typeof lang]] as string[]).map((desc, index) => (
                  <li key={index} className={`
                    ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}
                    flex items-start gap-3
                  `}>
                    <span className="mt-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${theme === 'light' ? 'text-blue-500' : 'text-blue-400'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer lang={lang} />
      <CookieConsent lang={lang} />
    </div>
  );
} 