import { ReactNode } from 'react';

export interface Question {
  id: string;
  order: number;
  total: number;
  text: string;
  description?: string;
  options: Option[];
  category: string;
}

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
  weight: number;
}

export interface Answer {
  questionId: string;
  optionId: string;
}

export interface SkillScore {
  name: string;
  score: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  skillsTargeted: string[];
}

export interface AssessmentResult {
  overallScore: number;
  skillScores: SkillScore[];
  recommendedCourses: Course[];
}

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: ReactNode;
  skills: Skill[];
}