import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const botResponses = [
  "I'll help you with that right away!",
  "Could you please provide more details?",
  "Let me check that for you.",
  "Thanks for reaching out! How can I assist you today?",
  "I understand your concern. Let me find the best solution.",
  "Is there anything else you'd like to know?",
];

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "👋 Hi! How can we help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateBotResponse = () => {
    setIsTyping(true);
    setTimeout(() => {
      const response = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSend = () => {
    if (message.trim()) {
      // Add user message
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: message.trim(),
        sender: 'user',
        timestamp: new Date()
      }]);
      setMessage('');
      
      // Simulate bot response
      simulateBotResponse();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg border border-zinc-200 w-80">
          <div className="p-4 border-b border-zinc-200 flex items-center justify-between">
            <div>
              <h3 className="font-medium text-black">Chat Support</h3>
              <p className="text-sm text-zinc-500">We typically reply within minutes</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-black transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 h-96 bg-zinc-50">
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.sender === 'user'
                          ? 'bg-black text-white'
                          : 'bg-white shadow-sm'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className={`text-xs mt-1 ${
                        msg.sender === 'user' ? 'text-zinc-300' : 'text-zinc-500'
                      }`}>
                        {formatTime(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-zinc-300 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-zinc-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-zinc-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="mt-4 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 pr-10 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                />
                <button
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-black transition-colors disabled:text-zinc-300"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-zinc-800 transition-colors"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}