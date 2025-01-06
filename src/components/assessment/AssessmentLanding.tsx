import React from 'react';
import { Brain, Target, Trophy, BarChart, Users, Rocket } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Feature, Stat } from '../../types/assessment';

interface AssessmentLandingProps {
  onStart: () => void;
}

const features: Feature[] = [
  {
    icon: <Brain className="w-8 h-8 text-blue-500" />,
    title: "AI-Powered Evaluation",
    description: "Advanced algorithms assess your technical proficiency across multiple domains"
  },
  {
    icon: <Target className="w-8 h-8 text-green-500" />,
    title: "Personalized Insights",
    description: "Receive detailed feedback and recommendations tailored to your skill level"
  },
  {
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    title: "Industry Benchmarking",
    description: "Compare your skills against industry standards and peer performance"
  },
  {
    icon: <BarChart className="w-8 h-8 text-purple-500" />,
    title: "Skill Gap Analysis",
    description: "Identify areas for improvement and get targeted learning recommendations"
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-500" />,
    title: "Employer Matching",
    description: "Connect with companies seeking your specific skill set"
  },
  {
    icon: <Rocket className="w-8 h-8 text-red-500" />,
    title: "Career Advancement",
    description: "Get insights on high-demand skills and career growth opportunities"
  }
];

const stats: Stat[] = [
  { value: "85%", label: "Placement Rate" },
  { value: "50K+", label: "Skills Assessed" },
  { value: "1000+", label: "Partner Companies" },
  { value: "95%", label: "User Satisfaction" }
];

const AssessmentLanding = ({ onStart }: AssessmentLandingProps) => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-16">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">
          Evaluate Your AI & Blockchain Skills
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Get an in-depth assessment of your technical capabilities and connect with leading companies in the AI and blockchain space.
        </p>
        <Button
          size="lg"
          onClick={onStart}
          className="bg-purple-600 hover:bg-purple-700"
        >
          Start Your Assessment
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800">
            <CardContent className="space-y-2 pt-6">
              <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">Why Take Our Assessment?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardContent className="space-y-4 pt-6">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gray-800">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssessmentLanding;