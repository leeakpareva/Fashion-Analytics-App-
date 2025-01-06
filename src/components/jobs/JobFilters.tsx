import React from 'react';
import { Briefcase, MapPin, Banknote } from 'lucide-react';

const JobFilters = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 space-y-6">
      <div>
        <h3 className="text-white font-semibold mb-4">Job Type</h3>
        <div className="space-y-2">
          {['Full-time', 'Part-time', 'Contract', 'Remote'].map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-700 text-purple-600 focus:ring-purple-500 bg-gray-800" />
              <span className="text-gray-300">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Experience Level</h3>
        <div className="space-y-2">
          {['Entry Level', 'Mid Level', 'Senior', 'Lead'].map((level) => (
            <label key={level} className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-700 text-purple-600 focus:ring-purple-500 bg-gray-800" />
              <span className="text-gray-300">{level}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Salary Range</h3>
        <input 
          type="range" 
          min="0" 
          max="200000" 
          step="10000"
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
        />
        <div className="flex justify-between text-gray-400 mt-2">
          <span>$0</span>
          <span>$200k+</span>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;