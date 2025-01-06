import { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';

const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Education',
    excerpt: 'Exploring how artificial intelligence is transforming the educational landscape and creating new opportunities for learners worldwide.',
    content: '',
    author: 'Sarah Chen',
    date: 'March 15, 2024',
    category: 'AI',
    tags: ['AI', 'Education', 'Technology'],
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Understanding Web3 and Blockchain Technology',
    excerpt: 'A comprehensive guide to understanding the fundamentals of Web3 and blockchain technology, and their impact on the future of the internet.',
    content: '',
    author: 'Michael Rodriguez',
    date: 'March 12, 2024',
    category: 'Blockchain',
    tags: ['Web3', 'Blockchain', 'Cryptocurrency'],
    coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop'
  }
];

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPosts(MOCK_POSTS);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, isLoading };
};

export default useBlogPosts;