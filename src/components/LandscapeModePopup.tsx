import { useState, useEffect } from 'react';
import { RotateCcw, X } from 'lucide-react';

export function LandscapeModePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Only show on mobile devices
    const isMobile = window.innerWidth <= 768;
    
    // Check if in portrait mode
    const isPortrait = window.innerHeight > window.innerWidth;
    
    if (isMobile && isPortrait && !isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [isDismissed]);

  // Handle orientation changes
  useEffect(() => {
    const handleOrientationChange = () => {
      const isLandscape = window.innerWidth > window.innerHeight;
      if (isLandscape) {
        setIsVisible(false);
      }
    };

    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[60] animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg max-w-sm w-full animate-scale-in">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-100 rounded-lg">
                <RotateCcw className="h-5 w-5 text-black" />
              </div>
              <h2 className="text-lg font-semibold text-black">Viewing Tip</h2>
            </div>
            <button
              onClick={() => {
                setIsVisible(false);
                setIsDismissed(true);
              }}
              className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-zinc-600" />
            </button>
          </div>
          
          <p className="text-zinc-600 mb-6">
            For the best experience, please rotate your device to landscape mode.
          </p>

          <button
            onClick={() => {
              setIsVisible(false);
              setIsDismissed(true);
            }}
            className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}