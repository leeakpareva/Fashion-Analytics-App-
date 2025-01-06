import React from 'react';

interface SkillLevelProps {
  level: number;
}

const SkillLevel = ({ level }: SkillLevelProps) => {
  const labels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  
  return (
    <div className="flex items-center gap-2">
      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-purple-600 transition-all duration-300"
          style={{ width: `${level * 25}%` }}
        />
      </div>
      <span className="text-sm text-gray-600">
        {labels[level - 1]}
      </span>
    </div>
  );
};

export default SkillLevel;