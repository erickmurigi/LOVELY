import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

interface CelebrationEffectProps {
  isActive: boolean;
}

const CelebrationEffect = ({ isActive }: CelebrationEffectProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (isActive) {
      const emojis = ['❤️', '💖', '💕', '💗', '💓', '💘', '✨', '🌹', '💐', '🥰'];
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < 60; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * -50,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          size: Math.random() * 30 + 15,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 1,
          rotation: Math.random() * 360,
        });
      }
      
      setParticles(newParticles);

      // Clear particles after animation
      const timer = setTimeout(() => {
        setParticles([]);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
            animation: `confetti-fall ${particle.duration}s ease-out ${particle.delay}s forwards`,
            transform: `rotate(${particle.rotation}deg)`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
};

export default CelebrationEffect;
