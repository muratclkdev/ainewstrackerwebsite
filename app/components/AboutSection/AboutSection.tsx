"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Lang } from '../../types';
import { useTheme } from 'next-themes';

interface AboutSectionProps {
  lang: Lang;
}

const texts = {
  tr: {
    aboutTitle: "Hakkında",
    aboutContent: [
      "AI News Tracker, kripto para piyasalarındaki haberleri yapay zeka destekli olarak takip eden ve analiz eden bir platformdur.",
      "Platform, ChatGPT ile güçlendirilmiş haber analizi ve özetleme özelliği sayesinde, kullanıcılara önemli gelişmeleri hızlı ve anlaşılır bir şekilde sunar.",
      "Gerçek zamanlı haber takibi ve bildirimler sayesinde, kullanıcılar piyasadaki gelişmelerden anında haberdar olur.",
      "Kişiselleştirilebilir haber akışı ve filtreler ile kullanıcılar, ilgilendikleri konulara odaklanabilir."
    ]
  },
  en: {
    aboutTitle: "About",
    aboutContent: [
      "AI News Tracker is a platform that tracks and analyzes crypto market news with AI support.",
      "Thanks to its ChatGPT-powered news analysis and summarization feature, the platform presents important developments to users quickly and comprehensibly.",
      "With real-time news tracking and notifications, users are instantly informed about market developments.",
      "With customizable news feed and filters, users can focus on topics they are interested in."
    ]
  }
};

export default function AboutSection({ lang }: AboutSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-24 ${isDark ? 'bg-[#0f1117]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            {texts[lang].aboutTitle}
          </h2>
          <div className="space-y-8">
            {texts[lang].aboutContent.map((content, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`text-lg md:text-xl text-center leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {content}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 