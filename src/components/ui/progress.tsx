import React from 'react';

interface ProgressProps {
  value: number;
  className?: string;
}

export const Progress = ({ value, className = '' }: ProgressProps) => {
  return (
    <div className={`h-2 bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <div 
        className="h-full bg-purple-600 transition-all duration-300"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
};