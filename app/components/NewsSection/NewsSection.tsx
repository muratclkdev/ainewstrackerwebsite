"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Lang } from '../../types';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface NewsSectionProps {
  lang: Lang;
}

const texts = {
  tr: {
    features: "Özellikler",
    factualTitle: "Doğrulanmış Haberler",
    factualDesc: "Güvenilir kaynaklardan doğrulanmış haberler",
    investTitle: "Yatırım Fırsatları",
    investDesc: "Potansiyel yatırım fırsatlarını kaçırmayın",
    listingTitle: "Borsa Listeleme",
    listingDesc: "Yeni coin ve token listeleme haberleri",
    summaryTitle: "Haber Özetleri",
    summaryDesc: "Önemli haberlerin kısa özetleri"
  },
  en: {
    features: "Features",
    factualTitle: "Verified News",
    factualDesc: "Verified news from reliable sources",
    investTitle: "Investment Opportunities",
    investDesc: "Don't miss potential investment opportunities",
    listingTitle: "Exchange Listing",
    listingDesc: "New coin and token listing news",
    summaryTitle: "News Summaries",
    summaryDesc: "Brief summaries of important news"
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const newsSourcesList = [
  { 
    name: 'Cointelegraph', 
    logo: 'https://cointelegraph.com/icons/logo/en.svg',
  },
  { 
    name: 'Coindesk', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/CoinDesk_logo.svg/1024px-CoinDesk_logo.svg.png',
  },
  { 
    name: 'The Crypto Basic', 
    logo: 'https://thecryptobasic.com/wp-content/uploads/2023/01/the-crypto-logo.png',
  },
  { 
    name: 'Cryptonews', 
    logo: 'https://cimg.co/p/2/crypto-news-logo-full.svg',
  },
  { 
    name: 'U.Today', 
    logo: '/images/u_today.png',
  },
  { 
    name: 'Decrypt', 
    logo: 'https://cdn.decrypt.co/wp-content/themes/decrypt-media/assets/images/branding-2024/full-logo-black.svg',
  },
  { 
    name: 'Bitcoin.com', 
    logo: 'https://news.bitcoin.com/images/uploads/logo-light.svg',
  },
  { 
    name: 'The Block', 
    logo: '/images/theblock.png',
  }
];

export default function NewsSection({ lang }: NewsSectionProps) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {texts[lang].features}
          </motion.h2>
          <motion.p 
            className="text-lg mb-16 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {texts[lang].factualTitle}
          </motion.p>

          <motion.p 
            className="text-lg mb-16 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {texts[lang].factualDesc}
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {newsSourcesList.map((source, index) => (
              <motion.div
                key={source.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="feature-card p-6 rounded-xl bg-white dark:bg-gray-800/50 shadow-lg dark:backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="w-32 h-32 flex items-center justify-center mx-auto mb-4 bg-gray-50 dark:bg-white/5 rounded-lg p-4"
                    whileHover={{ 
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {source.logo.endsWith('.svg') ? (
                      <img
                        src={source.logo}
                        alt={source.name}
                        className="w-auto h-auto max-w-full max-h-full object-contain transition-all duration-300 dark:brightness-0 dark:invert"
                      />
                    ) : (
                      <Image
                        src={source.logo}
                        alt={source.name}
                        width={120}
                        height={120}
                        className="w-auto h-auto max-w-full max-h-full object-contain transition-all duration-300 dark:brightness-0 dark:invert"
                      />
                    )}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-gray-800 dark:text-white"
                    whileHover={{ scale: 1.1 }}
                  >
                    {source.name}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 