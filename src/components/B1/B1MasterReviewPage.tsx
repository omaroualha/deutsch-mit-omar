import type { B1Lesson, VocabEntry } from '../../types';
import { LessonQuiz } from './LessonQuiz';
import { PERSONS, conjugateVerb } from './VocabTable';

interface Props {
  lessons: B1Lesson[];
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function normalizeKey(value: string): string {
  return value.toLowerCase().trim();
}

function uniqueByWord(entries: Array<VocabEntry & { lesson: string; lessonTitle: string }>) {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    const key = normalizeKey(entry.word);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function B1MasterReviewPage({ lessons }: Props) {
  const entriesWithLesson = lessons.flatMap((lesson) =>
    lesson.vocabulary.flatMap((group) =>
      group.entries.map((entry) => ({
        ...entry,
        lesson: lesson.subtitle,
        lessonTitle: lesson.title,
      })),
    ),
  );

  const allVerbs = uniqueByWord(entriesWithLesson.filter((entry) => entry.category === 'Verb'));
  const allAdjectives = uniqueByWord(
    entriesWithLesson.filter((entry) => entry.category === 'Adjektiv' || entry.category === 'Adverb'),
  );

  // Core vocabulary only: nouns, prepositions and expressions; keep concise by limiting per lesson
  const coreVocab = lessons.flatMap((lesson) => {
    const lessonEntries = lesson.vocabulary.flatMap((group) => group.entries);
    const filtered = lessonEntries.filter(
      (entry) => entry.category === 'Nomen' || entry.category === 'Präposition' || entry.category === 'Ausdruck',
    );
    return filtered.slice(0, 18).map((entry) => ({
      ...entry,
      lesson: lesson.subtitle,
      lessonTitle: lesson.title,
    }));
  });

  // Important mixed test: keep compact (5 per lesson)
  const importantQuestions = lessons.flatMap((lesson) =>
    lesson.quiz.slice(0, 5).map((q) => ({
      ...q,
      question: `[${lesson.subtitle} - ${lesson.title}] ${q.question}`,
    })),
  );

  return (
    <section className="section active lesson-page master-review-page">
      <div className="lesson-header-bar">
        <div>
          <span className="lesson-subtitle-tag">B1.1 Master Review</span>
          <h2>Focused Summary + Important Tables + Test</h2>
        </div>
      </div>

      <div className="grammar-block">
        <h4>How To Use This Page</h4>
        <p className="grammar-explanation">
          This is the shortened exam sheet for B1.1 (Lessons 1-7): only high-priority grammar, one core vocabulary
          table by lesson, one full verbs table, one adjectives/adverbs table, and one important mixed test.
        </p>
        <div className="lesson-meta">
          <span>{lessons.length} lessons covered</span>
          <span>{coreVocab.length} core vocab items</span>
          <span>{allVerbs.length} unique verbs</span>
          <span>{allAdjectives.length} unique adjectives/adverbs</span>
          <span>{importantQuestions.length} important test questions</span>
        </div>
      </div>

      <div className="lesson-section">
        <h3>Important Grammar By Lesson</h3>
        {lessons.map((lesson) => (
          <div key={lesson.id} className="grammar-block">
            <h4>
              {lesson.subtitle}: {lesson.title}
            </h4>
            <ul className="master-list">
              {lesson.grammar.map((grammar, index) => (
                <li key={index}>
                  <strong>{grammar.title}</strong>: {stripHtml(grammar.explanation).slice(0, 160)}...
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="lesson-section">
        <h3>Core Vocabulary (By Lesson)</h3>
        <div className="grammar-block">
          <table className="vocab-table">
            <thead>
              <tr>
                <th>Lesson</th>
                <th>Word</th>
                <th>Meaning</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              {coreVocab.map((item, index) => (
                <tr key={`core-${index}`}>
                  <td>{item.lesson}</td>
                  <td>{item.word}</td>
                  <td>{item.translation}</td>
                  <td className="vocab-example">{item.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="lesson-section">
        <h3>All New Verbs (Single Table)</h3>
        <div className="grammar-block">
          <table className="vocab-table">
            <thead>
              <tr>
                <th>Lesson</th>
                <th>Verb</th>
                <th>Meaning</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              {allVerbs.map((verb, index) => (
                <tr key={`verb-${index}`}>
                  <td>{verb.lesson}</td>
                  <td>
                    <span className="verb-hover" tabIndex={0}>
                      {verb.word}
                      {(() => {
                        const conjugation = conjugateVerb(verb.word);
                        if (!conjugation) return null;

                        return (
                          <span className="verb-tooltip" role="tooltip">
                            <strong>{conjugation.infinitive}</strong> - B1 Formen
                            <table>
                              <tbody>
                                <tr className="verb-section-row">
                                  <td colSpan={2}>Praesens</td>
                                </tr>
                                {PERSONS.map((person) => (
                                  <tr key={`master-present-${verb.word}-${person}`}>
                                    <td>{person}</td>
                                    <td>{conjugation.present[person]}</td>
                                  </tr>
                                ))}
                                <tr className="verb-section-row">
                                  <td colSpan={2}>Praeteritum</td>
                                </tr>
                                {PERSONS.map((person) => (
                                  <tr key={`master-past-${verb.word}-${person}`}>
                                    <td>{person}</td>
                                    <td>{conjugation.praeteritum[person]}</td>
                                  </tr>
                                ))}
                                <tr className="verb-section-row">
                                  <td colSpan={2}>Futur I</td>
                                </tr>
                                {PERSONS.map((person) => (
                                  <tr key={`master-future-${verb.word}-${person}`}>
                                    <td>{person}</td>
                                    <td>{conjugation.futurI[person]}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            <div className="verb-tooltip-extra">
                              <div><strong>Perfekt (ich):</strong> {conjugation.perfectIch}</div>
                              <div><strong>Praeteritum (ich):</strong> {conjugation.praeteritumIch}</div>
                              <div><strong>Konjunktiv II (ich):</strong> {conjugation.konjunktivIIIch}</div>
                            </div>
                          </span>
                        );
                      })()}
                    </span>
                  </td>
                  <td>{verb.translation}</td>
                  <td className="vocab-example">{verb.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="lesson-section">
        <h3>Relevant Adjectives and Adverbs (Single Table)</h3>
        <div className="grammar-block">
          <table className="vocab-table">
            <thead>
              <tr>
                <th>Lesson</th>
                <th>Word</th>
                <th>Type</th>
                <th>Meaning</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              {allAdjectives.map((item, index) => (
                <tr key={`adj-${index}`}>
                  <td>{item.lesson}</td>
                  <td>{item.word}</td>
                  <td>{item.category}</td>
                  <td>{item.translation}</td>
                  <td className="vocab-example">{item.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="lesson-section" id="b1-master-test">
        <h3>B1.1 Important Mixed Test (Lessons 1-7)</h3>
        <p className="mb-20" style={{ color: 'var(--text-secondary)' }}>
          Selected key questions only. Target score: 80%+ on first try.
        </p>
        <LessonQuiz questions={importantQuestions} lessonTitle="B1.1 Master Review" />
      </div>
    </section>
  );
}
