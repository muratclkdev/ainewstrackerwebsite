"use client";

import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants';
import { Lang } from '../../types';
import Image from "next/image";
import Link from "next/link";

interface NewsSourcesProps {
  lang: Lang;
  content: {
    [key in Lang]: {
      newsSources: string;
      newsSourcesDesc: string;
    }
  };
  sources: Array<{
    name: string;
    logo: string;
    url: string;
  }>;
}

export const NewsSources = ({ lang, content, sources }: NewsSourcesProps) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="news-section py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          {content[lang].newsSources}
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          {content[lang].newsSourcesDesc}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {sources.map((source) => (
            <motion.div
              key={source.name}
              variants={fadeInUp}
              className="group relative"
            >
              <Link
                href={source.url}
                target="_blank"
                className="block bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl hover:scale-105 transition-all duration-300 h-[180px] w-full border border-gray-800/50 hover:border-blue-500/50"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={source.logo}
                      alt={source.name}
                      fill
                      className="object-contain news-source-logo group-hover:brightness-110 transition-all duration-300 p-2"
                      sizes="(max-width: 768px) 96px, 96px"
                      priority={source.name === 'Crypto.news'}
                      quality={100}
                    />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors text-center">
                    {source.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default NewsSources; 