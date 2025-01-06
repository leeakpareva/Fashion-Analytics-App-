import React from 'react';
import { Question, Answer } from '../../types/assessment';

interface QuestionCardProps {
  question: Question;
  currentAnswer?: Answer;
  onAnswer: (answer: Answer) => void;
}

const QuestionCard = ({ question, currentAnswer, onAnswer }: QuestionCardProps) => {
  return (
    <div className="bg-gray-900 rounded-lg p-8">
      <div className="mb-8">
        <div className="text-purple-400 text-sm mb-2">Question {question.order} of {question.total}</div>
        <h2 className="text-2xl font-semibold text-white mb-4">{question.text}</h2>
        {question.description && (
          <p className="text-gray-400 mb-4">{question.description}</p>
        )}
      </div>
      
      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswer({ questionId: question.id, optionId: option.id })}
            className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
              currentAnswer?.optionId === option.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;