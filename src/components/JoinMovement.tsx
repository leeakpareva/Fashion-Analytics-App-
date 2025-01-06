import React from 'react';
import { Sparkles, Users, Trophy, Rocket } from 'lucide-react';
import { Button } from './ui/button';

interface JoinMovementProps {
  onAssessmentStart: () => void;
}

const JoinMovement = ({ onAssessmentStart }: JoinMovementProps) => {
  return (
    <div className="bg-gradient-to-br from-purple-900/50 via-black to-black py-20">
      {/* ... rest of the component remains the same ... */}
      
      <div className="bg-purple-900/20 backdrop-blur-lg rounded-2xl p-8 md:p-12 text-center">
        <div className="inline-block mb-6">
          <Sparkles className="w-12 h-12 text-purple-400" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Start Your Journey?
        </h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of learners who are already part of our community and building the future of technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="px-8 py-3 text-lg"
            onClick={onAssessmentStart}
          >
            Take Skill Assessment
          </Button>
          <Button 
            variant="outline"
            className="px-8 py-3 text-lg"
            onClick={() => window.location.href = '/login'}
          >
            Sign Up Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinMovement;