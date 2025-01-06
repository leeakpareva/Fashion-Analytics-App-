import React, { useState } from 'react';
import { Brain, Code, Database, Network, CheckCircle, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { SkillCategory } from '../../types/assessment';
import AssessmentLanding from './AssessmentLanding';
import AssessmentQuestion from './AssessmentQuestion';
import SkillLevel from './SkillLevel';

const skillCategories: SkillCategory[] = [
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
  // ... other categories
];

const SkillsAssessment = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const calculateProgress = () => {
    return ((currentSection + 1) / skillCategories.length) * 100;
  };

  const renderAssessmentSection = () => {
    if (completed) {
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-6 h-6" />
            <span className="text-lg font-medium">Assessment Completed</span>
          </div>
          
          {skillCategories.map(category => (
            <Card key={category.id} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {category.icon}
                  <CardTitle className="text-white">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map(skill => (
                    <div key={skill.name} className="flex justify-between items-center">
                      <span className="text-gray-300">{skill.name}</span>
                      <SkillLevel level={Math.floor(Math.random() * 4) + 1} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Button 
            onClick={() => {
              setShowLanding(true);
              setCompleted(false);
              setCurrentSection(0);
              setAnswers({});
            }}
            className="mt-6"
          >
            Return to Home
          </Button>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              {skillCategories[currentSection].icon}
              <div>
                <CardTitle className="text-white">{skillCategories[currentSection].title}</CardTitle>
                <CardDescription>
                  Section {currentSection + 1} of {skillCategories.length}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <AssessmentQuestion
              category={skillCategories[currentSection].id}
              onAnswer={handleAnswer}
              currentAnswers={answers}
            />
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => {
              if (currentSection === 0) {
                setShowLanding(true);
              } else {
                setCurrentSection(prev => prev - 1);
              }
            }}
          >
            {currentSection === 0 ? 'Back to Home' : 'Previous'}
          </Button>
          <Progress value={calculateProgress()} className="w-32" />
          <Button
            onClick={() => {
              if (currentSection === skillCategories.length - 1) {
                setCompleted(true);
              } else {
                setCurrentSection(prev => prev + 1);
              }
            }}
          >
            {currentSection === skillCategories.length - 1 ? 'Complete' : 'Next'}
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {showLanding ? (
        <AssessmentLanding onStart={() => setShowLanding(false)} />
      ) : (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Skills Assessment</h1>
            <p className="text-gray-400">
              Evaluate your proficiency in AI, blockchain, and related technologies
            </p>
          </div>
          {renderAssessmentSection()}
        </div>
      )}
    </div>
  );
};

export default SkillsAssessment;