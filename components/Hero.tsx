import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (feedbackMessage && feedbackRef.current) {
      feedbackRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [feedbackMessage]);

  const handleTelegramClick = () => {
    // Anında geri bildirim
    setFeedbackMessage('Geri bildiriminiz alındı.');
    // 1 saniye sonra modal göster
    setTimeout(() => setShowModal(true), 1000);
  };

  const handleModalConfirm = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/telegram', { method: 'POST' });
      const data = await res.json();
      if (res.ok && data.success) {
        // Tek kullanımlık davet linkini query parametresi olarak göndererek yönlendir
        router.push(`/telegram-invite?invite=${encodeURIComponent(data.inviteLink)}`);
      } else {
        alert('Davet linki alınamadı: ' + (data.error || 'Bilinmeyen hata'));
      }
    } catch (error: any) {
      alert('Hata oluştu: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Sol Kısım - Başlık ve Buton */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              AI News Tracker
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-300">
              Kripto para haberleri yapay zeka destekli takip sistemi
            </p>
            <motion.button
              onClick={handleTelegramClick}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Telegram'a Katıl
            </motion.button>
          </motion.div>

          {/* Sağ Kısım - Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative w-full max-w-md mx-auto"
          >
            <div className="relative w-full aspect-[9/16] rounded-[38px] overflow-hidden shadow-2xl">
              <Image
                src="/images/screenshot.jpg"
                alt="AI News Tracker Screenshot"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feedback Message */}
      {feedbackMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
        >
          {feedbackMessage}
        </motion.div>
      )}

      {/* Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md w-full"
          >
            <h3 className="text-xl font-bold mb-4">Geri Bildirim</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Geri bildiriminiz bizim için önemli. Davet linkinizi almak için lütfen 'Anladım' butonuna basın.
            </p>
            <motion.button
              onClick={handleModalConfirm}
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Yükleniyor...' : 'Anladım'}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero; 