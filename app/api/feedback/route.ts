import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Rate limiting için basit bir in-memory store
const rateLimit = new Map<string, number[]>();

// Rate limit ayarları
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 saat
const MAX_REQUESTS = 3; // 1 saatte maksimum 3 feedback

export async function POST(request: Request) {
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
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Request body'i doğrula
    const body = await request.json();
    
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email formatını doğrula
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // İçerik uzunluğunu kontrol et
    if (body.message.length > 1000) {
      return NextResponse.json(
        { error: 'Message is too long' },
        { status: 400 }
      );
    }

    // Yeni isteği kaydet
    recentRequests.push(now);
    rateLimit.set(ip, recentRequests);

    // Feedback'i işle
    // ... feedback işleme kodu ...

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 