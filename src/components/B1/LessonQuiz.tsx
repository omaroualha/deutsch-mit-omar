import { useState } from 'react';
import type { Question } from '../../types';
import { T } from '../Shared/T';
import { useTranslation } from '../../i18n/useTranslation';
import { Confetti } from '../Shared/Confetti';

interface Props {
  questions: Question[];
  lessonTitle: string;
}

export function LessonQuiz({ questions, lessonTitle }: Props) {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [incorrectSet, setIncorrectSet] = useState<Set<string>>(new Set());
  const [correctCount, setCorrectCount] = useState(0);
  const [firstTryCorrect, setFirstTryCorrect] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const total = questions.length;

  const handleSelect = (option: string) => {
    if (answered) return;
    if (incorrectSet.has(option)) return;

    setSelected(option);
    const isCorrect = option === q.correct;

    if (isCorrect) {
      setAnswered(true);
      setCorrectCount((c) => c + 1);
      if (incorrectSet.size === 0) {
        setFirstTryCorrect((c) => c + 1);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    } else {
      setIncorrectSet((prev) => new Set(prev).add(option));
    }
  };

  const handleNext = () => {
    if (current + 1 >= total) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
      setIncorrectSet(new Set());
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setIncorrectSet(new Set());
    setCorrectCount(0);
    setFirstTryCorrect(0);
    setFinished(false);
  };

  if (finished) {
    const percentage = Math.round((firstTryCorrect / total) * 100);
    return (
      <div className="lesson-quiz-results">
        <div className="quiz-results-card">
          <h4><T k="b1QuizComplete" /></h4>
          <div className="quiz-results-score">{firstTryCorrect}/{total}</div>
          <p className="quiz-results-label"><T k="b1QuizFirstTry" /></p>
          <div className="quiz-results-bar-container">
            <div
              className="quiz-results-bar"
              style={{ width: `${percentage}%` }}
            >
              {percentage}%
            </div>
          </div>
          <p className="quiz-results-message">
            {percentage >= 80
              ? t('b1QuizGreat')
              : percentage >= 50
                ? t('b1QuizGood')
                : t('b1QuizRetry')}
          </p>
          <button className="btn btn-primary" onClick={handleRestart}>
            <T k="b1QuizRestart" />
          </button>
        </div>
      </div>
    );
  }

  const getOptionClass = (option: string) => {
    let cls = 'exercise-option';
    if (answered && option === q.correct) cls += ' correct';
    else if (incorrectSet.has(option)) cls += ' incorrect';
    if (answered) cls += ' disabled';
    return cls;
  };

  return (
    <div className="lesson-quiz">
      {showConfetti && <Confetti />}
      <div className="lesson-quiz-progress">
        <span><T k="question" /> {current + 1} <T k="of" /> {total}</span>
        <span>{correctCount} <T k="b1QuizCorrectSoFar" /></span>
      </div>
      <div className="lesson-quiz-progress-bar">
        <div style={{ width: `${((current + 1) / total) * 100}%` }} />
      </div>

      <div className="exercise-card">
        <div className="exercise-question">{q.question}</div>
        <div className="exercise-options">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={getOptionClass(opt)}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        {answered && (
          <div className="exercise-feedback success">
            <strong>{t('correct')}</strong> {q.explanation}
          </div>
        )}
        {!answered && selected && incorrectSet.size > 0 && (
          <div className="exercise-feedback error">
            <strong>{t('incorrect')}</strong> {q.mnemonic}
          </div>
        )}
      </div>

      <div className="quiz-actions">
        <button
          className="btn btn-secondary"
          onClick={() => alert(`💡 ${t('hint')}: ${q.hint}`)}
        >
          💡 <T k="needHint" />
        </button>
        <button className="btn btn-primary" onClick={handleNext} disabled={!answered}>
          {current + 1 < total ? <T k="nextQuestion" /> : <T k="seeResults" />}
        </button>
      </div>
    </div>
  );
}
