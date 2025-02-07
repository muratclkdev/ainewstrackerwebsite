"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button 
        className="relative p-2.5 rounded-xl bg-buttonbg/80 text-buttontext hover:bg-buttonhover transition-all"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2.5 rounded-xl bg-buttonbg/80 text-buttontext hover:bg-buttonhover transition-all"
      title={theme === "dark" ? "Aydınlık Modu Etkinleştir" : "Karanlık Modu Etkinleştir"}
      aria-label="Toggle theme"
    >
      <div className="relative">
        <Sun
          className="h-5 w-5 transition-all"
          style={{
            opacity: theme === "dark" ? 0 : 1,
            transform: theme === "dark" ? "translateY(-10px) rotate(30deg)" : "none"
          }}
        />
        <Moon
          className="absolute top-0 h-5 w-5 transition-all"
          style={{
            opacity: theme === "dark" ? 1 : 0,
            transform: theme === "dark" ? "none" : "translateY(10px) rotate(-30deg)"
          }}
        />
      </div>
    </button>
  );
}

export default ThemeToggle; 