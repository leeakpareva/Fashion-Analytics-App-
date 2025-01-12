import { BarChart3, Bell, ChevronDown, Search } from 'lucide-react';
import { memo } from 'react';

export const Navbar = memo(function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-10">
      <div className="px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-8 w-8 text-indigo-600" />
          <span className="text-xl font-semibold text-gray-900">Fashion Analytics</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search analytics..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32"
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover"
              loading="lazy"
            />
            <ChevronDown className="h-4 w-4 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
});