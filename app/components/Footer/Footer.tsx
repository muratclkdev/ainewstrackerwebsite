"use client";

import Link from 'next/link';
import type { Lang } from '../../types';

interface FooterProps {
  lang: Lang;
}

const texts = {
  tr: {
    rights: "Tüm hakları saklıdır",
    privacy: "Gizlilik Politikası",
    team: "Takım",
    role: "Kurucu & Geliştirici",
    founder: "Murat Çelik"
  },
  en: {
    rights: "All rights reserved",
    privacy: "Privacy Policy",
    team: "Team",
    role: "Founder & Developer",
    founder: "Murat Celik"
  }
};

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="py-8 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 AI News Tracker. {texts[lang].rights}
          </div>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {texts[lang].privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 