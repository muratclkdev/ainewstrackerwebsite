"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Lang } from '../../types';

interface AboutSectionProps {
  lang: Lang;
}

const texts = {
  tr: {
    poweredBy: "Destekleyenler",
    poweredByDesc: "Teknoloji ortaklarımız",
    aboutTitle: "Hakkında",
    aboutContent: [
      "AI News Tracker, kripto para piyasalarındaki haberleri yapay zeka destekli olarak takip eden ve analiz eden bir platformdur.",
      "Platform, ChatGPT ile güçlendirilmiş haber analizi ve özetleme özelliği sayesinde, kullanıcılara önemli gelişmeleri hızlı ve anlaşılır bir şekilde sunar.",
      "Gerçek zamanlı haber takibi ve bildirimler sayesinde, kullanıcılar piyasadaki gelişmelerden anında haberdar olur.",
      "Kişiselleştirilebilir haber akışı ve filtreler ile kullanıcılar, ilgilendikleri konulara odaklanabilir."
    ]
  },
  en: {
    poweredBy: "Powered By",
    poweredByDesc: "Our technology partners",
    aboutTitle: "About",
    aboutContent: [
      "AI News Tracker is a platform that tracks and analyzes crypto market news with AI support.",
      "Thanks to its ChatGPT-powered news analysis and summarization feature, the platform presents important developments to users quickly and comprehensibly.",
      "With real-time news tracking and notifications, users are instantly informed about market developments.",
      "With customizable news feed and filters, users can focus on topics they are interested in."
    ]
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

export default function AboutSection({ lang }: AboutSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            {texts[lang].poweredBy}
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            {texts[lang].poweredByDesc}
          </p>
          <div className="flex justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/180px-ChatGPT-Logo.svg.png"
              alt="ChatGPT Logo"
              width={120}
              height={120}
              className="mx-auto invert"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 