import { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 80, delay = 2000, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Start typing after delay
    const delayTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    
    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    // Typing effect
    if (hasStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, hasStarted]);

  useEffect(() => {
    // Cursor blink effect
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span className={`inline-block w-0.5 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
        |
      </span>
    </span>
  );
};

export default TypingEffect;
