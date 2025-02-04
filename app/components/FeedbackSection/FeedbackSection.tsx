"use client";

import { useState, useRef } from 'react';
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
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      try {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        formRef.current.reset();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
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
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder={texts[lang].feedbackEmail}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder={texts[lang].feedbackMessage}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              {texts[lang].feedbackSubmit}
            </button>
          </form>

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