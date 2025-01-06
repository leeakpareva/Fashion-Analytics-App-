import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import JoinMovement from '../components/JoinMovement';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Stats />
      <JoinMovement onAssessmentStart={() => onNavigate('assessment')} />
    </>
  );
};

export default HomePage;