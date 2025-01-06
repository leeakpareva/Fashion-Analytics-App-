import { Brain, Code, Database, Network } from 'lucide-react';
import React from 'react';

export const skillCategories = [
  {
    id: 'ai-fundamentals',
    title: 'AI Fundamentals',
    icon: <Brain className="w-6 h-6" />,
    skills: [
      { name: 'Machine Learning Basics', level: 0 },
      { name: 'Neural Networks', level: 0 },
      { name: 'Deep Learning Frameworks', level: 0 },
      { name: 'AI Ethics', level: 0 }
    ]
  },
  {
    id: 'programming',
    title: 'Programming',
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: 'Python', level: 0 },
      { name: 'TensorFlow/PyTorch', level: 0 },
      { name: 'Version Control', level: 0 },
      { name: 'APIs', level: 0 }
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'Blockchain Fundamentals', level: 0 },
      { name: 'Smart Contracts', level: 0 },
      { name: 'Web3', level: 0 },
      { name: 'Cryptography', level: 0 }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    icon: <Network className="w-6 h-6" />,
    skills: [
      { name: 'Cloud Platforms', level: 0 },
      { name: 'DevOps', level: 0 },
      { name: 'Containerization', level: 0 },
      { name: 'Security', level: 0 }
    ]
  }
];

export const assessmentQuestions = [
  {
    category: 'ai-fundamentals',
    questions: [
      {
        id: 'q1',
        text: 'Explain the difference between supervised and unsupervised learning:',
        type: 'text'
      },
      {
        id: 'q2',
        text: 'Have you implemented neural networks?',
        type: 'choice',
        options: [
          'No experience',
          'Basic understanding',
          'Implemented with frameworks',
          'Advanced implementation'
        ]
      }
    ]
  }
];