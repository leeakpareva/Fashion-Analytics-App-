import React, { useState } from 'react';
import { Lock, X } from 'lucide-react';
import { Button } from '../ui/button';

interface AccessCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (code: string) => void;
  error?: string;
}

const AccessCodeModal = ({ isOpen, onClose, onSubmit, error }: AccessCodeModalProps) => {
  const [code, setCode] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-900/30 mx-auto mb-4">
          <Lock className="w-6 h-6 text-purple-400" />
        </div>

        <h2 className="text-xl font-bold text-white text-center mb-2">Enter Access Code</h2>
        <p className="text-gray-400 text-center mb-6">
          Please enter your access code to view job listings
        </p>

        <div className="space-y-4">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter access code"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <Button 
            onClick={() => onSubmit(code)}
            className="w-full"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccessCodeModal;