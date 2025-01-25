"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { content } from '../../content';
import type { Lang } from '../../types';

interface CountdownTimerProps {
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

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ lang }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-02-14T23:59:59');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="fixed top-0 left-0 right-0 z-50 countdown-section border-b border-gray-800"
    >
      <div className="container mx-auto px-4 py-2">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2 text-white">
            {content[lang].alphaAccess}
          </h3>
          <div className="flex justify-center items-center gap-6">
            <div className="text-center">
              <span className="text-2xl font-bold text-white">{timeLeft.days}</span>
              <p className="text-xs text-gray-200">{content[lang].days}</p>
            </div>
            <div className="text-xl font-bold text-gray-300">:</div>
            <div className="text-center">
              <span className="text-2xl font-bold text-white">{timeLeft.hours}</span>
              <p className="text-xs text-gray-200">{content[lang].hours}</p>
            </div>
            <div className="text-xl font-bold text-gray-300">:</div>
            <div className="text-center">
              <span className="text-2xl font-bold text-white">{timeLeft.minutes}</span>
              <p className="text-xs text-gray-200">{content[lang].minutes}</p>
            </div>
            <div className="text-xl font-bold text-gray-300">:</div>
            <div className="text-center">
              <span className="text-2xl font-bold text-white">{timeLeft.seconds}</span>
              <p className="text-xs text-gray-200">{content[lang].seconds}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 