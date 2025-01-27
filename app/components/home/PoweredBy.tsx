"use client";

import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants';
import { Lang } from '../../types';

interface PoweredByProps {
  lang: Lang;
}

export const PoweredBy = ({ lang }: PoweredByProps) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="powered-section py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-400 mb-4">
          {lang === 'tr' ? 'ChatGPT ile Güçlendirilmiştir' : 'Powered by ChatGPT'}
        </h2>
        <p className="text-gray-300 mb-8">
          {lang === 'tr' ? 'AI News Tracker, ChatGPT\'nin güçlü yapay zeka teknolojisini kullanarak size en güncel ve doğru kripto para haberlerini sunar.' : 'AI News Tracker uses the powerful AI technology of ChatGPT to provide you with the most up-to-date and accurate crypto news.'}
        </p>
        <div className="flex justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png" alt="ChatGPT Logo" className="w-32 h-32 object-contain filter invert" />
        </div>
      </div>
    </motion.section>
  );
};

export default PoweredBy; 