"use client";

import Link from 'next/link';
import { content } from '../../content';
import type { Lang } from '../../types';

interface FooterProps {
  lang: Lang;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="py-8 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 AI News Tracker. {content[lang].rights}
          </div>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {content[lang].privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}; 