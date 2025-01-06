import React from 'react';
import { LineChart } from 'lucide-react';
import { Button } from '../ui/button';
import { useLoadingNavigation } from '../../hooks/useLoadingNavigation';
import LoadingScreen from '../loading/LoadingScreen';

const MarketIntelligenceCTA = () => {
  const { isLoading, navigateWithLoading } = useLoadingNavigation();

  const handleClick = () => {
    navigateWithLoading('https://claude.site/artifacts/16f7a620-5e60-40d2-8b8d-cc61172a170e');
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Button
        variant="outline"
        className="w-full md:w-auto flex items-center gap-2 border-purple-500/50 hover:border-purple-500 hover:bg-purple-900/20"
        onClick={handleClick}
      >
        <LineChart className="w-4 h-4" />
        <span className="whitespace-nowrap">Market Intelligence</span>
      </Button>
    </>
  );
};

export default MarketIntelligenceCTA;