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
    donate: string;
    buyMeACoffee: string;
    cryptoDonate: string;
    factualTitle: string;
    factualDesc: string;
    investTitle: string;
    investDesc: string;
    listingTitle: string;
    listingDesc: string;
    summaryTitle: string;
    summaryDesc: string;
    telegram: string;
    binancePay: string;
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
      ],
      donate: "Bağış Yap",
      buyMeACoffee: "Bir Kahve Ismarla",
      cryptoDonate: "Kripto ile Bağış Yap",
      factualTitle: "Somut Haberler",
      factualDesc: "Analizlerden ve tahminlerden uzak, sadece gerçek ve doğrulanmış kripto para haberleri",
      investTitle: "Kolay Yatırım",
      investDesc: "Haberlere konu olan kripto paralara anında yatırım yapabilme imkanı ve entegre alım-satım butonları",
      listingTitle: "Borsa Takibi",
      listingDesc: "Binance ve Coinbase gibi büyük borsalardaki yeni listeleme ve çıkarma haberlerinin anlık takibi",
      summaryTitle: "Tek Cümlelik Özetler",
      summaryDesc: "Her haberin özünü tek bir cümlede anlayan ve aktaran yapay zeka destekli özet sistemi",
      telegram: "Telegram Kanalımıza Katıl",
      binancePay: "Binance ile Gönder"
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
      ],
      donate: "Support",
      buyMeACoffee: "Buy Me a Coffee",
      cryptoDonate: "Donate with Crypto",
      factualTitle: "Factual News",
      factualDesc: "Real and verified crypto news, free from analyses and predictions",
      investTitle: "Easy Investment",
      investDesc: "Instant investment opportunity with integrated trading buttons for featured cryptocurrencies",
      listingTitle: "Exchange Updates",
      listingDesc: "Real-time tracking of new listings and delistings on major exchanges like Binance and Coinbase",
      summaryTitle: "One-Line Summaries",
      summaryDesc: "AI-powered summary system that understands and conveys the essence of each news in a single sentence",
      telegram: "Join Our Telegram Channel",
      binancePay: "Send with Binance"
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
                href="https://t.me/ainewstracker"
                target="_blank"
                className="inline-block bg-gradient-to-r from-[#0088cc] to-[#00a0e3] hover:from-[#0088cc]/90 hover:to-[#00a0e3]/90 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.411-.168.56-.314 1.045-.442 1.463-.128.418-.236.771-.323 1.058-.087.287-.192.574-.314.861-.122.287-.227.492-.314.615-.087.122-.157.209-.21.261a.956.956 0 01-.149.133c-.052.035-.122.052-.21.052s-.183-.026-.279-.078c-.096-.052-.192-.139-.288-.261-.096-.122-.192-.287-.288-.492-.096-.209-.192-.47-.288-.783l-2.885-9.198c-.087-.313-.157-.522-.21-.627-.052-.104-.122-.174-.21-.209-.087-.035-.21-.052-.366-.052-.157 0-.349.009-.575.026-.227.017-.47.043-.732.078v-.757c.366-.052.723-.096 1.071-.133.349-.035.688-.061 1.019-.078.331-.017.653-.026.967-.026.314 0 .627.009.941.026.314.017.627.043.941.078.314.035.636.078.967.133v.757c-.401-.017-.723-.026-.967-.026-.244 0-.436.009-.575.026-.14.017-.236.061-.288.133-.052.07-.061.191-.026.366l2.451 7.761.288.887c.087.261.166.479.236.653.07.174.14.313.21.418.07.104.131.174.184.209.052.035.096.043.131.026.035-.017.087-.087.157-.209.07-.122.157-.313.262-.575.105-.261.227-.601.366-1.019l2.363-6.273c.087-.244.131-.426.131-.549 0-.122-.044-.209-.131-.261-.087-.052-.236-.078-.445-.078-.21 0-.479.009-.81.026v-.757c.279-.035.549-.07.81-.104.262-.035.514-.061.758-.078.244-.017.479-.026.706-.026.227 0 .453.009.679.026.227.017.453.043.679.078.227.035.453.07.679.104v.757c-.314-.017-.575-.026-.784-.026-.21 0-.375.017-.497.052-.122.035-.21.113-.262.235z"/>
                </svg>
                {content[lang].telegram}
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
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{content[lang].summaryTitle}</h3>
                <p className="text-gray-300">{content[lang].summaryDesc}</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{content[lang].factualTitle}</h3>
                <p className="text-gray-300">{content[lang].factualDesc}</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{content[lang].investTitle}</h3>
                <p className="text-gray-300">{content[lang].investDesc}</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{content[lang].listingTitle}</h3>
                <p className="text-gray-300">{content[lang].listingDesc}</p>
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
                <Link 
                  href="https://github.com/muratclkdev" 
                  target="_blank"
                  className="block group"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Image 
                      src="https://avatars.githubusercontent.com/muratclkdev" 
                      alt="Murat Çelik"
                      fill
                      className="rounded-full object-cover border-4 border-blue-500 group-hover:border-purple-500 transition-colors duration-300"
                      priority
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">Murat Çelik</h3>
                  <p className="text-blue-400 mb-8">{content[lang].role}</p>
                </Link>

                <div className="space-y-4 mt-8 pt-8 border-t border-gray-700">
                  <Link 
                    href="https://github.com/muratclkdev/ainewstrackerwithgpt" 
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {content[lang].github}
                  </Link>

                  <Link 
                    href="https://www.buymeacoffee.com/muratclkdev" 
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-[#FFDD00] hover:bg-[#FFDD00]/90 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg w-full"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
                    </svg>
                    {content[lang].buyMeACoffee}
                  </Link>

                  <Link 
                    href="https://commerce.coinbase.com/checkout/YOUR-CHECKOUT-ID" 
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF9900] to-[#FF7700] hover:from-[#FF9900]/90 hover:to-[#FF7700]/90 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg w-full"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.638 14.904l-1.327-.728a.249.249 0 01-.124-.216V9.044c0-.09.048-.172.124-.216l1.327-.728a.249.249 0 01.372.216v6.372a.249.249 0 01-.372.216zM17.98 19.036l-.372.216-3.992 2.16a.249.249 0 01-.372-.216V3.804c0-.09.048-.172.124-.216l3.992-2.16a.249.249 0 01.372.216v17.176a.249.249 0 01-.124.216zM9.676 19.036l-.372.216-3.992 2.16a.249.249 0 01-.372-.216V3.804c0-.09.048-.172.124-.216l3.992-2.16a.249.249 0 01.372.216v17.176a.249.249 0 01-.124.216zM.372 14.904L0 15.12V8.88l.372.216 1.327.728a.249.249 0 01.124.216v4.916a.249.249 0 01-.124.216l-1.327.728z"/>
                    </svg>
                    {content[lang].cryptoDonate}
                  </Link>

                  <Link 
                    href="https://www.binance.com/en/pay"
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#F0B90B] to-[#F8D12F] hover:from-[#F0B90B]/90 hover:to-[#F8D12F]/90 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg w-full"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.64 13.406l2.324-2.324 2.323 2.324 2.324-2.324-2.324-2.323 2.324-2.324-2.324-2.324L7.64 8.76 5.316 6.435 3 8.76l2.316 2.323L3 13.406l2.316 2.324 2.324-2.324zm8.747 0l2.324-2.324 2.324 2.324L23.359 8.76l-2.324-2.324-2.324 2.324-2.324-2.324-2.324 2.324 2.324 2.323-2.324 2.324 2.324 2.324 2.324-2.324zM7.64 19.085l2.324-2.324 2.323 2.324 2.324-2.324-2.324-2.324 2.324-2.323-2.324-2.324-2.323 2.324-2.324-2.324-2.316 2.323 2.316 2.324-2.316 2.324 2.316 2.324 2.324-2.324z"/>
                    </svg>
                    {content[lang].binancePay}
                  </Link>
                </div>
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
