"use client";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Countdown } from "../../components/home/Countdown";
import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants';
import { CustomCursor } from '../../components/CustomCursor';
import { YandexMetrica } from '../../components/analytics/YandexMetrica';
import { CookieConsent } from '../../components/analytics/CookieConsent';
import type { Lang } from "../../types";
import { useState } from 'react';

type Theme = 'light' | 'dark';

interface PrivacyPageProps {
  lang: Lang;
  content: any;
}

export const PrivacyPage = ({ lang, content }: PrivacyPageProps) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [currentLang, setLang] = useState<Lang>(lang);

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-[#0f1117]'}`}>
      <YandexMetrica />
      <CustomCursor />
      <Countdown 
        lang={currentLang} 
        targetDate={new Date('2025-02-14T23:59:59')} 
      />
      <Header 
        lang={currentLang} 
        theme={theme} 
        onThemeChange={(newTheme: Theme) => setTheme(newTheme)}
        onLanguageChange={(newLang: Lang) => setLang(newLang)}
      />
      
      {/* Main Content */}
      <main className="pt-[220px] container mx-auto px-4 pb-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto space-y-12"
        >
          <h1 className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text`}>
            {content[currentLang].title}
          </h1>

          {/* Privacy Sections */}
          {['dataCollection', 'dataUsage', 'security', 'cookies'].map((section) => (
            <motion.div 
              key={section} 
              className="privacy-card"
              whileHover={{ y: -5 }}
            >
              <h2 className={`text-2xl font-bold mb-6 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                {content[currentLang][section as keyof typeof content['tr']]}
              </h2>
              <ul className="space-y-4">
                {(content[currentLang][`${section}Desc` as keyof typeof content['tr']] as string[]).map((desc, index) => (
                  <li key={index} className={`
                    ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}
                    flex items-start gap-3
                  `}>
                    <span className="mt-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${theme === 'light' ? 'text-blue-500' : 'text-blue-400'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer lang={currentLang} />
      <CookieConsent lang={currentLang} />
    </div>
  );
};

export default PrivacyPage; 