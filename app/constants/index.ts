export const walletAddresses = {
  BTC: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
  ETH: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
  BNB: 'bnb1grpf0955h0ykzq3ar5nmum7y6gdfl6lxfn46h2',
  USDT: 'TYsbWxpqPZhpjfJhWHNR2XQTYm24VEz1p1',
  SOL: '8ZUmRXsphHp5c6ZMc3SqYJ2pEop8x4fVyojhJ6ZHyGE7',
  XRP: 'rEb8TK3gBgk5auZkwc6sHnwrGVJH8DuaLh',
  TRX: 'TYsbWxpqPZhpjfJhWHNR2XQTYm24VEz1p1'
};

export const BINANCE_PAY_ID = '40173249';

export const fadeInUp = {
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

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}; 