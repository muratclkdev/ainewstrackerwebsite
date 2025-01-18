import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

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