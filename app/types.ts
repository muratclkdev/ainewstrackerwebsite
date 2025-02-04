export type Lang = 'tr' | 'en';
export type Theme = 'light' | 'dark';

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