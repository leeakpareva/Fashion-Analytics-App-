import React, { useState } from 'react';
import { User, Lock, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      // TODO: Implement actual authentication logic
      console.log('Login attempted with:', formData);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl shadow-xl border border-gray-800">
      <div className="p-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-10 h-10 text-purple-500" />
          </div>
          <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
          <p className="text-gray-400 mt-2">Sign in to continue your learning journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-700 text-purple-600 focus:ring-purple-500 bg-gray-800"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
              />
              <span className="ml-2 text-sm text-gray-400">Remember me</span>
            </label>
            <button type="button" className="text-sm text-purple-400 hover:text-purple-300">
              Forgot Password?
            </button>
          </div>

          <Button className="w-full py-2 text-base">
            Sign In
          </Button>

          <p className="text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <button type="button" className="text-purple-400 hover:text-purple-300">
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;