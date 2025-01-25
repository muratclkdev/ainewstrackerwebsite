"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { content } from '../../content';
import type { Lang } from '../../types';
import { useTheme } from 'next-themes';
import { useState } from 'react';

interface HeroProps {
  lang: Lang;
}

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

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [showTelegramModal, setShowTelegramModal] = useState(false);

  const handleTelegramClick = () => {
    // Önce feedback bölümüne atla
    const feedbackSection = document.querySelector('#feedback');
    if (feedbackSection) {
      feedbackSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Sonra modal'ı göster
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
        window.open(data.inviteLink, '_blank');
      }
    } catch (error) {
      console.error('Error generating invite link:', error);
    }
  };

  return (
    <section className="py-20 bg-[#0f1117]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
            AI NEWS TRACKER
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            {content[lang].description}
          </p>
          <div className="flex justify-center gap-4 mb-16">
            <motion.button
              onClick={handleTelegramClick}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content[lang].telegram}
            </motion.button>
          </div>

          {/* Telegram Modal */}
          {showTelegramModal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              onClick={() => setShowTelegramModal(false)}
            >
              <motion.div
                className={`p-6 rounded-2xl max-w-md w-full ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
                onClick={e => e.stopPropagation()}
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {content[lang].feedback}
                  </h3>
                  <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {content[lang].feedbackDesc}
                  </p>
                  <motion.button
                    onClick={handleUnderstand}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {content[lang].understood}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Mockup Images */}
          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-[-2rem] md:gap-[-4rem]">
              {/* PC Mockup */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 1.5
                    }
                  }
                }}
                className="relative w-full max-w-[700px] z-10"
              >
                <div className={`p-4 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-500 ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <Image
                    src="/images/ss_pc.png"
                    alt="AI News Tracker Desktop"
                    width={700}
                    height={438}
                    className="rounded-xl"
                  />
                </div>
              </motion.div>

              {/* iPhone Mockup */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: {
                    opacity: 1,
                    y: -100,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 1.5,
                      delay: 0.2
                    }
                  }
                }}
                className="relative w-[250px] -mt-20 md:-mt-32 z-20"
              >
                <div className={`rounded-[2.5rem] p-4 shadow-lg transform hover:-translate-y-2 transition-transform duration-500 ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <Image
                    src="/images/screenshot.jpg"
                    alt="AI News Tracker Mobile"
                    width={250}
                    height={500}
                    className="rounded-[2rem]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};