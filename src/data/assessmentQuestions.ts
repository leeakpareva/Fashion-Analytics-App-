import { Question } from '../types/assessment';

export const questions: Question[] = [
  {
    id: '1',
    order: 1,
    total: 10,
    text: 'What is Machine Learning?',
    category: 'fundamentals',
    options: [
      {
        id: '1a',
        text: 'A type of computer hardware',
        isCorrect: false,
        weight: 0
      },
      {
        id: '1b',
        text: 'The ability of systems to learn and improve from experience without explicit programming',
        isCorrect: true,
        weight: 1
      },
      {
        id: '1c',
        text: 'A programming language',
        isCorrect: false,
        weight: 0
      },
      {
        id: '1d',
        text: 'A database management system',
        isCorrect: false,
        weight: 0
      }
    ]
  },
  // Add more questions...
];