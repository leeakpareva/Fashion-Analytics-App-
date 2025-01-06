import { useState } from 'react';

export const useLoadingNavigation = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigateWithLoading = (url: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.open(url, '_blank');
    }, 3000);
  };

  return {
    isLoading,
    navigateWithLoading
  };
};