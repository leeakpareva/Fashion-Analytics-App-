import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

export function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    // In a real app, you would handle registration here
    navigate('/subscribe');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-2">Join NAVADA</h2>
        <p className="text-zinc-400 mb-8">Enter your details to get started</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full name"
                className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-white focus:border-white placeholder-zinc-500"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email address"
                className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-white focus:border-white placeholder-zinc-500"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Password"
                className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-white focus:border-white placeholder-zinc-500"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            Create Account
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}