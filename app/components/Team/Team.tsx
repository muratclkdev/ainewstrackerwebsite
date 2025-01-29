"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { content } from '../../content';
import type { Lang } from '../../types';
import { GithubIcon, CoffeeIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';

interface TeamProps {
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

export const Team: React.FC<TeamProps> = ({ lang }) => {
  const [showBinanceModal, setShowBinanceModal] = useState(false);
  const binanceId = "40173249";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(binanceId);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          {content[lang].team}
        </motion.h2>
        <div className="flex justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl max-w-sm w-full relative"
          >
            <div className="flex flex-col items-center">
              <Image
                src="https://avatars.githubusercontent.com/u/81019185?v=4"
                alt="Murat Çelik"
                width={120}
                height={120}
                className="rounded-full mb-4 border-4 border-blue-500/20"
              />
              <h3 className="text-xl font-bold text-white mb-1">Murat Çelik</h3>
              <p className="text-gray-400 mb-6">{content[lang].founder}</p>
              
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
                  {content[lang].github}
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
                  {content[lang].binanceDonate}
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
                  className="bg-gray-800 p-6 rounded-2xl max-w-sm w-full"
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
                    <p className="text-gray-300 mb-4">Binance ID:</p>
                    <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
                      <span className="text-white">{binanceId}</span>
                      <button
                        onClick={copyToClipboard}
                        className="text-gray-400 hover:text-white transition-colors"
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
}; 