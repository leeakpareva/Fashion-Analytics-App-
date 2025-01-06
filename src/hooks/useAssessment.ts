import { useState } from 'react';
import { Question, Answer, AssessmentResult } from '../types/assessment';
import { questions } from '../data/assessmentQuestions';
import { calculateResults } from '../utils/assessmentUtils';

export const useAssessment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [results, setResults] = useState<AssessmentResult | null>(null);

  const startAssessment = () => {
    setHasStarted(true);
  };

  const handleAnswer = (answer: Answer) => {
    setAnswers((prev) => ({ ...prev, [answer.questionId]: answer }));
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const assessmentResults = calculateResults(answers);
      setResults(assessmentResults);
      setIsComplete(true);
    }
  };

  return {
    currentQuestion: hasStarted ? questions[currentIndex] : null,
    answers,
    isComplete,
    results,
    hasStarted,
    startAssessment,
    handleAnswer,
  };
};

export default useAssessment;