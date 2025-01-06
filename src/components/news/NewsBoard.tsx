import React, { useState } from 'react';
import NewsFilter from './NewsFilter';
import NewsCard from './NewsCard';
import { NewsPost } from '../../types/news';

const mockPosts: NewsPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Education',
    content: 'Exploring how artificial intelligence is transforming the educational landscape...',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    category: 'AI',
    timestamp: '2h ago',
    likes: 124,
    comments: 18,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Blockchain Technology: Beyond Cryptocurrency',
    content: 'Discover the innovative applications of blockchain technology in various industries...',
    author: {
      name: 'Michael Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    category: 'Blockchain',
    timestamp: '5h ago',
    likes: 89,
    comments: 12,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Community Meetup: AI & Blockchain Summit 2024',
    content: 'Join us for our biggest event of the year! Network with industry leaders...',
    author: {
      name: 'Lisa Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    category: 'Events',
    timestamp: '1d ago',
    likes: 245,
    comments: 37
  }
];

const NewsBoard = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPosts = activeCategory === 'All'
    ? mockPosts
    : mockPosts.filter(post => post.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Community News</h1>
        <p className="text-gray-400">Stay updated with the latest news and events from our community.</p>
      </div>
      
      <NewsFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;