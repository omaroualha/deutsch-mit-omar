import type { QuizTopic, Level } from '../types';
import { a1Topics } from './a1';
import { a2Topics } from './a2';
import { vocabTopics } from './vocab';
export { grammarTables } from './grammar-tables';
export { memoryTricks } from './memory-tricks';
export { b1Lessons } from './b1';

const topicsByLevel: Record<string, QuizTopic[]> = {
  a1: a1Topics,
  a2: a2Topics,
  vocab: vocabTopics,
};

export function getTopics(level: Level): QuizTopic[] {
  return topicsByLevel[level] ?? [];
}

export { a1Topics, a2Topics, vocabTopics };
