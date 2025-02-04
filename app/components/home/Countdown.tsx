"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants';
import { Lang } from '../../types';

interface CountdownProps {
  targetDate: Date;
  lang?: Lang;
}

export const Countdown = ({ targetDate, lang = 'tr' }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-blue-900/90 backdrop-blur-sm py-2 border-b border-blue-800/50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white text-lg mb-2">
          {lang === 'tr' ? 'Alpha Erişimine Kalan Süre' : 'Time Left for Alpha Access'}
        </h2>
        <div className="flex justify-center items-center gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold">{timeLeft.days}</div>
            <div className="text-sm opacity-80">{lang === 'tr' ? 'Gün' : 'Days'}</div>
          </div>
          <div className="text-3xl font-bold">:</div>
          <div className="text-center">
            <div className="text-3xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm opacity-80">{lang === 'tr' ? 'Saat' : 'Hours'}</div>
          </div>
          <div className="text-3xl font-bold">:</div>
          <div className="text-center">
            <div className="text-3xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm opacity-80">{lang === 'tr' ? 'Dakika' : 'Minutes'}</div>
          </div>
          <div className="text-3xl font-bold">:</div>
          <div className="text-center">
            <div className="text-3xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm opacity-80">{lang === 'tr' ? 'Saniye' : 'Seconds'}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Countdown; 