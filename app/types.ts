export type Lang = 'tr' | 'en';
export type Theme = 'light' | 'dark';

export interface ContentType {
  [key: string]: {
    title: string;
    description: string;
    telegram: string;
    telegramModalTitle: string;
    telegramModalDescription: string;
    cancel: string;
    feedbackSuccess: string;
    feedback: string;
    feedbackDesc: string;
    understood: string;
    github: string;
    features: string;
    allInOne: string;
    allInOneDesc: string;
    gptTitle: string;
    gptDesc: string;
    realTimeTitle: string;
    realTimeDesc: string;
    customTitle: string;
    customDesc: string;
    team: string;
    role: string;
    rights: string;
    privacy: string;
    about: string;
    newsSources: string;
    newsSourcesDesc: string;
    poweredBy: string;
    poweredByDesc: string;
    aboutContent: string[];
    donate: string;
    buyMeACoffee: string;
    cryptoDonate: string;
    factualTitle: string;
    factualDesc: string;
    investTitle: string;
    investDesc: string;
    listingTitle: string;
    listingDesc: string;
    summaryTitle: string;
    summaryDesc: string;
    binancePay: string;
    alphaAccess: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    feedbackName: string;
    feedbackEmail: string;
    feedbackMessage: string;
    feedbackSubmit: string;
    lightMode: string;
    darkMode: string;
    binanceDonate: string;
    metamaskDonate: string;
    founder: string;
    loading: string;
  }
}

export interface TelegramResponse {
  success: boolean;
  inviteLink?: string;
}

declare global {
  interface Window {
    adsbygoogle: Record<string, any>[];
    ethereum: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      selectedAddress: string;
    };
  }
}

interface ContentValues {
  title: string;
  description: string;
  github: string;
  features: string;
  gptTitle: string;
  gptDesc: string;
  realTimeTitle: string;
  realTimeDesc: string;
  customTitle: string;
  customDesc: string;
  team: string;
  role: string;
  rights: string;
  privacy: string;
  about: string;
  newsSources: string;
  newsSourcesDesc: string;
  poweredBy: string;
  poweredByDesc: string;
  aboutContent: string[];
  donate: string;
  buyMeACoffee: string;
  cryptoDonate: string;
  factualTitle: string;
  factualDesc: string;
  investTitle: string;
  investDesc: string;
  listingTitle: string;
  listingDesc: string;
  summaryTitle: string;
  summaryDesc: string;
  binancePay: string;
  alphaAccess: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  feedbackName: string;
  feedbackEmail: string;
  feedbackMessage: string;
  feedbackSubmit: string;
  lightMode: string;
  darkMode: string;
  binanceDonate: string;
  metamaskDonate: string;
  founder: string;
} 