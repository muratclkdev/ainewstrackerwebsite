"use client";

import Script from 'next/script';

interface TwitterEventProps {
  eventId: string;
  conversionId?: string | undefined;
}

export const TwitterEvent = ({ eventId, conversionId }: TwitterEventProps) => {
  return (
    <Script id={`twitter-event-${eventId}`} strategy="afterInteractive">
      {`
        twq('event', '${eventId}', {
          conversion_id: ${conversionId ? `'${conversionId}'` : 'null'}
        });
      `}
    </Script>
  );
};

export default TwitterEvent;