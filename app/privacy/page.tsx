"use client";

import PrivacyPage from '../components/privacy/PrivacyPage';
import { useState } from 'react';
import type { Lang } from '../types';

const content = {
  tr: {
    title: "Gizlilik Politikası",
    dataCollection: "Veri Toplama",
    dataCollectionDesc: [
      "Sitemizi ziyaret ettiğinizde temel analitik veriler toplanır",
      "Geri bildirim formunda paylaştığınız bilgiler",
      "Tarayıcı ve cihaz bilgileri",
      "Çerez tercihleri"
    ],
    dataUsage: "Veri Kullanımı",
    dataUsageDesc: [
      "Hizmet kalitesini artırmak için analiz",
      "Kullanıcı deneyimini iyileştirme",
      "Teknik sorunları çözme",
      "Yasal yükümlülükleri yerine getirme"
    ],
    security: "Güvenlik",
    securityDesc: [
      "SSL şifreleme ile güvenli veri transferi",
      "Düzenli güvenlik güncellemeleri",
      "Sınırlı veri erişimi",
      "Endüstri standardı güvenlik protokolleri"
    ],
    cookies: "Çerezler",
    cookiesDesc: [
      "Oturum yönetimi için gerekli çerezler",
      "Analitik amaçlı çerezler",
      "Tercih hatırlama çerezleri",
      "Üçüncü taraf hizmet çerezleri"
    ]
  },
  en: {
    title: "Privacy Policy",
    dataCollection: "Data Collection",
    dataCollectionDesc: [
      "Basic analytics data when visiting our site",
      "Information shared in feedback forms",
      "Browser and device information",
      "Cookie preferences"
    ],
    dataUsage: "Data Usage",
    dataUsageDesc: [
      "Analysis to improve service quality",
      "Enhancing user experience",
      "Resolving technical issues",
      "Fulfilling legal obligations"
    ],
    security: "Security",
    securityDesc: [
      "Secure data transfer with SSL encryption",
      "Regular security updates",
      "Limited data access",
      "Industry-standard security protocols"
    ],
    cookies: "Cookies",
    cookiesDesc: [
      "Essential cookies for session management",
      "Analytics cookies",
      "Preference remembering cookies",
      "Third-party service cookies"
    ]
  }
};

export default function Privacy() {
  const [currentLang, setCurrentLang] = useState<Lang>("en");

  return (
    <>
      <PrivacyPage lang={currentLang} content={content} onLanguageChange={setCurrentLang} />
    </>
  );
}