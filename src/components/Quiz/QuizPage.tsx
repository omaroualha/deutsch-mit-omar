import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { QuizTopic, Level } from '../../types';
import { useQuiz } from '../../hooks/useQuiz';
import { useTranslation } from '../../i18n/useTranslation';
import { Confetti } from '../Shared/Confetti';
import { T } from '../Shared/T';
import { ResultsPage } from './ResultsPage';
import { formatTime } from '../../utils/scoring';

interface Props {
  getTopics: (level: Level) => QuizTopic[];
  onComplete: (topicKey: string, score: number, percentage: number) => void;
}

export function QuizPage({ getTopics, onComplete }: Props) {
  const { level, topicIndex } = useParams<{ level: string; topicIndex: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const idx = Number(topicIndex);
  const topics = getTopics(level as Level);
  const topic = topics[idx] ?? null;

  const { session, currentQuestion, totalQuestions, isFinished, timeTaken, selectAnswer, nextQuestion, resetQuiz } =
    useQuiz(topic);

  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [incorrectOptions, setIncorrectOptions] = useState<Set<string>>(new Set());

  if (!topic) {
    return (
      <section className="section active">
        <p><T k="topicNotFound" /></p>
        <button className="btn btn-primary" onClick={() => navigate('/')}><T k="goHome" /></button>
      </section>
    );
  }

  if (isFinished) {
    const maxScore = totalQuestions * 10;
    const percentage = Math.round((session.correctAnswers / totalQuestions) * 100);
    const topicKey = `${level}-${idx}`;

    return (
      <ResultsPage
        score={session.score}
        maxScore={maxScore}
        correctAnswers={session.correctAnswers}
        totalQuestions={totalQuestions}
        percentage={percentage}
        timeTaken={formatTime(timeTaken)}
        onGoHome={() => {
          onComplete(topicKey, session.score, percentage);
          navigate('/');
        }}
        onRetake={() => {
          onComplete(topicKey, session.score, percentage);
          resetQuiz();
          setSelectedOption(null);
          setIncorrectOptions(new Set());
        }}
      />
    );
  }

  const handleSelect = (option: string) => {
    if (session.answered) return;
    if (incorrectOptions.has(option)) return;

    setSelectedOption(option);

    const isCorrect = option === currentQuestion!.correct;

    if (isCorrect && session.attempts === 0) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }

    if (!isCorrect) {
      setIncorrectOptions((prev) => new Set(prev).add(option));
    }

    selectAnswer(option);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIncorrectOptions(new Set());
    nextQuestion();
  };

  const getOptionClass = (option: string, index: number) => {
    const classes = ['option'];

    if (currentQuestion?.genderColors?.[index]) {
      classes.push(`gender-${currentQuestion.genderColors[index]}`);
    }

    if (session.answered) {
      if (option === currentQuestion!.correct) {
        classes.push('correct');
      } else if (incorrectOptions.has(option)) {
        classes.push('incorrect');
      }
      classes.push('disabled');
    } else if (incorrectOptions.has(option)) {
      classes.push('incorrect', 'disabled');
    }

    return classes.join(' ');
  };

  return (
    <section className="section active">
      {showConfetti && <Confetti />}
      <div className="quiz-container">
        <div className="quiz-header">
          <div className="quiz-title">
            {(level ?? '').toUpperCase()} - {topic.topic}
          </div>
          <div className="quiz-stats">
            <span>
              <T k="question" /> {session.questionIndex + 1}/{totalQuestions}
            </span>
            <span>⭐ {session.score} <T k="points" /></span>
          </div>
        </div>

        <div className="question-card">
          <div className="question-number">
            <T k="question" /> {session.questionIndex + 1} <T k="of" /> {totalQuestions}
          </div>
          <div className="question-text">{currentQuestion!.question}</div>

          <div className="options-container">
            {currentQuestion!.options.map((option, i) => (
              <div key={i} className={getOptionClass(option, i)} onClick={() => handleSelect(option)}>
                {option}
              </div>
            ))}
          </div>

          {(session.answered || session.isCorrect === false) && (
            <div className={`feedback-box show ${session.isCorrect ? 'success' : 'error'}`}>
              <div className="feedback-title">
                {session.answered && session.isCorrect
                  ? <>✅ <T k="correct" /></>
                  : <>❌ <T k="incorrect" /></>}
              </div>
              <div>{currentQuestion!.explanation}</div>
              {!session.isCorrect && currentQuestion!.mnemonic && (
                <div className="mnemonic-hint">💡 {currentQuestion!.mnemonic}</div>
              )}
            </div>
          )}

          <div className="quiz-actions">
            <button
              className="btn btn-secondary"
              onClick={() => alert(`💡 ${t('hint')}: ${currentQuestion!.hint}`)}
            >
              💡 <T k="needHint" />
            </button>
            <button className="btn btn-primary" onClick={handleNext} disabled={!session.answered}>
              {session.questionIndex + 1 < totalQuestions
                ? <T k="nextQuestion" />
                : <T k="seeResults" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
