import React from 'react';
import { Lock } from 'lucide-react';
import { Button } from '../ui/button';

interface LockedContentProps {
  onUnlock: () => void;
}

const LockedContent = ({ onUnlock }: LockedContentProps) => {
  return (
    <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-8 text-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/30 mx-auto mb-6">
        <Lock className="w-8 h-8 text-purple-400" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">Premium Content</h2>
      <p className="text-gray-400 mb-6 max-w-md mx-auto">
        This content is locked. Please enter your access code to view the full content.
      </p>
      <Button onClick={onUnlock}>
        Enter Access Code
      </Button>
    </div>
  );
}

export default LockedContent;