import React from 'react';

const Scanlines: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[50] overflow-hidden">
      {/* Scanline repeating gradient */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]"
        style={{ backgroundSize: '100% 2px, 3px 100%' }}
      ></div>
      
      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]"></div>
    </div>
  );
};

export default Scanlines;