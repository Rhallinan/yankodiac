import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  color: string;
}

const Particles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const count = 50;
    const newParticles: Particle[] = [];
    // Using theme colors for a cyberpunk feel
    const colors = [
      'bg-white/30', 
      'bg-accent-orange/30', 
      'bg-accent-blue/30',
      'bg-white/20'
    ];
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 3 + 1, // 1px to 4px
        left: Math.random() * 100,
        duration: Math.random() * 15 + 15, // 15s to 30s (slower, floatier)
        delay: Math.random() * 30, // Random start times
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full ${p.color} animate-float-up blur-[0.5px]`}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            // Start below the screen to float up
            top: '100%',
            animationDuration: `${p.duration}s`,
            animationDelay: `-${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;