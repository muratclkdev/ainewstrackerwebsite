"use client";

import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants';
import { CustomCursor } from '../../components/CustomCursor';
import { YandexMetrica } from '../../components/analytics/YandexMetrica';
import { CookieConsent } from '../../components/analytics/CookieConsent';
import type { Lang, Theme } from "../../types";
import { useState } from 'react';
import { useTheme } from 'next-themes';

interface PrivacyPageProps {
  lang: Lang;
  content: any;
}

export const PrivacyPage = ({ lang, content }: PrivacyPageProps) => {
  const [currentLang, setLang] = useState<Lang>(lang);
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <YandexMetrica />
      <CustomCursor />
      <Header 
        lang={currentLang} 
        onLanguageChange={(newLang: Lang) => setLang(newLang)}
        theme={theme as Theme}
        onThemeChange={(newTheme: Theme) => setTheme(newTheme)}
      />
      
      {/* Main Content */}
      <main className="pt-[220px] container mx-auto px-4 pb-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto space-y-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            {content[currentLang].title}
          </h1>

          {/* Privacy Sections */}
          {['dataCollection', 'dataUsage', 'security', 'cookies'].map((section) => (
            <motion.div 
              key={section} 
              className="privacy-card bg-cardbg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-text">
                {content[currentLang][section as keyof typeof content['tr']]}
              </h2>
              <ul className="space-y-4">
                {(content[currentLang][`${section}Desc` as keyof typeof content['tr']] as string[]).map((desc, index) => (
                  <li key={index} className="text-text flex items-start gap-3">
                    <span className="mt-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
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