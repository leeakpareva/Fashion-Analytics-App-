import React from 'react';
import BlogPost from './BlogPost';
import { useBlogPosts } from '../../hooks/useBlogPosts';

const BlogList = () => {
  const { posts, isLoading } = useBlogPosts();

  if (isLoading) {
    return <div className="text-gray-400">Loading posts...</div>;
  }

  return (
    <div className="space-y-8">
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogList;