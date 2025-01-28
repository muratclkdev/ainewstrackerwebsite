"use client";

import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants';
import Image from "next/image";
import { useState } from "react";
import { Lang } from '../../types';

interface HeroProps {
  lang: Lang;
  handleTelegramClick: () => void;
  content: {
    [key in Lang]: {
      title: string;
      description: string;
      telegram: string;
    }
  };
}

export const Hero = ({ lang, handleTelegramClick, content }: HeroProps) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="hero-section py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            >
              {content[lang].title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300"
            >
              {content[lang].description}
            </motion.p>
            <motion.button
              variants={fadeInUp}
              onClick={handleTelegramClick}
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            >
              {content[lang].telegram}
            </motion.button>
          </div>
          <div className="flex-1">
            <div className="mockup-container">
              <div className="iphone-mockup">
                <Image
                  src="/images/screenshot.jpg"
                  alt="AI News Tracker Screenshot"
                  fill
                  className="rounded-[38px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero; 