"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import type { Lang } from '../../types';
import { useTheme } from 'next-themes';

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
    feedbackSuccess: "Geri bildiriminiz için teşekkürler!"
  },
  en: {
    feedback: "Feedback",
    feedbackDesc: "Share your thoughts with us",
    feedbackName: "Name",
    feedbackEmail: "Email",
    feedbackMessage: "Message",
    feedbackSubmit: "Submit",
    feedbackSuccess: "Thank you for your feedback!"
  }
};

export default function FeedbackSection({ lang }: FeedbackSectionProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  const PUBLIC_KEY = "RuTlqyGrtfjYDeqgt";

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
      setError('EmailJS yapılandırması eksik. Lütfen sistem yöneticisi ile iletişime geçin.');
      return;
    }

    if (formRef.current) {
      try {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formRef.current,
          PUBLIC_KEY
        );

        if (result.status === 200) {
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 3000);
          formRef.current.reset();
        } else {
          throw new Error(`EmailJS yanıt kodu: ${result.status}`);
        }
      } catch (error: any) {
        console.error('EmailJS Error:', error);
        const errorMessage = error?.message || error?.text || 'Bilinmeyen bir hata oluştu';
        setError(`Mesaj gönderilirken bir hata oluştu: ${errorMessage}. Lütfen daha sonra tekrar deneyin.`);
      }
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
                name="name"
                placeholder={texts[lang].feedbackName}
                required
                className="w-full bg-cardbg text-text border border-border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-buttonbg"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
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
            <button
              type="submit"
              className="px-6 py-2 bg-buttonbg text-buttontext rounded-lg font-medium hover:bg-buttonhover transition-all"
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