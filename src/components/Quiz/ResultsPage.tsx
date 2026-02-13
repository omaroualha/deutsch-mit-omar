import { T } from '../Shared/T';

interface Props {
  score: number;
  maxScore: number;
  correctAnswers: number;
  totalQuestions: number;
  percentage: number;
  timeTaken: string;
  onGoHome: () => void;
  onRetake: () => void;
}

export function ResultsPage({
  score,
  maxScore,
  correctAnswers,
  totalQuestions,
  percentage,
  timeTaken,
  onGoHome,
  onRetake,
}: Props) {
  return (
    <section className="section active">
      <div className="results-container">
        <div className="results-card">
          <div className="results-title">🎉 <T k="quizComplete" /></div>
          <div className="score-display">
            {score}/{maxScore}
          </div>

          <div className="results-stats">
            <div className="result-stat">
              <div className="result-stat-value">{correctAnswers}/{totalQuestions}</div>
              <div className="result-stat-label"><T k="correctLabel" /></div>
            </div>
            <div className="result-stat">
              <div className="result-stat-value">{percentage}%</div>
              <div className="result-stat-label"><T k="accuracy" /></div>
            </div>
            <div className="result-stat">
              <div className="result-stat-value">{timeTaken}</div>
              <div className="result-stat-label"><T k="time" /></div>
            </div>
          </div>

          {percentage >= 80 && (
            <div className="badge-unlock">
              <div className="badge-icon">🏆</div>
              <div><T k="greatStreak" /></div>
            </div>
          )}

          <div className="quiz-actions">
            <button className="btn btn-secondary" onClick={onGoHome}>
              ← <T k="backHome" />
            </button>
            <button className="btn btn-primary" onClick={onRetake}>
              <T k="retakeQuiz" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
