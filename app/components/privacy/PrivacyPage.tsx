"use client";

import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { Countdown } from "../home/Countdown";

export const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header lang="tr" setLang={() => {}} theme="dark" setTheme={() => {}} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Gizlilik Politikası</h1>
        <p className="mb-8">Gizlilik politikası içeriği burada yer alacak.</p>
        <Countdown targetDate={new Date('2025-01-01T00:00:00')} />
      </main>
      <Footer lang="tr" content={{ tr: { rights: "© 2025 AI News Tracker. Tüm hakları saklıdır.", privacy: "Gizlilik Politikası" }, en: { rights: "© 2025 AI News Tracker. All rights reserved.", privacy: "Privacy Policy" } }} />
    </div>
  );
};

export default PrivacyPage; 