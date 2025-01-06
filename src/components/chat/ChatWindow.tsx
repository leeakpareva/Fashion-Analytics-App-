import React, { useState } from 'react';
import { Send } from 'lucide-react';
import ChatMessage from './ChatMessage';

interface ChatWindowProps {
  isOpen: boolean;
}

const ChatWindow = ({ isOpen }: ChatWindowProps) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi! How can I help you today?", isUser: false }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for your message! Our team will get back to you soon.", 
        isUser: false 
      }]);
    }, 1000);

    setMessage('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-gray-900 rounded-lg shadow-xl flex flex-col border border-gray-800 z-50">
      <div className="p-4 border-b border-gray-800">
        <h3 className="text-lg font-semibold text-white">Chat Support</h3>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;