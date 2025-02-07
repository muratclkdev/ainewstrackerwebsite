"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Lang } from "@/app/types";

interface ThemeToggleProps {
  lang?: Lang;
}

const texts = {
  tr: {
    lightMode: "Aydınlık Modu Etkinleştir",
    darkMode: "Karanlık Modu Etkinleştir"
  },
  en: {
    lightMode: "Enable Light Mode",
    darkMode: "Enable Dark Mode"
  }
};

export default function ThemeToggle({ lang = 'tr' }: ThemeToggleProps) {
  const { theme, setTheme, systemTheme } = useTheme();

  // Sayfa yüklendiğinde sistem temasını kontrol et
  useEffect(() => {
    // systemTheme undefined olabilir, bu yüzden kontrol ediyoruz
    if (systemTheme && !theme) {
      setTheme(systemTheme);
    }
  }, [systemTheme, theme, setTheme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Tema henüz yüklenmediyse veya sistem teması alınıyorsa loading durumu göster
  if (!theme) {
    return (
      <motion.button
        className="relative p-2.5 rounded-xl bg-buttonbg/80 text-buttontext backdrop-blur-sm transition-all duration-300 border border-border/30 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-lg"
        disabled
      >
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <SunIcon className="w-5 h-5 opacity-50" />
        </motion.div>
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl bg-buttonbg/80 text-buttontext hover:bg-buttonhover backdrop-blur-sm transition-all duration-300 border border-border/30 focus:outline-none focus:ring-2 focus:ring-primary/50 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
      title={theme === "light" ? texts[lang].darkMode : texts[lang].lightMode}
      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            key="moon"
            initial={{ y: 10, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -10, opacity: 0, rotate: 30 }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <MoonIcon className="w-5 h-5" />
            <motion.div
              className="absolute inset-0 bg-yellow-400/20 dark:bg-blue-400/20 rounded-full blur-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: -10, opacity: 0, rotate: 30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: -30 }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <SunIcon className="w-5 h-5" />
            <motion.div
              className="absolute inset-0 bg-yellow-400/20 dark:bg-blue-400/20 rounded-full blur-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
} 