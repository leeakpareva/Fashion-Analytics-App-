import { useState } from 'react';
import { Lock, Eye, EyeOff, X } from 'lucide-react';

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (password: string) => void;
  title?: string;
  description?: string;
}

export function PasswordModal({
  isOpen,
  onClose,
  onSubmit,
  title = 'Enter Password',
  description = 'Please enter your password to continue'
}: PasswordModalProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setError('');
    onSubmit(password);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-100 rounded-lg">
                <Lock className="h-5 w-5 text-black" />
              </div>
              <h2 className="text-lg font-semibold text-black">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-500 hover:text-black transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <p className="text-zinc-600 mb-6">{description}</p>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black pr-10"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-black transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-1">{error}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}