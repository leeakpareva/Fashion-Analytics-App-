import React, { useState } from 'react';
import { Rocket, Users, Award } from 'lucide-react';
import Feature from './ui/Feature';
import LetsTalkForm from './contact/LetsTalkForm';
import HeroBanner from './hero/HeroBanner';
import AnimatedHeading from './hero/AnimatedHeading';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  const [showLetsTalkForm, setShowLetsTalkForm] = useState(false);

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          <AnimatedHeading />
          <p className="mt-6 max-w-md mx-auto text-base sm:text-lg md:text-xl text-gray-400 animate-fade-in">
            Join the next generation of tech leaders. Learn from industry experts, build real projects,
            and connect with top employers worldwide.
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              onClick={() => setShowLetsTalkForm(true)}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 transition-all duration-200 hover:bg-purple-700 hover:scale-105 md:py-4 md:text-lg md:px-10"
            >
              Get Started
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-purple-700 text-base font-medium rounded-full text-purple-400 bg-transparent transition-all duration-200 hover:bg-purple-900/50 hover:scale-105 md:py-4 md:text-lg md:px-10"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <HeroBanner />
      <LetsTalkForm isOpen={showLetsTalkForm} onClose={() => setShowLetsTalkForm(false)} />
    </div>
  );
};

export default Hero;