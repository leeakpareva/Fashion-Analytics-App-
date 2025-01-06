import React, { useState } from 'react';
import { Building, Mail, Lock, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { EmployerCredentials, ValidationErrors } from '../../types/employer';

const EmployerLoginForm = () => {
  const [formData, setFormData] = useState<EmployerCredentials>({
    email: '',
    password: '',
    companyName: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Implement actual authentication
      console.log('Employer login attempted:', formData);
    }
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl shadow-xl border border-gray-800 w-full max-w-md">
      <div className="p-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-purple-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Building className="w-10 h-10 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Employer Portal</h2>
          <p className="text-gray-400 mt-2">Access your recruitment dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                placeholder="Company Email"
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            {errors.email && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
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
              />
            </div>
            {errors.password && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.password}</span>
              </div>
            )}
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
            New to NAVADA?{' '}
            <button type="button" className="text-purple-400 hover:text-purple-300">
              Register your company
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default EmployerLoginForm;