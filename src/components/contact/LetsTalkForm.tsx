import React, { useState } from 'react';
import { Send, X } from 'lucide-react';
import { Button } from '../ui/button';

interface LetsTalkFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const LetsTalkForm = ({ isOpen, onClose }: LetsTalkFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900/95 rounded-xl border border-gray-800 w-full max-w-md relative animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">Let's Talk</h2>
          <p className="text-gray-400 mb-6">
            Tell us about your learning goals and we'll help you get started.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <textarea
                placeholder="Tell us about your learning goals..."
                required
                rows={4}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LetsTalkForm;