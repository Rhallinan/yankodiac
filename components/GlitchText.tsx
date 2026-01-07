import React, { useEffect, useState, useRef } from 'react';

interface GlitchTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  triggerOnMount?: boolean;
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  as: Tag = 'span', 
  className = '',
  triggerOnMount = true
}) => {
  const [displayText, setDisplayText] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (triggerOnMount) {
      playEffect();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const playEffect = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 2; // Speed
    }, 30);
  };

  return (
    <Tag className={className} onMouseEnter={playEffect}>
      {displayText}
    </Tag>
  );
};

export default GlitchText;