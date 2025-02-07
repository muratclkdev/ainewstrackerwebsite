"use client";

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../constants';
import type { Lang } from '../../types';

interface AllInOneProps {
  lang: Lang;
}

const texts = {
  tr: {
    allInOne: "Tüm Özellikler",
    allInOneDesc: "Hepsini tek yerden yönetebilme özelliği ile, platformumuzda neler yapabileceğinizi keşfedin."
  },
  en: {
    allInOne: "All In One",
    allInOneDesc: "Discover what you can do on our platform, all managed in one place."
  }
};

export default function AllInOne({ lang }: AllInOneProps) {
  return (
    <div className="bg-cardbg text-text">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 relative overflow-hidden"
      >
        {/* Arka plan efektleri */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 dark:from-blue-600/10 dark:to-purple-600/10" 
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        {/* Blur efektleri */}
        <motion.div 
          className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [0.9, 1.1, 0.9],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div 
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [0.9, 1.1, 0.9],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }
          }}
        />

        <div className="container mx-auto px-4 relative">
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-1"
          >
            <div className="bg-cardbg backdrop-blur-xl rounded-[22px] p-8 md:p-12 relative overflow-hidden group hover:bg-hoverbg transition-all duration-500">
              {/* İkon ve başlık */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <motion.div 
                  className="relative"
                  animate={{
                    y: [-10, 10, -10],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                    whileHover={{ scale: 1.2, opacity: 0.8 }}
                  />
                  <motion.div 
                    className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-full transform group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </motion.div>
                </motion.div>
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-text text-center md:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {texts[lang].allInOne}
                </motion.h2>
              </div>

              {/* Açıklama */}
              <motion.p 
                className="text-text/80 text-center text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {texts[lang].allInOneDesc}
              </motion.p>

              {/* Dekoratif çizgiler */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 