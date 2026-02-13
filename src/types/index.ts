export type GenderColor = 'm' | 'f' | 'n' | 'p' | '';
export type Level = 'a1' | 'a2' | 'b1' | 'vocab';

export interface Question {
  question: string;
  options: string[];
  correct: string;
  hint: string;
  mnemonic: string;
  explanation: string;
  genderColors?: GenderColor[];
}

export interface QuizTopic {
  topic: string;
  questions: Question[];
}

export interface GrammarTable {
  title: string;
  content: string;
}

export interface MemoryTrick {
  title: string;
  mnemonic: string;
  explanation: string;
}

// B1 Lesson-based types
export interface VocabEntry {
  word: string;
  translation: string;
  category: 'Nomen' | 'Verb' | 'Adjektiv' | 'Ausdruck' | 'Adverb' | 'Präposition';
  gender?: 'm' | 'f' | 'n';
  example: string;
}

export interface GrammarSection {
  title: string;
  explanation: string;
  exercises: Question[];
}

export interface ImageDescription {
  title: string;
  description: string;
  examSentences: string[];
}

export interface B1Lesson {
  id: string;
  title: string;
  subtitle: string;
  vocabulary: { category: string; entries: VocabEntry[] }[];
  grammar: GrammarSection[];
  imageDescriptions: ImageDescription[];
  quiz: Question[];
}

export interface UserProgress {
  totalPoints: number;
  streak: number;
  completedTopics: Record<string, boolean>;
  topicScores: Record<string, number>;
  badges: string[];
  lastPlayed: string;
}

export interface QuizState {
  level: Level | null;
  topicIndex: number | null;
  questionIndex: number;
  score: number;
  attempts: number;
  correctAnswers: number;
  startTime: number | null;
  answers: boolean[];
}
