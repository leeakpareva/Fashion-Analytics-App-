import React, { useEffect, useState } from 'react';
import { Cookie, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useCookies } from '../../hooks/useCookies';

const CookieConsent = () => {
  const { acceptCookies, rejectCookies, hasResponded } = useCookies();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after a short delay if user hasn't responded
    if (!hasResponded) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [hasResponded]);

  if (!isVisible || hasResponded) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 border-t border-gray-800 p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Cookie className="w-6 h-6 text-purple-400" />
          <p className="text-gray-300 text-sm">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={rejectCookies}
            className="text-sm"
          >
            Reject All
          </Button>
          <Button
            onClick={acceptCookies}
            className="text-sm"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;