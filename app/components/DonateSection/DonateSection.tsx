import type { Lang } from '../../types';

interface DonateSectionProps {
  lang: Lang;
}

const texts = {
  tr: {
    donate: "Bağış Yap",
    buyMeACoffee: "Bana Bir Kahve Ismarla",
    cryptoDonate: "Kripto ile Bağış Yap",
    binanceDonate: "Binance ile Bağış Yap",
    metamaskDonate: "MetaMask ile Bağış Yap",
    binancePay: "Binance Pay ile Bağış Yap"
  },
  en: {
    donate: "Donate",
    buyMeACoffee: "Buy Me A Coffee",
    cryptoDonate: "Donate with Crypto",
    binanceDonate: "Donate with Binance",
    metamaskDonate: "Donate with MetaMask",
    binancePay: "Donate with Binance Pay"
  }
};

export default function DonateSection({ lang }: DonateSectionProps) {
  // ... geri kalan kod aynı kalacak, sadece content[lang] yerine texts[lang] kullanılacak
} 