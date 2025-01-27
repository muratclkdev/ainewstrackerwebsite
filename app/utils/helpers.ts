import { walletAddresses } from '../constants';

export const handleCryptoSelect = (coin: keyof typeof walletAddresses) => {
  const address = walletAddresses[coin];
  navigator.clipboard.writeText(address);
  alert(`${coin} adresi kopyalandı: ${address}`);
};

export const handleDexRedirect = (dex: '1inch' | 'uniswap') => {
  const dexUrls = {
    '1inch': 'https://app.1inch.io/',
    'uniswap': 'https://app.uniswap.org/',
  } as const;
  window.open(dexUrls[dex], '_blank');
}; 