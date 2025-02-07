"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Lang } from '../../types';

interface CountdownTimerProps {
  lang: Lang;
}

const texts = {
  tr: {
    days: "Gün",
    hours: "Saat",
    minutes: "Dakika",
    seconds: "Saniye",
    alphaAccess: "Alpha Erişimi"
  },
  en: {
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    alphaAccess: "Alpha Access"
  }
};

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

export default function CountdownTimer({ lang }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-03-10T23:59:59');

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
      className="countdown-section"
    >
      <div className="countdown-content">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2 text-white/90">
              {texts[lang].alphaAccess}
            </h3>
            <div className="flex justify-center items-center gap-6">
              <TimeUnit value={timeLeft.days} label={texts[lang].days} />
              <Separator />
              <TimeUnit value={timeLeft.hours} label={texts[lang].hours} />
              <Separator />
              <TimeUnit value={timeLeft.minutes} label={texts[lang].minutes} />
              <Separator />
              <TimeUnit value={timeLeft.seconds} label={texts[lang].seconds} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="text-center">
    <span className="text-2xl font-bold text-white">{value}</span>
    <p className="text-xs text-white/80">{label}</p>
  </div>
);

const Separator = () => (
  <div className="text-xl font-bold text-white/50">:</div>
); 