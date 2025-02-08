"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import type { Lang } from '../../types';
import { useTheme } from 'next-themes';

// Turnstile için tip tanımlaması
declare global {
  interface Window {
    turnstile?: {
      reset: () => void;
      render: (container: string | HTMLElement, options: any) => void;
    };
    onloadTurnstileCallback?: () => void;
  }
}

interface FeedbackSectionProps {
  lang: Lang;
}

const texts = {
  tr: {
    feedback: "Geri Bildirim",
    feedbackDesc: "Görüşlerinizi bizimle paylaşın",
    feedbackName: "İsim",
    feedbackEmail: "E-posta",
    feedbackMessage: "Mesaj",
    feedbackSubmit: "Gönder",
    feedbackSuccess: "Geri bildiriminiz için teşekkürler!",
    invalidEmail: "Lütfen geçerli bir e-posta adresi giriniz (@gmail.com, @outlook.com, @hotmail.com, @yahoo.com)",
    verificationError: "Lütfen doğrulamayı tamamlayın"
  },
  en: {
    feedback: "Feedback",
    feedbackDesc: "Share your thoughts with us",
    feedbackName: "Name",
    feedbackEmail: "Email",
    feedbackMessage: "Message",
    feedbackSubmit: "Submit",
    feedbackSuccess: "Thank you for your feedback!",
    invalidEmail: "Please enter a valid email address (@gmail.com, @outlook.com, @hotmail.com, @yahoo.com)",
    verificationError: "Please complete the verification"
  }
};

const ALLOWED_EMAIL_DOMAINS = [
  'gmail.com',
  'outlook.com',
  'hotmail.com',
  'yahoo.com'
];

export default function FeedbackSection({ lang }: FeedbackSectionProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const PUBLIC_KEY = "RuTlqyGrtfjYDeqgt";

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);

    // Turnstile script'ini yükle
    const script = document.createElement('script');
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback";
    script.async = true;
    script.defer = true;

    // Turnstile yüklendiğinde çağrılacak callback
    window.onloadTurnstileCallback = () => {
      if (turnstileRef.current && window.turnstile) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
          callback: (token: string) => {
            setTurnstileToken(token);
          },
          theme: theme === 'dark' ? 'dark' : 'light'
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.onloadTurnstileCallback;
    };
  }, [theme]);

  const validateEmail = (email: string) => {
    const domain = email.split('@')[1]?.toLowerCase();
    return ALLOWED_EMAIL_DOMAINS.includes(domain);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      setError(texts[lang].verificationError);
      return;
    }

    try {
      // Turnstile token'ını doğrula
      const verifyResponse = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: turnstileToken }),
      });

      const verifyData = await verifyResponse.json();

      if (!verifyData.success) {
        setError(texts[lang].verificationError);
        return;
      }

      // EmailJS ile form gönderimi
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        formRef.current?.reset();
        // Turnstile widget'ını sıfırla
        if (window.turnstile) {
          window.turnstile.reset();
        }
        setTurnstileToken(null);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError('Bilinmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
  };

  return (
    <section className="py-20 bg-cardbg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            {texts[lang].feedback}
          </h2>
          <p className="text-center mb-12 text-gray-600 dark:text-gray-300">
            {texts[lang].feedbackDesc}
          </p>
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="from_name"
                placeholder={texts[lang].feedbackName}
                required
                className="w-full bg-cardbg text-text border border-border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-buttonbg"
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
                placeholder={texts[lang].feedbackEmail}
                required
                className="w-full bg-cardbg text-text border border-border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-buttonbg"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder={texts[lang].feedbackMessage}
                required
                rows={5}
                className="w-full bg-cardbg text-text border border-border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-buttonbg"
              />
            </div>
            <div className="flex justify-center mb-4">
              <div ref={turnstileRef}></div>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
            >
              {texts[lang].feedbackSubmit}
            </button>
          </form>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg text-center"
            >
              {error}
            </motion.div>
          )}

          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg text-center"
            >
              {texts[lang].feedbackSuccess}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 