import React from 'react';
import { Search } from 'lucide-react';

const BlogSidebar = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
        <h3 className="text-white font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {['AI', 'Blockchain', 'Web3', 'Machine Learning', 'Career'].map(category => (
            <button
              key={category}
              className="block text-gray-400 hover:text-purple-400 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
        <h3 className="text-white font-semibold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['AI', 'Blockchain', 'Web3', 'Python', 'React', 'Smart Contracts'].map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm hover:bg-purple-900/50 hover:text-purple-300 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSidebar;