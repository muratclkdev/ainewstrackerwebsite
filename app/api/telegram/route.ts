import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Rate limiting için basit bir in-memory store
const rateLimit = new Map<string, number[]>();

// Rate limit ayarları
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 dakika
const MAX_REQUESTS = 5; // 1 dakikada maksimum 5 istek

export async function POST() {
  // Token ve Chat ID kontrolü
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Telegram credentials are missing');
    return NextResponse.json(
      { 
        message: 'Telegram yapılandırması eksik',
        error: 'Configuration error'
      },
      { status: 500 }
    );
  }

  try {
    // IP adresi al
    const headersList = await headers();
    const forwardedFor = headersList.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';
    
    // Rate limiting kontrolü
    const now = Date.now();
    const userRequests = rateLimit.get(ip) || [];
    const recentRequests = userRequests.filter((time: number) => now - time < RATE_LIMIT_WINDOW);
    
    if (recentRequests.length >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      );
    }
    
    // Yeni isteği kaydet
    recentRequests.push(now);
    rateLimit.set(ip, recentRequests);

    console.log('Generating Telegram invite link...');
    
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/createChatInviteLink`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          member_limit: 1,
          expire_date: Math.floor(Date.now() / 1000) + 86400, // 24 saat geçerli
        }),
      }
    );

    const data = await response.json();
    console.log('Telegram API response:', data);

    if (!data.ok) {
      console.error('Telegram API error:', data);
      throw new Error(data.description || 'Telegram API yanıt vermedi');
    }

    return NextResponse.json({ 
      success: true,
      inviteLink: data.result.invite_link 
    });

  } catch (error) {
    console.error('Telegram invite link error:', error);
    return NextResponse.json(
      { 
        message: 'Davet linki oluşturulamadı',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 