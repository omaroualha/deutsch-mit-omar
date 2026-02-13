export type LangCode = 'de' | 'en';

export type TranslationKey = keyof typeof translations;

export const translations = {
  appTitle: { de: 'DeutschFit', en: 'DeutschFit' },
  welcome: { de: 'Willkommen bei DeutschFit!', en: 'Welcome to DeutschFit!' },
  welcomeSub: {
    de: 'Meistere deutsche Grammatik und Wortschatz mit interaktiven Quizzen und kreativen Eselsbrücken',
    en: 'Master German grammar and vocabulary with interactive quizzes and creative mnemonics',
  },
  overallProgress: { de: 'Dein Gesamtfortschritt', en: 'Your Overall Progress' },
  completeQuizzes: {
    de: 'Schließe Quizze und Lektionen ab, um Abzeichen freizuschalten und Deutsch zu meistern!',
    en: 'Complete quizzes and lessons to unlock badges and master German!',
  },
  a1Beginner: { de: 'A1 Anfänger', en: 'A1 Beginner' },
  a1Desc: {
    de: 'grundlegende Themen zur deutschen Grammatik',
    en: 'essential topics covering basic German grammar',
  },
  a2Intermediate: { de: 'A2 Mittelstufe', en: 'A2 Intermediate' },
  a2Desc: {
    de: 'weiterführende Themen für Fortgeschrittene',
    en: 'advanced topics for intermediate learners',
  },
  b1Intermediate: { de: 'B1 Fortgeschritten', en: 'B1 Upper Intermediate' },
  b1Desc: {
    de: '7 Lektionen: Alltag, Arbeit, Gesundheit und Umwelt – mit Wortschatz, Grammatik und Prüfungstraining',
    en: '7 lessons: daily life, work, health and environment - with vocabulary, grammar and exam training',
  },
  vocabPractice: { de: 'Wortschatzübung', en: 'Vocabulary Practice' },
  vocabDesc: {
    de: 'thematische Wortschatzmodule mit praktischen Wörtern',
    en: 'themed vocabulary modules with practical words',
  },
  progress: { de: 'Fortschritt', en: 'Progress' },
  topics: { de: 'Themen', en: 'topics' },
  a1Topics: { de: 'A1 Anfänger-Themen', en: 'A1 Beginner Topics' },
  a2Topics: { de: 'A2 Mittelstufe-Themen', en: 'A2 Intermediate Topics' },
  b1Topics: { de: 'B1 Fortgeschritten-Themen', en: 'B1 Upper Intermediate Topics' },
  vocabTopics: { de: 'Wortschatzübung', en: 'Vocabulary Practice' },

  // Navigation
  navHome: { de: 'Startseite', en: 'Home' },
  navA1: { de: 'A1 Anfänger', en: 'A1 Beginner' },
  navA2: { de: 'A2 Mittelstufe', en: 'A2 Intermediate' },
  navB1: { de: 'B1 Fortgeschritten', en: 'B1 Upper Intermediate' },
  navVocab: { de: 'Wortschatz', en: 'Vocabulary' },
  navGrammar: { de: 'Grammatiktabellen', en: 'Grammar Tables' },
  navTricks: { de: 'Merktricks', en: 'Memory Tricks' },

  // Topic grid
  questions: { de: 'Fragen', en: 'questions' },
  completed: { de: 'Abgeschlossen \u2713', en: 'Completed \u2713' },
  notStarted: { de: 'Noch nicht begonnen', en: 'Not started' },

  // Quiz
  topicNotFound: { de: 'Thema nicht gefunden.', en: 'Topic not found.' },
  goHome: { de: 'Zur Startseite', en: 'Go Home' },
  question: { de: 'Frage', en: 'Question' },
  of: { de: 'von', en: 'of' },
  points: { de: 'Pkt.', en: 'pts' },
  correct: { de: 'Richtig!', en: 'Correct!' },
  incorrect: { de: 'Leider falsch', en: 'Not quite right' },
  hint: { de: 'Hinweis', en: 'Hint' },
  needHint: { de: 'Brauchst du einen Hinweis?', en: 'Need a hint?' },
  nextQuestion: { de: 'Nächste Frage \u2192', en: 'Next Question \u2192' },
  seeResults: { de: 'Ergebnisse anzeigen \u2192', en: 'See Results \u2192' },

  // Results
  quizComplete: { de: 'Quiz abgeschlossen!', en: 'Quiz Complete!' },
  correctLabel: { de: 'Richtig', en: 'Correct' },
  accuracy: { de: 'Genauigkeit', en: 'Accuracy' },
  time: { de: 'Zeit', en: 'Time' },
  greatStreak: { de: 'Super gemacht! Serie +1', en: 'Great job! Streak +1' },
  backHome: { de: 'Zur Startseite', en: 'Back to Home' },
  retakeQuiz: { de: 'Quiz wiederholen', en: 'Retake Quiz' },

  // B1 Lesson
  b1Words: { de: 'Wörter', en: 'words' },
  b1GrammarTopics: { de: 'Grammatikthemen', en: 'grammar topics' },
  b1Images: { de: 'Bildbeschreibungen', en: 'image descriptions' },
  b1LessonLabel: { de: 'Lektion(en) verfügbar', en: 'lesson(s) available' },
  b1Vocabulary: { de: 'Wortschatz', en: 'Vocabulary' },
  b1Grammar: { de: 'Grammatik', en: 'Grammar' },
  b1Exercises: { de: 'Übungen', en: 'Exercises' },
  b1ImageDesc: { de: 'Bildbeschreibung', en: 'Image Description' },
  b1ImageDescSub: { de: 'Übe Bilder auf Deutsch zu beschreiben – wichtig für die Prüfung!', en: 'Practice describing images in German – important for the exam!' },
  b1ExamSentences: { de: 'Nützliche Sätze für die Prüfung', en: 'Useful sentences for the exam' },
  b1BackToLessons: { de: 'Zurück zu Lektionen', en: 'Back to Lessons' },
  b1Quiz: { de: 'Lektionsquiz', en: 'Lesson Quiz' },
  b1QuizSub: { de: 'Teste dein Wissen! Dieses Quiz fasst Wortschatz, Grammatik und Bildbeschreibung zusammen.', en: 'Test your knowledge! This quiz summarizes vocabulary, grammar and image description.' },
  b1QuizComplete: { de: 'Quiz abgeschlossen!', en: 'Quiz Complete!' },
  b1QuizFirstTry: { de: 'beim ersten Versuch richtig', en: 'correct on first try' },
  b1QuizCorrectSoFar: { de: 'richtig', en: 'correct' },
  b1QuizGreat: { de: 'Ausgezeichnet! Du hast die Lektion sehr gut verstanden!', en: 'Excellent! You understood the lesson very well!' },
  b1QuizGood: { de: 'Gut gemacht! Wiederhole die Abschnitte, die dir schwer fielen.', en: 'Well done! Review the sections that were difficult for you.' },
  b1QuizRetry: { de: 'Schau dir die Lektion nochmal an und versuche es dann erneut!', en: 'Review the lesson again and then try once more!' },
  b1QuizRestart: { de: 'Quiz wiederholen', en: 'Retake Quiz' },

  // Grammar & Tricks
  grammarRef: { de: 'Wichtige Grammatikübersicht', en: 'Essential Grammar Reference' },
  memoryTricks: { de: 'Kreative Merktricks', en: 'Creative Memory Tricks' },
} as const;
