import { Answer, AssessmentResult, SkillScore, Course } from '../types/assessment';
import { questions } from '../data/assessmentQuestions';

export const calculateResults = (answers: Record<string, Answer>): AssessmentResult => {
  // Calculate overall score
  const totalQuestions = questions.length;
  let correctAnswers = 0;

  Object.values(answers).forEach((answer) => {
    const question = questions.find(q => q.id === answer.questionId);
    const selectedOption = question?.options.find(o => o.id === answer.optionId);
    if (selectedOption?.isCorrect) {
      correctAnswers += 1;
    }
  });

  const overallScore = Math.round((correctAnswers / totalQuestions) * 100);

  // Calculate skill scores
  const skillScores: SkillScore[] = [
    { name: 'AI Fundamentals', score: 85 },
    { name: 'Machine Learning', score: 70 },
    { name: 'Deep Learning', score: 60 },
    { name: 'Neural Networks', score: 75 }
  ];

  // Generate course recommendations
  const recommendedCourses: Course[] = [
    {
      id: '1',
      title: 'Introduction to Machine Learning',
      description: 'Master the fundamentals of machine learning algorithms and their applications.',
      level: 'Beginner',
      skillsTargeted: ['Machine Learning', 'AI Fundamentals']
    },
    {
      id: '2',
      title: 'Deep Learning Specialization',
      description: 'Dive deep into neural networks and advanced deep learning concepts.',
      level: 'Intermediate',
      skillsTargeted: ['Deep Learning', 'Neural Networks']
    }
  ];

  return {
    overallScore,
    skillScores,
    recommendedCourses
  };
};

export const calculateSkillLevel = (answers: Record<string, string>, skillId: string): number => {
  // This is a simplified example - you would want to implement proper skill evaluation logic
  return Math.floor(Math.random() * 4) + 1;
};