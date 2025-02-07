"use client";

import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants';
import Image from "next/image";
import { useState } from "react";
import { Lang } from '../../types';
import { useTheme } from 'next-themes';

interface HeroProps {
  lang: Lang;
}

const texts = {
  tr: {
    title: "AI News Tracker",
    description: "Kripto para haberleri yapay zeka destekli takip sistemi",
    telegram: "Telegram'a Katıl",
    feedback: "Geri bildiriminiz bizim için çok önemli.",
    modalTitle: "Geri Bildirim",
    modalDescription: "Geri bildiriminiz bizim için çok önemli. Davet linkinizi almak için lütfen 'Anladım' butonuna basın.",
    modalButton: "Anladım"
  },
  en: {
    title: "AI News Tracker",
    description: "AI-powered crypto news tracking system",
    telegram: "Join Telegram",
    feedback: "Your feedback is very important to us.",
    modalTitle: "Feedback",
    modalDescription: "Your feedback is very important to us. Please click 'I Understand' to get your invitation link.",
    modalButton: "I Understand"
  }
};

export const Hero = ({ lang }: HeroProps) => {
  const [showTelegramModal, setShowTelegramModal] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleTelegramClick = () => {
    setFeedbackMessage(texts[lang].feedback);
    setTimeout(() => setShowTelegramModal(true), 1000);
  };

  const handleModalConfirm = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/telegram', { method: 'POST' });
      const data = await res.json();
      if (res.ok && data.success) {
        const telegramLink = data.inviteLink;
        window.open(telegramLink, '_blank', 'noopener,noreferrer');
      } else {
        alert('Davet linki alınamadı: ' + (data.error || 'Bilinmeyen hata'));
      }
    } catch (error: any) {
      alert('Hata oluştu: ' + error.message);
    }
    setLoading(false);
    setShowTelegramModal(false);
  };

  return (
    <section className={`relative min-h-screen ${isDark ? 'bg-[#0f1117]' : 'bg-gray-50'} overflow-hidden`}>
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Sol Kısım - Başlık ve Buton */}
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative"
              >
                <span className="absolute -top-2 -left-4 w-12 h-12 bg-blue-500/10 rounded-full blur-xl" />
                <span className="absolute top-0 right-24 w-8 h-8 bg-purple-500/10 rounded-full blur-lg" />
                <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  {texts[lang].title}
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-xl md:text-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-xl leading-relaxed`}
              >
                {texts[lang].description}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4"
            >
              <button
                onClick={handleTelegramClick}
                className="group relative pointer-events-auto px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl font-semibold text-lg text-white overflow-hidden transition-all duration-300 w-full sm:w-auto"
              >
                <div className="absolute inset-0 z-0 pointer-events-none bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative flex items-center gap-2 z-10 pointer-events-auto">
                  {texts[lang].telegram}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </button>
            </motion.div>
          </div>

          {/* Sağ Kısım - Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex-1 relative perspective-2000 mt-8 md:mt-0"
            style={{
              transformStyle: "preserve-3d",
              perspective: "2000px"
            }}
          >
            <motion.div 
              className="relative w-full aspect-[9/16] min-h-[400px] max-w-full sm:max-w-[300px] md:max-w-[380px] mx-auto mockup-container"
              animate={{ 
                rotateY: [-5, 5, -5],
                rotateX: [2, -2, 2]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(0px)"
              }}
            >
              {/* Glass Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 backdrop-blur-xl rounded-[38px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] overflow-hidden">
                {/* Glow Effects */}
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-blue-500/30 to-purple-500/30 blur-3xl" />
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-purple-500/30 to-pink-500/30 blur-3xl" />
                
                {/* Content */}
                <div className="relative w-full h-full">
                  <Image
                    src="/images/screenshot.jpg"
                    alt="AI News Tracker Screenshot"
                    fill
                    className="rounded-3xl object-cover"
                    priority
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 hidden sm:block bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
                  
                  {/* Reflections */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0"
                    animate={{
                      opacity: [0, 0.5, 0],
                      translateX: ['-100%', '100%', '100%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -left-6 bottom-1/4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                animate={{
                  y: [10, -10, 10],
                  rotate: [360, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.15)_100%)]" />
      <div className={`absolute inset-0 bg-[url('/grid.svg')] ${isDark ? 'opacity-[0.02]' : 'opacity-[0.05]'} pointer-events-none`} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-transparent rounded-full blur-3xl"
      />

      {/* Feedback Message */}
      {feedbackMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed bottom-4 right-4 p-4 rounded-lg ${
            isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
        >
          {feedbackMessage}
        </motion.div>
      )}

      {/* Telegram Modal */}
      {showTelegramModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            className={`p-8 rounded-2xl max-w-md w-full ${
              isDark 
                ? 'bg-[#1a1b26] border-gray-700' 
                : 'bg-white border-gray-200'
            } border shadow-lg`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {texts[lang].modalTitle}
              </h3>
              <p className={`mb-8 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {texts[lang].modalDescription}
              </p>
              <motion.button
                onClick={handleModalConfirm}
                disabled={loading}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? (lang === 'tr' ? 'Yükleniyor...' : 'Loading...') : texts[lang].modalButton}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;

<style jsx>{`
  .perspective-2000 {
    perspective: 2000px;
    transform-style: preserve-3d;
  }
  .mockup-container {
    transform-style: preserve-3d;
    will-change: transform;
    transform: translateZ(0);
  }
  .translate-z-12 {
    transform: translateZ(12px);
  }
  .translate-z-8 {
    transform: translateZ(8px);
  }
  .translate-z-4 {
    transform: translateZ(4px);
  }
  .translate-z-0 {
    transform: translateZ(0px);
  }
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotateX(0) rotateY(0) translateZ(0);
    }
    50% {
      transform: translateY(-20px) rotateX(4deg) rotateY(-4deg) translateZ(20px);
    }
  }
`}</style>