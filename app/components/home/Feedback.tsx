"use client";

import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants';
import { Lang } from '../../types';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FeedbackProps {
  lang: Lang;
  showFeedbackMessage: boolean;
  content: {
    [key in Lang]: {
      feedbackTitle: string;
      feedbackSuccess: string;
      feedback: string;
      feedbackDesc: string;
      feedbackName: string;
      feedbackEmail: string;
      feedbackMessage: string;
      feedbackSubmit: string;
    }
  };
}

export const Feedback = ({ lang, showFeedbackMessage, content }: FeedbackProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setFormData({ name: '', email: '', message: '' });
      alert(content[lang].feedbackSuccess);
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending feedback');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="feedback-section py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            {content[lang].feedback}
          </h2>
          <p className="text-center mb-12 text-gray-400">
            {content[lang].feedbackDesc}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {content[lang].feedbackName}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {content[lang].feedbackEmail}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {content[lang].feedbackMessage}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? '...' : content[lang].feedbackSubmit}
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {showFeedbackMessage && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{content[lang].feedbackSuccess}</span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Feedback; 