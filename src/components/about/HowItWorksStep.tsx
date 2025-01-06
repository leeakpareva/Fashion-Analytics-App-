import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HowItWorksStepProps {
  step: number;
  title: string;
  Icon: LucideIcon;
  children: React.ReactNode;
}

const HowItWorksStep = ({ step, title, Icon, children }: HowItWorksStepProps) => {
  return (
    <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6 hover:border-purple-500/50 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <div className="text-purple-400 text-sm font-medium">Step {step}</div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
      <div className="space-y-3 text-gray-400">
        {children}
      </div>
    </div>
  );
};

export default HowItWorksStep;