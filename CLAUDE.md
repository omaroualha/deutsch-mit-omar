# German Learning Quest - Project Guide

## Project Overview
React + Vite + TypeScript app for learning German. Has A1/A2 quiz-based levels, B1 lesson-based levels, vocabulary practice, grammar tables, and memory tricks. Full i18n system (German UI with English hover tooltips).

## Tech Stack
- React 18, Vite, TypeScript (strict, `verbatimModuleSyntax: true`)
- React Router v6 (NOT v7 — v7 broke the API)
- `import type` REQUIRED for type-only imports (due to `erasableSyntaxOnly`)
- CSS variables for theming (light/dark), no CSS framework
- localStorage for progress persistence

## i18n System
- All UI text uses `<T k="translationKey" />` component (shows German + English tooltip on hover)
- Translations live in `src/i18n/translations.ts`
- Every new UI string needs a key added to `translations` object with `{ de: '...', en: '...' }`
- For inline text (not JSX), use `const { t } = useTranslation()` then `t('key')`

## Gender Color Coding
- Masculine (der): blue `var(--masculine)` / `#4A90E2`
- Feminine (die): pink `var(--feminine)` / `#E91E63`
- Neuter (das): green `var(--neuter)` / `#4CAF50`
- Plural: purple `var(--plural)` / `#9C27B0`

---

## B1 Lesson System — Pattern for Adding New Lessons

B1 is DIFFERENT from A1/A2. It is **lesson-based** (not quiz-based). Each lesson comes from a textbook chapter and contains 4 sections:

1. **Wortschatz** — vocabulary tables grouped by category
2. **Grammatik** — grammar explanations (HTML) + interactive exercises
3. **Bildbeschreibung** — image description cards with exam sentences
4. **Lektionsquiz** — summary quiz covering all 3 areas above

### Step-by-step to add a new lesson (e.g., lesson2):

#### 1. Create data file: `src/data/b1/lesson2.ts`

Follow the exact `B1Lesson` type structure from `src/types/index.ts`:

```ts
import type { B1Lesson } from '../../types';

export const lesson2: B1Lesson = {
  id: 'lesson2',
  title: 'Lesson Title Here',
  subtitle: 'Kapitel 2',

  // VOCABULARY: grouped by category
  vocabulary: [
    {
      category: 'Nomen (Thema)',  // category label
      entries: [
        {
          word: 'der Nachbar, -n',        // German word with plural
          translation: 'the neighbor',     // English translation
          category: 'Nomen',               // 'Nomen' | 'Verb' | 'Adjektiv' | 'Ausdruck' | 'Adverb' | 'Präposition'
          gender: 'm',                     // 'm' | 'f' | 'n' (only for Nomen)
          example: 'Mein Nachbar ist nett.' // Example sentence in German
        },
        // ... more entries
      ]
    },
    // more categories: Verben, Adjektive, Ausdrücke, etc.
  ],

  // GRAMMAR: each section has explanation HTML + exercises
  grammar: [
    {
      title: 'Grammar Topic Name',
      explanation: `<h4>Title</h4><table>...</table><p>...</p>`,  // HTML string
      exercises: [
        {
          question: 'Fill in: ___',
          options: ['correct', 'wrong1', 'wrong2', 'wrong3'],
          correct: 'correct',
          hint: 'German hint for student',
          mnemonic: 'Memory trick',
          explanation: 'Why this is correct'
        },
        // 5 exercises per grammar topic
      ]
    },
    // 2-4 grammar sections per lesson
  ],

  // IMAGE DESCRIPTIONS: 3 themed scenes
  imageDescriptions: [
    {
      title: 'Scene Title',
      description: 'German paragraph describing the image (6-10 sentences).',
      examSentences: [
        'Auf dem Bild sieht man...',
        'Im Vordergrund...',
        // 5-6 useful exam sentences
      ]
    },
    // 3 image descriptions per lesson
  ],

  // SUMMARY QUIZ: 15 mixed questions (vocab + grammar + Bildbeschreibung)
  quiz: [
    // ~5 vocab questions
    // ~5 grammar questions
    // ~2 Hausordnung/culture questions
    // ~3 Bildbeschreibung questions
    // Same Question type as exercises
  ]
};
```

#### 2. Register in `src/data/b1/index.ts`

```ts
import { lesson2 } from './lesson2';
export const b1Lessons: B1Lesson[] = [lesson1, lesson2];
```

That's it! No routing/component changes needed — LessonList and LessonPage handle it automatically.

#### 3. Optional: Add lesson-specific grammar tables to `src/data/grammar-tables.ts` and memory tricks to `src/data/memory-tricks.ts`

### Content amounts per lesson:
- **Vocabulary**: ~40-55 words in 3-5 categories
- **Grammar**: 2-4 topics, each with HTML explanation + 5 exercises
- **Image descriptions**: 3 scenes with 6-10 sentence descriptions + 5-6 exam sentences
- **Quiz**: 15 mixed questions

### Key files:
- `src/types/index.ts` — B1Lesson, VocabEntry, GrammarSection, ImageDescription, Question types
- `src/data/b1/` — lesson data files
- `src/components/B1/` — LessonList, LessonPage, VocabTable, GrammarExercise, ImageCard, LessonQuiz
- `src/i18n/translations.ts` — all B1 translation keys already exist (b1Vocabulary, b1Grammar, b1Quiz, etc.)

---

## Best Format for Providing New Lessons (to save tokens)

**DO NOT provide PDF/images of textbook pages** — scanning PDFs costs enormous tokens.

Instead, provide lesson data as a **JSON or structured text file** in `src/assets/`:

### Recommended: `src/assets/lesson2-input.json`

```json
{
  "title": "Lesson Title",
  "subtitle": "Kapitel 2",
  "vocabulary": {
    "Nomen (Thema)": [
      ["der Nachbar, -n", "the neighbor", "m", "Mein Nachbar ist nett."],
      ["die Schule, -n", "the school", "f", "Die Schule ist groß."]
    ],
    "Verben": [
      ["lernen", "to learn", null, "Ich lerne Deutsch."]
    ]
  },
  "grammar": [
    {
      "title": "Topic Name",
      "explanation": "Plain text or HTML explanation",
      "exercises": [
        ["Question?", ["opt1", "opt2", "opt3", "opt4"], "correct", "hint", "mnemonic", "explanation"]
      ]
    }
  ],
  "imageDescriptions": [
    {
      "title": "Scene",
      "description": "German paragraph...",
      "examSentences": ["Sentence 1", "Sentence 2"]
    }
  ],
  "quiz": [
    ["Question?", ["opt1", "opt2", "opt3", "opt4"], "correct", "hint", "mnemonic", "explanation"]
  ]
}
```

Or even simpler — just provide a **plain text/markdown** file with the vocabulary list and grammar points, and Claude will structure it into the TypeScript format.

### What saves the most tokens:
1. **JSON file** (best) — Claude just converts format, minimal thinking
2. **Markdown/text file** — Claude structures it, moderate tokens
3. **PDF** (worst) — Claude reads 16 image pages, huge token cost

Place the file in `src/assets/lesson2-input.json` and say: "Create B1 lesson2 from this file"
