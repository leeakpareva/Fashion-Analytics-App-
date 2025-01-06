import React from 'react';
import { MessageSquare, Heart, Share2 } from 'lucide-react';
import { NewsPost } from '../../types/news';

interface NewsCardProps {
  post: NewsPost;
}

const NewsCard = ({ post }: NewsCardProps) => {
  return (
    <div className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500/50 transition-colors">
      {post.image && (
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="text-white font-medium">{post.author.name}</h3>
            <p className="text-sm text-gray-400">{post.timestamp}</p>
          </div>
        </div>
        
        <span className="inline-block px-3 py-1 rounded-full text-sm bg-purple-900/50 text-purple-300 mb-3">
          {post.category}
        </span>
        
        <h2 className="text-xl font-semibold text-white mb-3">{post.title}</h2>
        <p className="text-gray-400 mb-6">{post.content}</p>
        
        <div className="flex items-center gap-6 text-gray-400">
          <button className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <Heart className="w-5 h-5" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-purple-400 transition-colors ml-auto">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;