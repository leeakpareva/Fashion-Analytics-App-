import React from 'react';

interface NewsFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const NewsFilter = ({ activeCategory, onCategoryChange }: NewsFilterProps) => {
  const categories = ['All', 'AI', 'Blockchain', 'Community', 'Events'];
  
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === category
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default NewsFilter;