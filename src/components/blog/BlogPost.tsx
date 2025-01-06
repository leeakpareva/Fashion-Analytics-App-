import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import { BlogPost as BlogPostType } from '../../types/blog';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <article className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-200">
      {post.coverImage && (
        <img src={post.coverImage} alt={post.title} className="w-full h-64 object-cover" />
      )}
      <div className="p-6">
        <div className="flex gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            {post.category}
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">{post.title}</h2>
        <p className="text-gray-400 mb-6">{post.excerpt}</p>
        <button className="text-purple-400 hover:text-purple-300 font-medium">
          Read More →
        </button>
      </div>
    </article>
  );
}

export default BlogPost;