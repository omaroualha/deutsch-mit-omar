# German Learning Quest

An interactive web app for learning German, covering levels A1, A2, and B1. Built with React, TypeScript, and Vite.

## Features

- **A1 & A2 Levels** — Topic-based quizzes with multiple-choice questions, instant feedback, memory tricks, and score tracking
- **B1 Lessons** — Lesson-based learning system with 4 sections per lesson:
  - **Wortschatz** — Vocabulary tables grouped by category with gender color-coding (der = blue, die = pink, das = green)
  - **Grammatik** — Grammar explanations with interactive exercises
  - **Bildbeschreibung** — Image description practice with exam-ready sentences
  - **Lektionsquiz** — Summary quiz covering all sections
- **Grammar Tables** — Reference tables for key grammar topics
- **Memory Tricks** — Mnemonics to help remember tricky rules
- **Dark/Light Mode** — Toggle between themes
- **Progress Tracking** — Scores and completion saved in localStorage
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Bilingual UI** — German interface with English tooltips on hover

## Tech Stack

- React 18
- TypeScript (strict mode)
- Vite
- React Router v6
- CSS Variables for theming

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## B1 Lessons

Currently includes 7 lessons based on textbook chapters:

| # | Title | Topic |
|---|-------|-------|
| 1 | Neue Nachbarn | Housing, neighbors, Hausordnung |
| 2 | Hier kaufe ich ein | Shopping, complaints, reflexive verbs |
| 3 | Wir sind für Sie da | Banking, insurance, consumer advice |
| 4 | Schmeckt's? | Nutrition, eating habits, cooking |
| 5 | Ah, so ist das! | Cultural surprises, languages, workplace |
| 6 | Im Krankenhaus | Hospital, emergencies, medical vocab |
| 7 | Alles für die Umwelt | Environment, energy, climate, recycling |

## License

MIT
