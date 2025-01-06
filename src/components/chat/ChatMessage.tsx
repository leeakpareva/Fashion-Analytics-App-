import React from 'react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

const ChatMessage = ({ message, isUser }: ChatMessageProps) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
    <div
      className={`max-w-[80%] rounded-lg px-4 py-2 ${
        isUser 
          ? 'bg-purple-600 text-white' 
          : 'bg-gray-800 text-gray-200'
      }`}
    >
      {message}
    </div>
  </div>
);

export default ChatMessage;