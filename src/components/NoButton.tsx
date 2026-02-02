import { useState, useCallback } from 'react';

const NoButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isEscaping, setIsEscaping] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsEscaping(true);
    
    // Calculate new random position within viewport bounds
    const buttonWidth = 120;
    const buttonHeight = 50;
    const padding = 20;
    
    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;
    
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    
    setPosition({ x: newX, y: newY });
  }, []);

  return (
    <button
      className="btn-no cursor-pointer select-none"
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleMouseEnter}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isEscaping ? 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
        position: 'relative',
      }}
    >
      No 😒
    </button>
  );
};

export default NoButton;
