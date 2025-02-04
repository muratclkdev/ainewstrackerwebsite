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

export const Hero = ({ lang }: HeroProps) => {
  const [showTelegramModal, setShowTelegramModal] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleTelegramClick = () => {
    // Feedback bölümüne yönlendir
    const feedbackSection = document.querySelector('#feedback');
    if (feedbackSection) {
      feedbackSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Modal'ı göster
    setTimeout(() => {
      setShowTelegramModal(true);
    }, 1000);
  };

  const handleUnderstand = async () => {
    setShowTelegramModal(false);
    
    try {
      const response = await fetch('/api/telegram', {
        method: 'POST'
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.inviteLink) {
          // iOS cihazlar için özel yönlendirme
          if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = data.inviteLink;
          } else {
            window.open(data.inviteLink, '_blank');
          }
        }
      }
    } catch (error) {
      console.error('Error generating invite link:', error);
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="hero-section py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            >
              {/* {content[lang].title} */}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300"
            >
              {/* {content[lang].description} */}
            </motion.p>
            <div className="space-y-4">
              <motion.button
                variants={fadeInUp}
                onClick={handleTelegramClick}
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                {/* {content[lang].telegram} */}
              </motion.button>
            </div>
          </div>
          <div className="flex-1">
            <div className="mockup-container">
              <div className="iphone-mockup">
                <Image
                  src="/images/screenshot.jpg"
                  alt="AI News Tracker Screenshot"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-[38px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Telegram Modal */}
      {showTelegramModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={() => setShowTelegramModal(false)}
        >
          <motion.div
            className={`p-8 rounded-2xl max-w-md w-full ${
              isDark 
                ? 'bg-[#1a1b26] border-gray-700' 
                : 'bg-[#ffffff] border-gray-200'
            } border shadow-lg feedback-card`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center ${
                isDark ? 'opacity-100' : 'opacity-90'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                {/* {content[lang].feedback} */}
              </h3>
              <p className={`mb-8 text-lg ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {/* {content[lang].feedbackDesc} */}
              </p>
              <motion.button
                onClick={handleUnderstand}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* {content[lang].understood} */}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Hero;