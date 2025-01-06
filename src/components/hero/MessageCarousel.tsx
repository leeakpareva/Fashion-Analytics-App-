import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const messages = [
  "Artificial Intelligence is not just a tool but a partner in innovation, transforming how we think, work, and create.",
  "The future belongs to those who embrace AI not as a threat, but as a catalyst for endless possibilities.",
  "AI doesn't replace human intelligence; it amplifies it, unlocking new dimensions of creativity and problem-solving.",
  "In the age of AI, the greatest advantage is not the technology itself, but the vision to wield it ethically and innovatively.",
  "Artificial Intelligence is the bridge between the impossible and the inevitable, turning dreams into realities at unprecedented speed."
];

const MessageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const changeMessage = useCallback((newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const nextMessage = useCallback(() => {
    changeMessage((currentIndex + 1) % messages.length);
  }, [currentIndex, changeMessage]);

  const prevMessage = useCallback(() => {
    changeMessage((currentIndex - 1 + messages.length) % messages.length);
  }, [currentIndex, changeMessage]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextMessage();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, nextMessage]);

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
        onClick={prevMessage}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-gray-400 hover:text-white transition-colors"
        aria-label="Previous message"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <div className="overflow-hidden h-32 flex items-center justify-center px-4">
        <p
          className={`text-xl md:text-2xl text-gray-200 text-center transition-all duration-500 transform ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {messages[currentIndex]}
        </p>
      </div>

      <button
        onClick={nextMessage}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-gray-400 hover:text-white transition-colors"
        aria-label="Next message"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {messages.map((_, index) => (
          <button
            key={index}
            onClick={() => changeMessage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-purple-500 w-6'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to message ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageCarousel;