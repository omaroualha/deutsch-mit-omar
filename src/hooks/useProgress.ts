import { useState, useCallback } from 'react';
import type { UserProgress } from '../types';

const STORAGE_KEY = 'german-quiz-progress';

const defaultProgress: UserProgress = {
  totalPoints: 0,
  streak: 0,
  completedTopics: {},
  topicScores: {},
  completedLessons: {},
  badges: [],
  lastPlayed: '',
};

function loadFromStorage(): UserProgress {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return { ...defaultProgress, ...JSON.parse(saved) };
  } catch { /* ignore */ }
  return defaultProgress;
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(loadFromStorage);

  const save = useCallback((updated: UserProgress) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setProgress(updated);
  }, []);

  const completeTopic = useCallback(
    (topicKey: string, score: number, percentage: number) => {
      const updated: UserProgress = {
        ...progress,
        totalPoints: progress.totalPoints + score,
        streak: percentage >= 80 ? progress.streak + 1 : 0,
        completedTopics: { ...progress.completedTopics, [topicKey]: true },
        topicScores: { ...progress.topicScores, [topicKey]: percentage },
        lastPlayed: new Date().toISOString(),
      };
      save(updated);
    },
    [progress, save]
  );

  const completeLesson = useCallback(
    (lessonId: string, percentage: number) => {
      const best = Math.max(progress.completedLessons[lessonId] ?? 0, percentage);
      const updated: UserProgress = {
        ...progress,
        completedLessons: { ...progress.completedLessons, [lessonId]: best },
        lastPlayed: new Date().toISOString(),
      };
      save(updated);
    },
    [progress, save]
  );

  const getCompletedCount = useCallback(
    (levelPrefix: string) =>
      Object.keys(progress.completedTopics).filter((k) => k.startsWith(levelPrefix)).length,
    [progress]
  );

  const getCompletedLessonCount = useCallback(
    () => Object.keys(progress.completedLessons).length,
    [progress]
  );

  return { progress, completeTopic, completeLesson, getCompletedCount, getCompletedLessonCount };
}
