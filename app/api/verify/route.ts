import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    console.log('Verify API çağrıldı');
    const { token } = await request.json();
    console.log('Alınan token:', token);
    console.log('Secret key:', process.env.TURNSTILE_SECRET_KEY);

    // Token yoksa hata döndür
    if (!token) {
      console.error('Token eksik');
      return NextResponse.json(
        { error: 'Token is required' },
        { status: 400 }
      );
    }

    console.log('Cloudflare API\'sine istek gönderiliyor...');
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const data = await response.json();
    console.log('Cloudflare API yanıtı:', data);

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error('Doğrulama başarısız:', data);
      return NextResponse.json(
        { error: 'Invalid token', details: data },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Turnstile doğrulama hatası:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error },
      { status: 500 }
    );
  }
} 