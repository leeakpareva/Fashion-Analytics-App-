import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-zinc-100 rounded-lg">
              <Cookie className="h-5 w-5 text-black" />
            </div>
            <h2 className="text-lg font-semibold text-black">Cookie Settings</h2>
          </div>
          
          <p className="text-zinc-600 mb-6">
            We use cookies to enhance your browsing experience and analyze our traffic. 
            By accepting, you agree to our use of cookies.
          </p>
          
          <div className="flex gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 border border-black text-black px-4 py-2 rounded-lg hover:bg-zinc-50 transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
