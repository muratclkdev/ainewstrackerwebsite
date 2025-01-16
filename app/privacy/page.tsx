"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CustomCursor } from '../components/CustomCursor';
import { TypewriterText } from '../components/TypewriterText';

type Lang = 'tr' | 'en';

type ContentType = {
  [key in Lang]: {
    title: string;
    lastUpdated: string;
    sections: {
      title: string;
      content: string;
    }[];
    backToHome: string;
    alphaAccess: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
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

  const content: ContentType = {
    tr: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son Güncelleme: 16 Ocak 2024",
      sections: [
        {
          title: "Veri Toplama",
          content: "AI News Tracker olarak, kullanıcılarımızın gizliliğine önem veriyoruz. Platformumuzda sadece haber takibi için gerekli olan minimum düzeyde veri toplamaktayız."
        },
        {
          title: "Veri Kullanımı",
          content: "Toplanan veriler, haber özelleştirme ve platform iyileştirme amacıyla kullanılmaktadır. Verileriniz üçüncü taraflarla paylaşılmamaktadır."
        },
        {
          title: "Veri Güvenliği",
          content: "Kullanıcı verilerinin güvenliği için endüstri standardı güvenlik önlemleri uygulanmaktadır."
        },
        {
          title: "Çerezler",
          content: "Platform deneyimini iyileştirmek için çerezler kullanılmaktadır. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz."
        }
      ],
      backToHome: "Ana Sayfaya Dön",
      alphaAccess: "Alfa Sürümüne Katıl",
      days: "Gün",
      hours: "Saat",
      minutes: "Dakika",
      seconds: "Saniye"
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: January 16, 2024",
      sections: [
        {
          title: "Data Collection",
          content: "At AI News Tracker, we value our users' privacy. We collect only the minimum amount of data necessary for news tracking on our platform."
        },
        {
          title: "Data Usage",
          content: "Collected data is used for news customization and platform improvement purposes. Your data is not shared with third parties."
        },
        {
          title: "Data Security",
          content: "Industry-standard security measures are implemented to protect user data."
        },
        {
          title: "Cookies",
          content: "Cookies are used to improve the platform experience. You can manage your cookie preferences from your browser settings."
        }
      ],
      backToHome: "Back to Home",
      alphaAccess: "Join Alpha Version",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <CustomCursor />
      
      {/* Navbar */}
      <header className="fixed top-[88px] left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-4">
              <div className="relative w-[70px] h-[70px]">
                <Image
                  src="/images/logo.png"
                  alt="AI News Tracker Logo"
                  fill
                  className="object-contain filter invert brightness-0 invert"
                  sizes="70px"
                  priority
                />
              </div>
              <TypewriterText />
            </Link>
            <div className="flex gap-4">
              <button 
                onClick={() => setLang('tr')}
                className={`px-3 py-1 rounded-md transition-all ${lang === 'tr' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                TR
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-md transition-all ${lang === 'en' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Countdown Section - En üstte ve sabit */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900 to-purple-900 border-b border-gray-800"
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

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 space-y-8 pt-[220px]"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          {content[lang].title}
        </motion.h1>

        {content[lang].sections.map((section, index) => (
          <motion.section 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="privacy-card bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">{section.title}</h2>
            <p className="text-gray-300">{section.content}</p>
          </motion.section>
        ))}

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center pt-8"
        >
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
          >
            {content[lang].backToHome}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
} 