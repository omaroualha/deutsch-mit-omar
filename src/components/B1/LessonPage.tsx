import { useParams, useNavigate } from 'react-router-dom';
import type { B1Lesson } from '../../types';
import { T } from '../Shared/T';
import { VocabTable } from './VocabTable';
import { GrammarExercise } from './GrammarExercise';
import { ImageCard } from './ImageCard';
import { LessonQuiz } from './LessonQuiz';

interface Props {
  lessons: B1Lesson[];
}

export function LessonPage({ lessons }: Props) {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const lesson = lessons.find((l) => l.id === lessonId);

  if (!lesson) {
    return (
      <section className="section active">
        <p><T k="topicNotFound" /></p>
        <button className="btn btn-primary" onClick={() => navigate('/b1')}>
          <T k="b1BackToLessons" />
        </button>
      </section>
    );
  }

  return (
    <section className="section active lesson-page">
      <div className="lesson-header-bar">
        <button className="btn btn-secondary" onClick={() => navigate('/b1')}>
          ← <T k="b1BackToLessons" />
        </button>
        <div>
          <span className="lesson-subtitle-tag">{lesson.subtitle}</span>
          <h2>{lesson.title}</h2>
        </div>
      </div>

      {/* Anchor navigation */}
      <nav className="lesson-nav">
        <a href="#vocab"><T k="b1Vocabulary" /></a>
        <a href="#grammar"><T k="b1Grammar" /></a>
        <a href="#images"><T k="b1ImageDesc" /></a>
        <a href="#quiz"><T k="b1Quiz" /></a>
      </nav>

      {/* VOCABULARY */}
      <div id="vocab" className="lesson-section">
        <h3><T k="b1Vocabulary" /></h3>
        {lesson.vocabulary.map((group, i) => (
          <VocabTable key={i} category={group.category} entries={group.entries} />
        ))}
      </div>

      {/* GRAMMAR */}
      <div id="grammar" className="lesson-section">
        <h3><T k="b1Grammar" /></h3>
        {lesson.grammar.map((section, i) => (
          <div key={i} className="grammar-block">
            <h4>{section.title}</h4>
            <div
              className="grammar-explanation"
              dangerouslySetInnerHTML={{ __html: section.explanation }}
            />
            <h5><T k="b1Exercises" /></h5>
            <GrammarExercise exercises={section.exercises} />
          </div>
        ))}
      </div>

      {/* IMAGE DESCRIPTIONS */}
      <div id="images" className="lesson-section">
        <h3><T k="b1ImageDesc" /></h3>
        <p className="mb-20" style={{ color: 'var(--text-secondary)' }}>
          <T k="b1ImageDescSub" />
        </p>
        <div className="image-cards-grid">
          {lesson.imageDescriptions.map((img, i) => (
            <ImageCard key={i} image={img} index={i} />
          ))}
        </div>
      </div>

      {/* SUMMARY QUIZ */}
      <div id="quiz" className="lesson-section">
        <h3><T k="b1Quiz" /></h3>
        <p className="mb-20" style={{ color: 'var(--text-secondary)' }}>
          <T k="b1QuizSub" />
        </p>
        <LessonQuiz questions={lesson.quiz} lessonTitle={lesson.title} />
      </div>
    </section>
  );
}
