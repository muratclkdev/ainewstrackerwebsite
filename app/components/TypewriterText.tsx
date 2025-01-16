import { useState, useEffect } from 'react';

export const TypewriterText = () => {
  const [text, setText] = useState('');
  const fullText = 'AI News Tracker';
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const period = 2000;
  const [delta, setDelta] = useState(100);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Mobil cihaz kontrolü
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setText(fullText);
      return;
    }

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, isDeleting, isMobile]);

  const tick = () => {
    if (isMobile) return;

    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
      {text}
      {!isMobile && <span className="animate-blink">|</span>}
    </span>
  );
}; 