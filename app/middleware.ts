import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Güvenlik başlıkları
  const response = NextResponse.next();
  
  // XSS koruması
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Clickjacking koruması
  response.headers.set('X-Frame-Options', 'DENY');
  
  // MIME type sniffing koruması
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // Strict Transport Security
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  
  // Referrer Policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' *.yandex.ru *.emailjs.com static.ads-twitter.com analytics.twitter.com *.twitter.com;
      connect-src 'self' *.twitter.com analytics.twitter.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https: blob:;
      font-src 'self';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      block-all-mixed-content;
      upgrade-insecure-requests;
    `.replace(/\s+/g, ' ').trim()
  );

  return response;
}

// Middleware'in çalışacağı yollar
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};