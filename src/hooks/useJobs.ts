import { useState, useEffect } from 'react';
import { Job } from '../types/job';

// Temporary mock data
const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior AI Engineer',
    company: 'TechCorp',
    companyLogo: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=100&h=100&fit=crop',
    type: 'Full-time',
    location: 'Remote',
    salary: '$120k - $180k',
    description: 'We are seeking an experienced AI Engineer to lead development of machine learning models...',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps'],
    postedAt: '2024-03-10'
  },
  {
    id: '2',
    title: 'Blockchain Developer',
    company: 'CryptoFin',
    companyLogo: 'https://images.unsplash.com/photo-1622473590773-f588134b6ce7?w=100&h=100&fit=crop',
    type: 'Full-time',
    location: 'New York, NY',
    salary: '$100k - $150k',
    description: 'Join our blockchain team to develop smart contracts and decentralized applications...',
    skills: ['Solidity', 'Ethereum', 'Web3.js', 'Smart Contracts'],
    postedAt: '2024-03-09'
  }
];

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchJobs = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setJobs(MOCK_JOBS);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch jobs');
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return { jobs, isLoading, error };
};