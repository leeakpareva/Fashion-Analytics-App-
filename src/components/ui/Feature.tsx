import React from 'react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="text-center transform transition-all duration-300 hover:scale-105">
    <div className="flex justify-center">{icon}</div>
    <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
    <p className="mt-2 text-base text-gray-400">{description}</p>
  </div>
);

export default Feature;