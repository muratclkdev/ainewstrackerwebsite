"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { content } from '../../content';
import type { Lang } from '../../types';
import { useTheme } from 'next-themes';

interface FeedbackSectionProps {
  lang: Lang;
}

const fadeInUp = {
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

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({ lang }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const template_params = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        template_params,
        'RuTlqyGrtfjYDeqgt'
      );
      setShowFeedbackMessage(true);
      setTimeout(() => setShowFeedbackMessage(false), 3000);
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      alert(lang === 'tr' ? 'Bir hata oluştu. Lütfen tekrar deneyin.' : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="feedback" className="py-20 bg-[#0f1117]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-white">{content[lang].feedback}</h2>
          <p className="text-gray-300 mb-12">{content[lang].feedbackDesc}</p>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder={content[lang].feedbackName}
                required
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder={content[lang].feedbackEmail}
                required
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder={content[lang].feedbackMessage}
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {content[lang].feedbackSubmit}
            </button>
          </form>
          {showFeedbackMessage && (
            <div className="mt-6 text-green-500">
              {content[lang].feedbackSuccess}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}; 