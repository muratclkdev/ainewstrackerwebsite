"use client";

import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants';
import { Lang } from '../../types';
import { useTheme } from 'next-themes';

interface PoweredByProps {
  lang: Lang;
}

export const PoweredBy = ({ lang }: PoweredByProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="py-24 bg-gradient-to-b from-transparent to-black/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-6"
          >
            {lang === 'tr' ? 'ChatGPT ile Güçlendirilmiştir' : 'Powered by ChatGPT'}
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-text/80 mb-12 max-w-2xl mx-auto"
          >
            {lang === 'tr' 
              ? 'AI News Tracker, ChatGPT\'nin güçlü yapay zeka teknolojisini kullanarak size en güncel ve doğru kripto para haberlerini sunar.' 
              : 'AI News Tracker uses the powerful AI technology of ChatGPT to provide you with the most up-to-date and accurate crypto news.'
            }
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="relative w-32 h-32 mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png" 
              alt="ChatGPT Logo" 
              className={`w-full h-full object-contain relative z-10 ${isDark ? 'filter invert' : 'filter brightness-0'}`}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PoweredBy; 