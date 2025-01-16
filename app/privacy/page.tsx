"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type Lang = 'tr' | 'en';

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

  const content = {
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
      backToHome: "Ana Sayfaya Dön"
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
      backToHome: "Back to Home"
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gradient">
            AI News Tracker
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
      </header>

      <div className="pt-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container mx-auto px-4 py-12"
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              {content[lang].title}
            </h1>
            <p className="text-gray-400 mb-8">{content[lang].lastUpdated}</p>

            <div className="space-y-8">
              {content[lang].sections.map((section, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700"
                >
                  <h2 className="text-xl font-semibold mb-4 text-blue-400">{section.title}</h2>
                  <p className="text-gray-300">{section.content}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={fadeInUp}
              className="mt-12 text-center"
            >
              <Link 
                href="/"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {content[lang].backToHome}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 