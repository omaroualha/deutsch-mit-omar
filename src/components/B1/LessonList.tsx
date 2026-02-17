import { useNavigate } from 'react-router-dom';
import type { B1Lesson } from '../../types';
import { T } from '../Shared/T';

interface Props {
  lessons: B1Lesson[];
  completedLessons: Record<string, number>;
}

export function LessonList({ lessons, completedLessons }: Props) {
  const navigate = useNavigate();

  return (
    <section className="section active">
      <h2 className="mb-20"><T k="b1Topics" /></h2>
      <div className="mb-20">
        <button className="btn btn-primary" onClick={() => navigate('/b1/master-review')}>
          B1.1 Master Review + Mega Test
        </button>
      </div>
      <div className="lessons-grid">
        {lessons.map((lesson) => {
          const score = completedLessons[lesson.id];
          const isCompleted = score !== undefined;
          return (
            <div
              key={lesson.id}
              className={`lesson-card${isCompleted ? ' completed' : ''}`}
              onClick={() => navigate(`/b1/lesson/${lesson.id}`)}
            >
              <div className="lesson-card-header">
                <div>
                  <div className="lesson-subtitle">{lesson.subtitle}</div>
                  <h3 className="lesson-title">{lesson.title}</h3>
                </div>
                {isCompleted && (
                  <div className="lesson-complete-badge" title={`${score}%`}>✓</div>
                )}
              </div>
              <div className="lesson-meta">
                <span>{lesson.vocabulary.reduce((s, g) => s + g.entries.length, 0)} <T k="b1Words" /></span>
                <span>{lesson.grammar.length} <T k="b1GrammarTopics" /></span>
                <span>{lesson.imageDescriptions.length} <T k="b1Images" /></span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
