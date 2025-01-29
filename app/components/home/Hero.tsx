"use client";

import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants';
import Image from "next/image";
import { useState } from "react";
import { Lang } from '../../types';
import { ContentType, TelegramResponse } from '../../types';

interface HeroProps {
  lang: Lang;
  content: ContentType;
}

const Hero: React.FC<HeroProps> = ({ lang, content }) => {
  const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);
  const [showTelegramModal, setShowTelegramModal] = useState(false);
  const [telegramInviteLink, setTelegramInviteLink] = useState<string>('');

  const handleTelegramClick = async () => {
    setShowTelegramModal(true);
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
          setTelegramInviteLink(data.inviteLink);
          setShowFeedbackMessage(true);
          
          if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = data.inviteLink;
          } else {
            window.open(data.inviteLink, '_blank');
          }
        }
      }
    } catch (error) {
      console.error('Error generating invite link:', error);
      setTelegramInviteLink('https://t.me/ainewstracker');
    }

    setTimeout(() => {
      setShowFeedbackMessage(false);
    }, 5000);
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
                onClick={handleTelegramClick}
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
                  {lang === 'tr' ? 'Eğer katılamadıysanız, lütfen bu linki kullanın:' : 'If you could not join, please use this link:'} {' '}
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
            {showTelegramModal && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                onClick={() => setShowTelegramModal(false)}
              >
                <motion.div
                  className="bg-gray-900 p-6 rounded-2xl max-w-md w-full"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-xl font-bold mb-4 text-white">
                      {lang === 'tr' ? 'Önemli Bilgi' : 'Important Information'}
                    </h3>
                    <p className="mb-6 text-gray-300">
                      {lang === 'tr' 
                        ? 'Kanala katıldıktan sonra deneyimlerinizi bizimle paylaşmayı unutmayın. Geri bildirimleriniz bizim için çok değerli!' 
                        : 'After joining the channel, please do not forget to share your experiences with us. Your feedback is very valuable to us!'}
                    </p>
                    <motion.button
                      onClick={handleUnderstand}
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {lang === 'tr' ? 'Anladım' : 'I Understand'}
                    </motion.button>
                  </div>
                </motion.div>
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
                  sizes="(max-width: 768px) 100vw, 50vw"
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