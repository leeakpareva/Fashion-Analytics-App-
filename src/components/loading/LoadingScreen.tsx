import React from 'react';
import { Brain } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <Brain className="w-16 h-16 text-purple-500 animate-pulse mx-auto" />
        <div className="mt-4 text-white text-lg font-medium">
          <div className="w-32 h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
            <div className="w-full h-full bg-purple-500 rounded-full origin-left animate-loading-bar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;