import { useNavigate } from 'react-router-dom';
import type { B1Lesson } from '../../types';
import { T } from '../Shared/T';

interface Props {
  lessons: B1Lesson[];
}

export function LessonList({ lessons }: Props) {
  const navigate = useNavigate();

  return (
    <section className="section active">
      <h2 className="mb-20"><T k="b1Topics" /></h2>
      <div className="lessons-grid">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="lesson-card"
            onClick={() => navigate(`/b1/lesson/${lesson.id}`)}
          >
            <div className="lesson-subtitle">{lesson.subtitle}</div>
            <h3 className="lesson-title">{lesson.title}</h3>
            <div className="lesson-meta">
              <span>{lesson.vocabulary.reduce((s, g) => s + g.entries.length, 0)} <T k="b1Words" /></span>
              <span>{lesson.grammar.length} <T k="b1GrammarTopics" /></span>
              <span>{lesson.imageDescriptions.length} <T k="b1Images" /></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
