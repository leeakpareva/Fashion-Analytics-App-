import React from 'react';
import { SkillScore } from '../../types/assessment';

interface SkillsBreakdownProps {
  skills: SkillScore[];
}

const SkillsBreakdown = ({ skills }: SkillsBreakdownProps) => {
  return (
    <div className="bg-gray-900 rounded-lg p-8 mb-8">
      <h3 className="text-xl font-semibold text-white mb-6">Skills Breakdown</h3>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-purple-400">{skill.score}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full">
              <div
                className="h-full bg-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${skill.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBreakdown;