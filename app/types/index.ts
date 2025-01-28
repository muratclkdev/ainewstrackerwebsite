export type Lang = 'tr' | 'en';
export type Theme = 'light' | 'dark';

export type ContentType = {
  [key in Lang]: {
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
    telegram: string;
    binancePay: string;
    alphaAccess: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    feedback: string;
    feedbackDesc: string;
    feedbackName: string;
    feedbackEmail: string;
    feedbackMessage: string;
    feedbackSubmit: string;
    feedbackSuccess: string;
    lightMode: string;
    darkMode: string;
    understood: string;
    binanceDonate: string;
    metamaskDonate: string;
  }
};

declare global {
  interface Window {
    adsbygoogle: Record<string, any>[];
    ethereum: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      selectedAddress: string;
    };
  }
} 