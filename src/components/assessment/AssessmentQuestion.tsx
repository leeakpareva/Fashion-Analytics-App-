import React from 'react';
import { Button } from '../ui/button';

interface AssessmentQuestionProps {
  question: {
    id: string;
    text: string;
    type: 'text' | 'choice';
    options?: string[];
  };
  answer: string;
  onAnswer: (questionId: string, answer: string) => void;
}

const AssessmentQuestion = ({ question, answer, onAnswer }: AssessmentQuestionProps) => {
  return (
    <div className="space-y-3">
      <p className="font-medium text-gray-800">{question.text}</p>
      {question.type === 'text' ? (
        <textarea
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          rows={4}
          onChange={(e) => onAnswer(question.id, e.target.value)}
          value={answer || ''}
        />
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {question.options?.map((option, idx) => (
            <Button
              key={idx}
              variant={answer === option ? "default" : "outline"}
              onClick={() => onAnswer(question.id, option)}
              className="justify-start"
            >
              {option}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default AssessmentQuestion;