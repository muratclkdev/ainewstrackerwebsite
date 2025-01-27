"use client";

import { Lang } from '../../types';
import Link from "next/link";

interface FooterProps {
  lang: Lang;
  content: {
    [key in Lang]: {
      rights: string;
      privacy: string;
    }
  };
}

export const Footer = ({ lang, content }: FooterProps) => {
  return (
    <footer className="footer py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            {content[lang].rights}
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
              {content[lang].privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 