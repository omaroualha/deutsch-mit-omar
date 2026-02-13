import { useState, useCallback } from 'react';
import type { QuizTopic } from '../types';
import { calculatePoints } from '../utils/scoring';

interface QuizSession {
  questionIndex: number;
  score: number;
  attempts: number;
  correctAnswers: number;
  startTime: number;
  answered: boolean;
  isCorrect: boolean | null;
}

const initialSession: QuizSession = {
  questionIndex: 0,
  score: 0,
  attempts: 0,
  correctAnswers: 0,
  startTime: Date.now(),
  answered: false,
  isCorrect: null,
};

export function useQuiz(topic: QuizTopic | null) {
  const [session, setSession] = useState<QuizSession>({ ...initialSession, startTime: Date.now() });

  const currentQuestion = topic?.questions[session.questionIndex] ?? null;
  const totalQuestions = topic?.questions.length ?? 0;
  const isFinished = session.questionIndex >= totalQuestions && totalQuestions > 0;

  const resetQuiz = useCallback(() => {
    setSession({ ...initialSession, startTime: Date.now() });
  }, []);

  const selectAnswer = useCallback(
    (optionText: string) => {
      if (!currentQuestion || session.answered) return;

      const isCorrect = optionText === currentQuestion.correct;
      const newAttempts = session.attempts + 1;

      if (isCorrect) {
        const points = calculatePoints(newAttempts);
        setSession((prev) => ({
          ...prev,
          attempts: 0,
          score: prev.score + points,
          correctAnswers: prev.correctAnswers + 1,
          answered: true,
          isCorrect: true,
        }));
      } else {
        if (newAttempts >= 2) {
          setSession((prev) => ({
            ...prev,
            attempts: 0,
            answered: true,
            isCorrect: false,
          }));
        } else {
          setSession((prev) => ({
            ...prev,
            attempts: newAttempts,
            isCorrect: false,
          }));
        }
      }
    },
    [currentQuestion, session.answered, session.attempts]
  );

  const nextQuestion = useCallback(() => {
    setSession((prev) => ({
      ...prev,
      questionIndex: prev.questionIndex + 1,
      attempts: 0,
      answered: false,
      isCorrect: null,
    }));
  }, []);

  const timeTaken = Math.round((Date.now() - session.startTime) / 1000);

  return {
    session,
    currentQuestion,
    totalQuestions,
    isFinished,
    timeTaken,
    selectAnswer,
    nextQuestion,
    resetQuiz,
  };
}
