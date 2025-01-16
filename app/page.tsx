"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type Lang = 'tr' | 'en';

type ContentType = {
  [key in Lang]: {
    title: string;
    description: string;
    github: string;
    features: string;
    gptTitle: string;
    gptDesc: string;
    realTimeTitle: string;
    realTimeDesc: string;
    customTitle: string;
    customDesc: string;
    team: string;
    role: string;
    rights: string;
    privacy: string;
    about: string;
    newsSources: string;
    newsSourcesDesc: string;
    poweredBy: string;
    poweredByDesc: string;
    aboutContent: string[];
  }
};

// Animasyon varyantlarını tanımlayalım
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>('tr');

  const content: ContentType = {
    tr: {
      title: "AI News Tracker",
      description: "Yapay zeka destekli haber takip ve analiz platformu",
      github: "GitHub'da İncele",
      features: "Özellikler",
      gptTitle: "GPT Entegrasyonu",
      gptDesc: "Yapay zeka destekli akıllı haber analizi ve özetleme",
      realTimeTitle: "Gerçek Zamanlı Takip",
      realTimeDesc: "Anlık haber güncellemeleri ve bildirimler",
      customTitle: "Kişiselleştirme",
      customDesc: "İlgi alanlarınıza göre özelleştirilebilir haber akışı",
      team: "Takımımız",
      role: "Kurucu & Geliştirici",
      rights: "© 2025 AI News Tracker. Tüm hakları saklıdır.",
      privacy: "Gizlilik Politikası",
      about: "Hakkımızda",
      newsSources: "Haber Kaynakları",
      newsSourcesDesc: "Güvenilir kaynaklardan anlık kripto haberleri",
      poweredBy: "ChatGPT ile Güçlendirilmiştir",
      poweredByDesc: "OpenAI'nin ChatGPT teknolojisi ile haberleri analiz eder ve özetleriz",
      aboutContent: [
        "AI News Tracker, kripto para dünyasındaki en güncel haberleri yapay zeka teknolojisi ile analiz eden ve kullanıcılarına sunan yenilikçi bir platformdur. OpenAI'nin ChatGPT teknolojisini kullanarak, karmaşık kripto haberlerini anlaşılır ve özlü bir şekilde özetler.",
        "Platformumuz, güvenilir haber kaynaklarından gelen bilgileri gerçek zamanlı olarak takip eder ve yapay zeka destekli analiz sistemi sayesinde, kullanıcılarına değerli içgörüler sunar. Kişiselleştirilebilir haber akışı özelliği ile kullanıcılar, ilgi alanlarına göre haberleri filtreleyebilir ve önemli gelişmeleri kaçırmadan takip edebilir.",
        "Misyonumuz, kripto para ekosistemindeki gelişmeleri herkes için anlaşılır kılmak ve yatırımcıların daha bilinçli kararlar almasına yardımcı olmaktır. Sürekli gelişen teknolojimiz ve kullanıcı odaklı yaklaşımımız ile kripto haber takibini daha akıllı ve etkili hale getiriyoruz."
      ]
    },
    en: {
      title: "AI News Tracker",
      description: "AI-powered news tracking and analysis platform",
      github: "View on GitHub",
      features: "Features",
      gptTitle: "GPT Integration",
      gptDesc: "AI-powered smart news analysis and summarization",
      realTimeTitle: "Real-Time Tracking",
      realTimeDesc: "Instant news updates and notifications",
      customTitle: "Customization",
      customDesc: "Customizable news feed based on your interests",
      team: "Our Team",
      role: "Founder & Developer",
      rights: "© 2025 AI News Tracker. All rights reserved.",
      privacy: "Privacy Policy",
      about: "About",
      newsSources: "News Sources",
      newsSourcesDesc: "Real-time crypto news from trusted sources",
      poweredBy: "Powered by ChatGPT",
      poweredByDesc: "We analyze and summarize news using OpenAI's ChatGPT technology",
      aboutContent: [
        "AI News Tracker is an innovative platform that analyzes and presents the latest news in the cryptocurrency world using artificial intelligence technology. Using OpenAI's ChatGPT technology, it summarizes complex crypto news in a clear and concise way.",
        "Our platform monitors information from reliable news sources in real-time and provides valuable insights to users through its AI-powered analysis system. With customizable news feed feature, users can filter news according to their interests and follow important developments without missing out.",
        "Our mission is to make developments in the cryptocurrency ecosystem understandable for everyone and help investors make more informed decisions. With our continuously evolving technology and user-focused approach, we make crypto news tracking smarter and more effective."
      ]
    }
  };

  const newsSources = [
    { 
      name: 'Coindesk', 
      logo: 'https://www.coindesk.com/_next/image?url=https%3A%2F%2Fcoindesk-next-370iju2tb-coindesk.vercel.app%2F_next%2Fstatic%2Fmedia%2Fcoindesk-logo.68661da3.png&w=256&q=75&dpl=dpl_4pNNn1hbYtbBKJCzqagnfktiDpSk',
      url: 'https://www.coindesk.com/' 
    },
    { 
      name: 'The Crypto Basic', 
      logo: 'https://thecryptobasic.com/wp-content/uploads/2023/01/the-crypto-icon-header.png',
      url: 'https://thecryptobasic.com/' 
    },
    { 
      name: 'Cryptonews', 
      logo: 'https://cimg.co/p/2/crypto-news-logo-full.svg',
      url: 'https://cryptonews.com/' 
    },
    { 
      name: 'U.Today', 
      logo: 'https://www.cloakcoin.com/user/pages/partner/U.Today/today.png',
      url: 'https://u.today/' 
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header with Logo and Language Selector */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image 
              src="/images/logo.png" 
              alt="AI News Tracker Logo" 
              width={70}
              height={70}
              className="rounded-lg filter invert brightness-0 invert"
            />
            <span className="text-3xl font-bold text-gradient">AI News Tracker</span>
          </div>
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

      {/* Main Content with mt-24 to account for fixed header */}
      <div className="pt-24">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-24 relative overflow-hidden"
        >
          {/* Arka plan logosu */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 transform -rotate-45">
              <Image 
                src="/images/logo.png" 
                alt="Background Logo" 
                fill
                className="object-contain animate-float"
              />
            </div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                {content[lang].title}
              </h1>
              <p className="text-xl mb-10 text-gray-300">
                {content[lang].description}
              </p>
              <Link 
                href="https://github.com/muratclkdev/ainewstrackerwithgpt" 
                target="_blank"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {content[lang].github}
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-black"
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            >
              {content[lang].features}
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{content[lang].gptTitle}</h3>
                <p className="text-gray-300">{content[lang].gptDesc}</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{content[lang].realTimeTitle}</h3>
                <p className="text-gray-300">{content[lang].realTimeDesc}</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{content[lang].customTitle}</h3>
                <p className="text-gray-300">{content[lang].customDesc}</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-20 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              {content[lang].team}
            </h2>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-700 text-center max-w-sm">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image 
                    src="https://avatars.githubusercontent.com/muratclkdev" 
                    alt="Murat Çelik"
                    fill
                    className="rounded-full object-cover border-4 border-blue-500"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Murat Çelik</h3>
                <p className="text-blue-400">{content[lang].role}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-20 bg-black"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              {content[lang].about}
            </h2>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
              <div className="prose prose-invert max-w-none">
                {content[lang].aboutContent.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-6 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* News Sources Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-black"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              {content[lang].newsSources}
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              {content[lang].newsSourcesDesc}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {newsSources.map((source) => (
                <motion.div
                  key={source.name}
                  variants={fadeInUp}
                >
                  <Link
                    href={source.url}
                    target="_blank"
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center group h-[180px]"
                  >
                    <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                      <Image
                        src={source.logo}
                        alt={source.name}
                        fill
                        className={`object-contain filter group-hover:brightness-110 transition-all duration-300 p-2 ${source.name !== 'U.Today' ? 'invert brightness-0 invert' : ''}`}
                        sizes="(max-width: 768px) 96px, 96px"
                      />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors text-center">
                      {source.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Powered by ChatGPT Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-20 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                {content[lang].poweredBy}
              </h2>
              <p className="text-gray-400 mb-10">
                {content[lang].poweredByDesc}
              </p>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
                <div className="flex items-center justify-center gap-6">
                  <div className="relative w-16 h-16">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png"
                      alt="ChatGPT Logo"
                      fill
                      className="object-contain filter invert brightness-0 invert"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-2xl font-semibold text-white">ChatGPT</span>
                    <span className="text-sm text-gray-400">by OpenAI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-gray-900 py-12 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                {content[lang].rights}
              </p>
              <div className="flex gap-8">
                <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {content[lang].privacy}
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
