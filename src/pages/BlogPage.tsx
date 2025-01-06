import React from 'react';
import BlogList from '../components/blog/BlogList';
import BlogSidebar from '../components/blog/BlogSidebar';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Blog</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogList />
          </div>
          <div>
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;