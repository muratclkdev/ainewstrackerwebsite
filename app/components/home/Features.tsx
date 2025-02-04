"use client";

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../constants';
import { Lang } from '../../types';

interface FeaturesProps {
  lang: Lang;
}

const texts = {
  tr: {
    featuresTitle: "Öne Çıkan Özellikler",
    featuresDesc: "Platformumuzun sunduğu özellikler hakkında detaylı açıklama.",
    factualTitle: "Doğrulanmış Haberler",
    factualDesc: "Güvenilir kaynaklardan doğrulanmış haberler.",
    investTitle: "Yatırım Fırsatları",
    investDesc: "Potansiyel yatırım fırsatlarını kaçırmayın.",
    listingTitle: "Borsa Listeleme",
    listingDesc: "Yeni coin ve token listeleme haberleri.",
    summaryTitle: "Haber Özetleri",
    summaryDesc: "Önemli haberlerin kısa özetleri."
  },
  en: {
    featuresTitle: "Featured Features",
    featuresDesc: "A detailed description of the features offered by our platform.",
    factualTitle: "Verified News",
    factualDesc: "News verified by reliable sources.",
    investTitle: "Investment Opportunities",
    investDesc: "Don't miss potential investment opportunities.",
    listingTitle: "Exchange Listing",
    listingDesc: "New coin and token listing news.",
    summaryTitle: "News Summaries",
    summaryDesc: "Brief summaries of important news."
  }
};

export default function Features({ lang }: FeaturesProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="features-section py-20 dark:bg-black bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          {texts[lang].featuresTitle}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto place-items-start">
          {/* Doğrulanmış Haberler */}
          <motion.div 
            variants={fadeInUp} 
            className="feature-card w-full h-full bg-white dark:bg-[#1a1b26] rounded-xl p-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl dark:border dark:border-gray-800 flex flex-col items-center text-center"
          >
            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600 dark:text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">{texts[lang].factualTitle}</h3>
            <p className="text-gray-600 dark:text-gray-300">{texts[lang].factualDesc}</p>
          </motion.div>

          {/* Yatırım Fırsatları */}
          <motion.div 
            variants={fadeInUp} 
            className="feature-card w-full h-full bg-white dark:bg-[#1a1b26] rounded-xl p-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl dark:border dark:border-gray-800 flex flex-col items-center text-center"
          >
            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600 dark:text-green-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">{texts[lang].investTitle}</h3>
            <p className="text-gray-600 dark:text-gray-300">{texts[lang].investDesc}</p>
          </motion.div>

          {/* Borsa Listeleme */}
          <motion.div 
            variants={fadeInUp} 
            className="feature-card w-full h-full bg-white dark:bg-[#1a1b26] rounded-xl p-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl dark:border dark:border-gray-800 flex flex-col items-center text-center"
          >
            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600 dark:text-purple-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">{texts[lang].listingTitle}</h3>
            <p className="text-gray-600 dark:text-gray-300">{texts[lang].listingDesc}</p>
          </motion.div>

          {/* Haber Özetleri */}
          <motion.div 
            variants={fadeInUp} 
            className="feature-card w-full h-full bg-white dark:bg-[#1a1b26] rounded-xl p-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl dark:border dark:border-gray-800 flex flex-col items-center text-center"
          >
            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-600 dark:text-yellow-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-yellow-600 dark:text-yellow-400">{texts[lang].summaryTitle}</h3>
            <p className="text-gray-600 dark:text-gray-300">{texts[lang].summaryDesc}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 