"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

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
    alphaAccess: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    feedback: string;
    feedbackDesc: string;
    feedbackName: string;
    feedbackEmail: string;
    feedbackMessage: string;
    feedbackSubmit: string;
    feedbackSuccess: string;
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

// Typewriter bileşeni
const TypewriterText = () => {
  const [text, setText] = useState('');
  const fullText = 'AI News Tracker';
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const period = 2000;
  const [delta, setDelta] = useState(100);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Mobil cihaz kontrolü
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setText(fullText);
      return;
    }

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, isDeleting, isMobile]);

  const tick = () => {
    if (isMobile) return;

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
    <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
      {text}
      {!isMobile && <span className="animate-blink">|</span>}
    </span>
  );
};

// Custom Cursor Component
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.tagName.toLowerCase() === 'input' ||
          target.tagName.toLowerCase() === 'textarea') {
        setIsHovering(true);
      }
    };

    const onMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{ transform: `translate(-50%, -50%)` }}
    />
  );
};

export default function Home() {
  const [lang, setLang] = useState<Lang>('tr');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 1);

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
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        'RuTlqyGrtfjYDeqgt'
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      alert(lang === 'tr' ? 'Bir hata oluştu. Lütfen tekrar deneyin.' : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      binancePay: "Binance ile Gönder",
      alphaAccess: "Alfa Sürümüne Katıl",
      days: "Gün",
      hours: "Saat",
      minutes: "Dakika",
      seconds: "Saniye",
      feedback: "Geribildirim",
      feedbackDesc: "Görüş ve önerileriniz bizim için değerli",
      feedbackName: "Adınız",
      feedbackEmail: "E-posta Adresiniz",
      feedbackMessage: "Mesajınız",
      feedbackSubmit: "Gönder",
      feedbackSuccess: "Geribildiriminiz için teşekkürler!"
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
      binancePay: "Send with Binance",
      alphaAccess: "Join Alpha Version",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      feedback: "Feedback",
      feedbackDesc: "Your feedback is valuable to us",
      feedbackName: "Your Name",
      feedbackEmail: "Your Email",
      feedbackMessage: "Your Message",
      feedbackSubmit: "Submit",
      feedbackSuccess: "Thank you for your feedback!"
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
      name: 'Decrypt', 
      logo: 'https://cdn.decrypt.co/wp-content/themes/decrypt-media/assets/images/branding-2024/full-logo-black.svg',
      url: 'https://decrypt.co/' 
    },
    { 
      name: 'Bitcoin.com News', 
      logo: 'https://news.bitcoin.com/images/uploads/logo-light.svg',
      url: 'https://news.bitcoin.com/' 
    },
    { 
      name: 'The Block', 
      logo: '/images/theblock.png',
      url: 'https://www.theblock.co/' 
    },
    { 
      name: 'U.Today', 
      logo: '/images/u_today.png',
      url: 'https://u.today/' 
    },
    { 
      name: 'Crypto.news', 
      logo: '/images/crypto_news.png',
      url: 'https://crypto.news/' 
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />
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

      {/* Header - Countdown'dan sonra */}
      <header className="fixed top-[88px] left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png" 
              alt="AI News Tracker Logo" 
              width={70}
              height={70}
              className="rounded-lg filter invert brightness-0 invert"
            />
            <TypewriterText />
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

      {/* Main Content - Header'dan sonra başlayacak şekilde padding ayarı */}
      <div className="pt-[176px]"> {/* Countdown (88px) + Header (88px) yüksekliği */}
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
                className="telegram-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="telegram-icon w-5 h-5"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span className="font-medium">{content[lang].telegram}</span>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 bg-black"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              {content[lang].features}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <motion.div variants={fadeInUp} className="feature-card glow-effect">
                <div className="feature-icon floating-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="feature-title">{content[lang].factualTitle}</h3>
                <p className="feature-description">{content[lang].factualDesc}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="feature-card glow-effect">
                <div className="feature-icon floating-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="feature-title">{content[lang].investTitle}</h3>
                <p className="feature-description">{content[lang].investDesc}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="feature-card glow-effect">
                <div className="feature-icon floating-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
                <h3 className="feature-title">{content[lang].listingTitle}</h3>
                <p className="feature-description">{content[lang].listingDesc}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="feature-card glow-effect">
                <div className="feature-icon floating-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <h3 className="feature-title">{content[lang].summaryTitle}</h3>
                <p className="feature-description">{content[lang].summaryDesc}</p>
              </motion.div>
            </div>
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
                      <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.365 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
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
            <motion.div 
              variants={fadeInUp}
              className="max-w-4xl mx-auto about-card about-glow"
            >
              <div className="prose prose-invert max-w-none">
                {content[lang].aboutContent.map((paragraph, index) => (
                  <motion.p 
                    key={index} 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.2
                        }
                      }
                    }}
                    className="about-paragraph"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
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
                  name: 'Crypto News', 
                  logo: 'https://cimg.co/p/2/crypto-news-logo-full.svg',
                  url: 'https://cryptonews.com/' 
                },
                { 
                  name: 'Decrypt', 
                  logo: 'https://cdn.decrypt.co/wp-content/themes/decrypt-media/assets/images/branding-2024/full-logo-black.svg',
                  url: 'https://decrypt.co/' 
                },
                { 
                  name: 'Bitcoin.com News', 
                  logo: 'https://news.bitcoin.com/images/uploads/logo-light.svg',
                  url: 'https://news.bitcoin.com/' 
                },
                { 
                  name: 'The Block', 
                  logo: '/images/theblock.png',
                  url: 'https://www.theblock.co/' 
                },
                { 
                  name: 'U.Today', 
                  logo: '/images/u_today.png',
                  url: 'https://u.today/' 
                },
                { 
                  name: 'Crypto.news', 
                  logo: '/images/crypto_news.png',
                  url: 'https://crypto.news/' 
                },
              ].map((source) => (
                <motion.div
                  key={source.name}
                  variants={fadeInUp}
                  className="group relative"
                >
                  <Link
                    href={source.url}
                    target="_blank"
                    className="block bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl hover:scale-105 transition-all duration-300 h-[180px] w-full border border-gray-800/50 hover:border-blue-500/50"
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="relative w-24 h-24 mb-4">
          <Image
                          src={source.logo}
                          alt={source.name}
                          fill
                          className="object-contain filter group-hover:brightness-110 transition-all duration-300 p-2 invert brightness-0 invert"
                          sizes="(max-width: 768px) 96px, 96px"
                          priority={source.name === 'Crypto.news'}
                          quality={100}
                        />
                      </div>
                      <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors text-center">
                        {source.name}
                      </span>
                    </div>
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

        {/* Feedback Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-20 bg-black"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              {content[lang].feedback}
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              {content[lang].feedbackDesc}
            </p>
            
            <div className="max-w-2xl mx-auto">
              {isSubmitted ? (
                <div className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
                  <p className="text-xl text-green-400">{content[lang].feedbackSuccess}</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder={content[lang].feedbackName}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="from_email"
                      required
                      placeholder={content[lang].feedbackEmail}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder={content[lang].feedbackMessage}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full telegram-button ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {lang === 'tr' ? 'Gönderiliyor...' : 'Sending...'}
                        </span>
                      ) : (
                        content[lang].feedbackSubmit
                      )}
                    </button>
                  </div>
                </form>
              )}
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
