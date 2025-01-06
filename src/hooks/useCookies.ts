import { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'cookie_consent';

export const useCookies = () => {
  const [hasResponded, setHasResponded] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent) {
      setHasResponded(true);
    }
  }, []);

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  };

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setHasResponded(true);
    setCookie('essential', 'true', 365);
    setCookie('analytics', 'true', 365);
    setCookie('marketing', 'true', 365);
  };

  const rejectCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    setHasResponded(true);
    // Only set essential cookies
    setCookie('essential', 'true', 365);
  };

  return {
    hasResponded,
    acceptCookies,
    rejectCookies
  };
};