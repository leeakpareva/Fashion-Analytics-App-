import React from 'react';
import { MessageCircle, X } from 'lucide-react';

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ChatButton = ({ isOpen, onClick }: ChatButtonProps) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 p-4 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-all duration-200 z-50"
  >
    {isOpen ? (
      <X className="w-6 h-6" />
    ) : (
      <MessageCircle className="w-6 h-6" />
    )}
  </button>
);

export default ChatButton;