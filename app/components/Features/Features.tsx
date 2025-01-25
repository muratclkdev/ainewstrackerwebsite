"use client";

import { motion } from 'framer-motion';
import { content } from '../../content';
import type { Lang } from '../../types';
import { 
  CheckCircleIcon, 
  ChartBarIcon, 
  ListBulletIcon, 
  NewspaperIcon 
} from '@heroicons/react/24/outline';

interface FeaturesProps {
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

export const Features: React.FC<FeaturesProps> = ({ lang }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          {content[lang].features}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="feature-card p-6 rounded-xl"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-full mr-4">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{content[lang].factualTitle}</h3>
            </div>
            <p className="text-gray-400">{content[lang].factualDesc}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="feature-card p-6 rounded-xl"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-full mr-4">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{content[lang].investTitle}</h3>
            </div>
            <p className="text-gray-400">{content[lang].investDesc}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="feature-card p-6 rounded-xl"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-full mr-4">
                <ListBulletIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{content[lang].listingTitle}</h3>
            </div>
            <p className="text-gray-400">{content[lang].listingDesc}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="feature-card p-6 rounded-xl"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-full mr-4">
                <NewspaperIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{content[lang].summaryTitle}</h3>
            </div>
            <p className="text-gray-400">{content[lang].summaryDesc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 