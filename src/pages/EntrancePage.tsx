import React, { useState } from 'react';
import { Brain, Sparkles } from 'lucide-react';
import { playKeyboardClick } from '../utils/sounds';

interface EntrancePageProps {
  onEnter: () => void;
}

const EntrancePage = ({ onEnter }: EntrancePageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleEnterClick = () => {
    playKeyboardClick();
    onEnter();
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="relative">
          <Brain className="w-24 h-24 text-purple-500 mx-auto animate-pulse" />
          <Sparkles className="w-8 h-8 text-purple-400 absolute -top-2 -right-2 animate-bounce" />
        </div>
        
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          NAVADA
        </h1>
        
        <p className="text-gray-400 text-xl max-w-md mx-auto">
          AI & Blockchain Academy
        </p>

        <button
          onClick={handleEnterClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`px-12 py-4 rounded-full text-lg font-medium transition-all duration-500 ${
            isHovered
              ? 'bg-purple-600 text-white scale-105'
              : 'bg-transparent text-purple-400 border border-purple-400'
          }`}
        >
          {isHovered ? 'Welcome' : 'Enter'}
        </button>
      </div>
    </div>
  );
};

export default EntrancePage;