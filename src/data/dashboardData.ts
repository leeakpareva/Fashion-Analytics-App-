import { TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import React from 'react';

export const keyTrends = [
  {
    icon: <TrendingUp className="w-5 h-5 text-green-500" />,
    title: "Rapid Market Growth",
    description: "AI job market expected to grow by 65% over the next 5 years, creating over 1.4M new positions globally."
  },
  {
    icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
    title: "Skills Gap Challenge",
    description: "Projected 420,000 talent shortage by 2029, highlighting the urgent need for upskilling and education."
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-blue-500" />,
    title: "Career Opportunity",
    description: "High demand across multiple industries with technology, healthcare, and finance leading adoption."
  }
];

export const recommendations = [
  "Focus on machine learning and deep learning skills",
  "Gain practical experience through hands-on projects",
  "Develop cross-functional expertise in MLOps and AI ethics",
  "Stay updated with emerging AI technologies and frameworks"
];