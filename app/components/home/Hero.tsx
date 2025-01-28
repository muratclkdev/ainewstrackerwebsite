"use client";

import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants';
import Image from "next/image";
import { useState } from "react";
import { Lang } from '../../types';

interface HeroProps {
  lang: Lang;
  handleTelegramClick: () => Promise<void>;
  telegramInviteLink?: string;
  content: {
    [key in Lang]: {
      title: string;
      description: string;
      telegram: string;
      feedbackSuccess: string;
    }
  };
}

export const Hero = ({ lang, handleTelegramClick, telegramInviteLink, content }: HeroProps) => {
  const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);

  const handleTelegramClickWrapper = async () => {
    setShowFeedbackMessage(true);
    await handleTelegramClick();
    setTimeout(() => setShowFeedbackMessage(false), 3000);
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
              {content[lang].title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300"
            >
              {content[lang].description}
            </motion.p>
            <div className="space-y-4">
              <motion.button
                variants={fadeInUp}
                onClick={handleTelegramClickWrapper}
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                {content[lang].telegram}
              </motion.button>
              {telegramInviteLink && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-gray-400"
                >
                  {lang === 'tr' ? 'veya şu linki kullanın:' : 'or use this link:'} {' '}
                  <a
                    href={telegramInviteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500 break-all"
                  >
                    {telegramInviteLink}
                  </a>
                </motion.div>
              )}
            </div>
            {showFeedbackMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed bottom-8 right-8 bg-gray-900 text-white px-6 py-4 rounded-lg shadow-lg z-50 border border-gray-800"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{content[lang].feedbackSuccess}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <p className="mb-2">{lang === 'tr' ? 'Eğer link açılmadıysa, buradan katılabilirsiniz:' : 'If the link did not open, you can join here:'}</p>
                    <a
                      href="https://t.me/ainewstracker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-500 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.598-.183-.608-.598.126-.885l10.78-4.156c.505-.184.95.126.786.885z"/>
                      </svg>
                      {lang === 'tr' ? 'Telegram Kanalına Katıl' : 'Join Telegram Channel'}
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          <div className="flex-1">
            <div className="mockup-container">
              <div className="iphone-mockup">
                <Image
                  src="/images/screenshot.jpg"
                  alt="AI News Tracker Screenshot"
                  fill
                  className="rounded-[38px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero; 