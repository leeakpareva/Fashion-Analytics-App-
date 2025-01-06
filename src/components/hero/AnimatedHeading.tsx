import React from 'react';

const AnimatedHeading = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-extrabold">
        <span className="block text-white overflow-hidden">
          <span className="inline-block animate-slide-down-fade">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient hover:scale-105 transition-transform cursor-default">
              NAVADA
            </span>
          </span>
        </span>
        <span className="block mt-4 overflow-hidden">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-slide-up-fade hover:scale-105 transition-transform cursor-default">
            AI & Blockchain Academy
          </span>
        </span>
      </h1>
      <p className="text-base sm:text-lg text-gray-400 font-light tracking-wide overflow-hidden">
        <span className="inline-block animate-fade-in" style={{ animationDelay: '1s' }}>
          Navigating Artistic Vision with Advanced Digital Assistance
        </span>
      </p>
    </div>
  );
};

export default AnimatedHeading;