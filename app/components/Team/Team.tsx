"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Lang } from '../../types';
import { GithubIcon, CoffeeIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from 'next-themes';

interface TeamProps {
  lang: Lang;
}

const texts = {
  tr: {
    team: "Takım",
    role: "Kurucu & Geliştirici",
    founder: "Murat Çelik",
    github: "GitHub'da İncele",
    binanceDonate: "Binance'ye Bağış"
  },
  en: {
    team: "Team",
    role: "Founder & Developer",
    founder: "Murat Celik",
    github: "View on GitHub",
    binanceDonate: "Donate to Binance"
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

export default function Team({ lang }: TeamProps) {
  const [showBinanceModal, setShowBinanceModal] = useState(false);
  const binanceId = "40173249";
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(binanceId);
  };

  return (
    <section className={`py-20 ${isDark ? 'bg-[#0f1117]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
        >
          {texts[lang].team}
        </motion.h2>
        <div className="flex justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border ${
              isDark 
                ? 'bg-[#1a1b26] border-gray-800' 
                : 'bg-white border-gray-200'
            } text-center max-w-sm`}
          >
            <div className="flex flex-col items-center">
              <Image
                src="https://avatars.githubusercontent.com/u/81019185?v=4"
                alt="Murat Çelik"
                width={120}
                height={120}
                className="rounded-full mb-4 border-4 border-blue-500/20"
              />
              <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Murat Çelik
              </h3>
              <p className="text-gray-400 mb-6">{texts[lang].role}</p>
              
              <div className="flex flex-col gap-4 w-full">
                <motion.a
                  href="https://github.com/muratclkdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GithubIcon className="w-5 h-5" />
                  {texts[lang].github}
                </motion.a>
                <motion.a
                  href="https://buymeacoffee.com/muratclkdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CoffeeIcon className="w-5 h-5" />
                  Buy Me a Coffee
                </motion.a>
                <motion.button
                  onClick={() => setShowBinanceModal(true)}
                  className="bg-gradient-to-r from-[#F3BA2F] to-[#F0B90B] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.624 13.9202L12 18.5442L7.37604 13.9202L12 9.29626L16.624 13.9202Z" />
                    <path d="M12 4.66846L19.0468 11.7153L21.6666 9.09541L12 -0.571289L2.33337 9.09541L4.95321 11.7153L12 4.66846Z" />
                    <path d="M12 23.4285L19.0468 16.3817L21.6666 19.0015L12 28.6682L2.33337 19.0015L4.95321 16.3817L12 23.4285Z" />
                    <path d="M12 14.7463L14.8778 11.8685L17.4502 14.4409L12 19.8911L6.54985 14.4409L9.12222 11.8685L12 14.7463Z" />
                  </svg>
                  {texts[lang].binanceDonate}
                </motion.button>
              </div>
            </div>

            {/* Binance Modal */}
            {showBinanceModal && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                onClick={() => setShowBinanceModal(false)}
              >
                <motion.div
                  className={`p-6 rounded-2xl max-w-sm w-full ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  }`}
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex flex-col items-center">
                    <Image
                      src="/images/binance.jpg"
                      alt="Binance QR"
                      width={300}
                      height={300}
                      className="rounded-xl mb-4"
                    />
                    <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Binance ID:
                    </p>
                    <div className={`flex items-center gap-2 ${
                      isDark ? 'bg-gray-700' : 'bg-gray-100'
                    } px-4 py-2 rounded-lg`}>
                      <span className={isDark ? 'text-white' : 'text-gray-900'}>
                        {binanceId}
                      </span>
                      <button
                        onClick={copyToClipboard}
                        className={`${
                          isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                        } transition-colors`}
                      >
                        <CopyIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 