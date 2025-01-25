"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { content } from '../../content';
import type { Lang } from '../../types';

interface AboutSectionProps {
  lang: Lang;
}

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

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section className="py-20 bg-[#0f1117]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Powered by ChatGPT
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            {content[lang].poweredByDesc}
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
}; 