import React from 'react';
import { Brain, Clock, Award } from 'lucide-react';

interface AssessmentIntroProps {
  onStart: () => void;
}

const AssessmentIntro = ({ onStart }: AssessmentIntroProps) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-6">AI Skills Assessment</h1>
      <p className="text-gray-400 mb-8 text-lg">
        Evaluate your AI knowledge and get personalized course recommendations
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-900 p-6 rounded-lg">
          <Brain className="h-8 w-8 text-purple-500 mx-auto mb-4" />
          <h3 className="text-white font-semibold mb-2">Comprehensive</h3>
          <p className="text-gray-400">Covers key AI concepts and practical applications</p>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <Clock className="h-8 w-8 text-purple-500 mx-auto mb-4" />
          <h3 className="text-white font-semibold mb-2">15 Minutes</h3>
          <p className="text-gray-400">Quick assessment of your current knowledge level</p>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <Award className="h-8 w-8 text-purple-500 mx-auto mb-4" />
          <h3 className="text-white font-semibold mb-2">Personalized</h3>
          <p className="text-gray-400">Get tailored course recommendations</p>
        </div>
      </div>
      
      <button
        onClick={onStart}
        className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-200 hover:bg-purple-700 hover:scale-105"
      >
        Start Assessment
      </button>
    </div>
  );
}

export default AssessmentIntro;