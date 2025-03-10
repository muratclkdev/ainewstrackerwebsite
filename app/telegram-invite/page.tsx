"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

function TelegramInviteContent() {
  const searchParams = useSearchParams();
  const inviteLink = searchParams ? searchParams.get('invite') : null;

  return (
    <div className="min-h-screen bg-background pt-24 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-cardbg rounded-xl shadow-lg p-8 text-center"
      >
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Telegram Davet Linkiniz
        </h1>
        {inviteLink ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href={inviteLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Kanala Katılmak için tıklayın
            </a>
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-text/80"
          >
            Davet linki bulunamadı.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

export default function TelegramInvitePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    }>
      <TelegramInviteContent />
    </Suspense>
  );
}