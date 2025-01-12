import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function EnterPage() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [audioContext] = useState(() => new (window.AudioContext || (window as any).webkitAudioContext)());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const playClickSound = async () => {
    try {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      playClickSound();
      setTimeout(() => {
        navigate('/overview');
      }, 1000);
    }
  };

  const calculateLetterPosition = (index: number) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const mouseX = mousePosition.x - centerX;
    const mouseY = mousePosition.y - centerY;
    const factor = 0.05;
    const delay = index * 0.1;

    return {
      transform: `translate(${mouseX * factor * Math.cos(delay)}px, ${mouseY * factor * Math.sin(delay)}px)`
    };
  };

  return (
    <div 
      onClick={handleClick}
      className="fixed inset-0 bg-black flex items-center justify-center cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <div className={`text-flow ${clicked ? 'clicked' : ''}`}>
        {['N', 'A', 'V', 'A', 'D', 'A'].map((letter, index) => (
          <span
            key={index}
            className="letter"
            style={{
              ...calculateLetterPosition(index),
              '--delay': `${index * 0.1}s`
            } as any}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="fixed bottom-4 text-[8px] text-zinc-500">
        Application designed + developed by Le
      </div>
    </div>
  );
}