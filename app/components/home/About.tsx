"use client";

import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants';
import { Lang } from '../../types';
import Image from "next/image";
import Link from "next/link";

interface AboutProps {
  lang: Lang;
  content: {
    [key in Lang]: {
      about: string;
      aboutContent: string[];
      team: string;
      role: string;
      buyMeACoffee: string;
      binanceDonate: string;
      metamaskDonate: string;
    }
  };
}

export const About = ({ lang, content }: AboutProps) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="about-section py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          {content[lang].about}
        </h2>
        <motion.div 
          variants={fadeInUp}
          className="max-w-4xl mx-auto about-card about-glow"
        >
          <div className="prose prose-invert max-w-none">
            {content[lang].aboutContent.map((paragraph, index) => (
              <motion.p 
                key={index} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.2
                    }
                  }
                }}
                className="about-paragraph"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
        <h2 className="text-4xl font-bold text-center mt-16 mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          {content[lang].team}
        </h2>
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-700 text-center max-w-sm">
            <Link 
              href="https://github.com/muratclkdev" 
              target="_blank"
              className="block group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://avatars.githubusercontent.com/muratclkdev" 
                  alt="Murat Çelik"
                  fill
                  className="rounded-full object-cover border-4 border-blue-500 group-hover:border-purple-500 transition-colors duration-300"
                  priority
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">Murat Çelik</h3>
              <p className="text-blue-400 mb-8">{content[lang].role}</p>
            </Link>
            <div className="space-y-4 mt-8 pt-8 border-t border-gray-700">
              <Link 
                href="https://www.buymeacoffee.com/muratclkdev" 
                target="_blank"
                className="flex items-center justify-center gap-2 bg-[#FFDD00] hover:bg-[#FFDD00]/90 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg w-full"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.501-.297-.302-.393-.77-.177-1.146.154-.267.415-.456.692-.58.36-.162.737-.284 1.123-.366 1.075-.238 2.189-.331 3.287-.37 1.218-.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
                </svg>
                {content[lang].buyMeACoffee}
              </Link>
              <button
                onClick={() => alert('Binance ile Kripto Bağışla')}
                className="flex items-center justify-center gap-2 bg-[#F0B90B] hover:bg-[#F0B90B]/90 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg w-full mb-4"
              >
                <Image
                  src="https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png"
                  alt="Binance"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  unoptimized
                />
                {content[lang].binanceDonate}
              </button>
              <button
                onClick={() => alert('Metamask ile Kripto Bağışla')}
                className="flex items-center justify-center gap-2 bg-[#E2761B] hover:bg-[#E2761B]/90 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg w-full"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png"
                  alt="Metamask"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  unoptimized
                />
                {content[lang].metamaskDonate}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About; 