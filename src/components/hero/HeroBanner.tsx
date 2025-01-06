import React from 'react';
import MessageCarousel from './MessageCarousel';

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-black to-black py-16 mb-12">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.2),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transforming the Future with AI
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
        </div>

        <MessageCarousel />
      </div>
    </div>
  );
};

export default HeroBanner;