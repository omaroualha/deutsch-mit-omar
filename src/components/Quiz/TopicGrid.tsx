import { useNavigate } from 'react-router-dom';
import type { QuizTopic, Level } from '../../types';
import type { TranslationKey } from '../../i18n/translations';
import { T } from '../Shared/T';

interface Props {
  level: Level;
  levelKey: TranslationKey;
  topics: QuizTopic[];
  completedTopics: Record<string, boolean>;
}

export function TopicGrid({ level, levelKey, topics, completedTopics }: Props) {
  const navigate = useNavigate();

  return (
    <section className="section active">
      <h2 className="mb-20"><T k={levelKey} /></h2>
      <div className="topics-grid">
        {topics.map((topic, index) => {
          const topicKey = `${level}-${index}`;
          const isCompleted = !!completedTopics[topicKey];

          return (
            <div
              key={topicKey}
              className={`topic-card${isCompleted ? ' completed' : ''}`}
              onClick={() => navigate(`/${level}/quiz/${index}`)}
            >
              <div className="topic-title">{topic.topic}</div>
              <div className="topic-meta">
                <span>{topic.questions.length} <T k="questions" /></span>
                <span>{isCompleted ? <T k="completed" /> : <T k="notStarted" />}</span>
              </div>
              {isCompleted && <div className="completion-badge">✓</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
