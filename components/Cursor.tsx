import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target or its parents are interactive
      const isInteractive = target.closest('a, button, [data-cursor="hover"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseEnter);
    };
  }, [isVisible]);

  // Hide on touch devices or if mouse hasn't moved
  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[10000] hidden md:block mix-blend-screen transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`relative flex items-center justify-center rounded-full border border-accent-orange transition-all duration-200 ${
          isHovering
            ? 'h-10 w-10 rotate-45 border-accent-blue bg-accent-blue/10'
            : 'h-5 w-5 bg-transparent'
        }`}
      >
        <div
          className={`h-1 w-1 rounded-full transition-colors duration-200 ${
            isHovering ? 'bg-accent-blue' : 'bg-accent-orange'
          }`}
        />
      </div>
    </div>
  );
};

export default Cursor;