"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants';
import type { Lang } from '../../types';
import Image from 'next/image';

interface NewsSourcesProps {
  lang: Lang;
}

export const NewsSources: React.FC<NewsSourcesProps> = ({ lang }) => {
  const sources = [
    {
      name: "CoinTelegraph",
      logo: "/images/sources/cointelegraph.png",
      url: "https://cointelegraph.com/"
    },
    {
      name: "CoinDesk",
      logo: "/images/sources/coindesk.png",
      url: "https://www.coindesk.com/"
    },
    {
      name: "The Crypto Basic",
      logo: "/images/sources/cryptobasic.png",
      url: "https://thecryptobasic.com/"
    },
    {
      name: "Crypto News",
      logo: "/images/sources/cryptonews.png",
      url: "https://cryptonews.com/"
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="py-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-16"
          >
            {lang === 'tr' ? 'Haber Kaynakları' : 'News Sources'}
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
          >
            {sources.map((source) => (
              <motion.a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[200px] hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <Image
                  src={source.logo}
                  alt={source.name}
                  width={200}
                  height={100}
                  className="w-full h-auto object-contain filter dark:invert"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default NewsSources; 