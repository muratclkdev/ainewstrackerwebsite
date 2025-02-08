"use client";

import Link from 'next/link';
import type { Lang } from '../../types';

interface FooterProps {
  lang: Lang;
}

const texts = {
  tr: {
    sponsorship: "Sponsorluk ve işbirliği için:",
    rights: "Tüm hakları saklıdır",
    privacy: "Gizlilik Politikası"
  },
  en: {
    sponsorship: "For sponsorship and communication:",
    rights: "All rights reserved",
    privacy: "Privacy Policy"
  }
};

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="py-8 bg-headerbg border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 AI News Tracker. {texts[lang].rights}
          </div>
          <div className="flex gap-4">
            <span className="text-gray-400">{texts[lang].sponsorship}</span>
            <a 
              href="mailto:iletisim@ainewstracker.xyz" 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              iletisim@ainewstracker.xyz
            </a>
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