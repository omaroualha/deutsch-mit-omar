import { useNavigate } from 'react-router-dom';
import { ProgressBar } from '../Shared/ProgressBar';
import { T } from '../Shared/T';
import { useTranslation } from '../../i18n/useTranslation';

interface Props {
  a1Count: number;
  a2Count: number;
  b1LessonCount: number;
  vocabCount: number;
  a1Total: number;
  a2Total: number;
  vocabTotal: number;
}

export function HomePage({ a1Count, a2Count, b1LessonCount, vocabCount, a1Total, a2Total, vocabTotal }: Props) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const totalComplete = a1Count + a2Count + vocabCount;
  const totalTopics = a1Total + a2Total + vocabTotal;
  const percentage = totalTopics > 0 ? Math.round((totalComplete / totalTopics) * 100) : 0;

  return (
    <section className="section active">
      <div className="welcome-banner">
        <h1><T k="welcome" /></h1>
        <p><T k="welcomeSub" /></p>
      </div>

      <div className="progress-overview">
        <h2><T k="overallProgress" /></h2>
        <ProgressBar percentage={percentage} />
        <p className="text-center mt-20"><T k="completeQuizzes" /></p>
      </div>

      <div className="level-cards">
        <div className="level-card a1" onClick={() => navigate('/a1')}>
          <h3><T k="a1Beginner" /></h3>
          <p>{a1Total} {t('a1Desc')}</p>
          <p className="level-progress">
            <T k="progress" />: {a1Count}/{a1Total} <T k="topics" />
          </p>
        </div>
        <div className="level-card a2" onClick={() => navigate('/a2')}>
          <h3><T k="a2Intermediate" /></h3>
          <p>{a2Total} {t('a2Desc')}</p>
          <p className="level-progress">
            <T k="progress" />: {a2Count}/{a2Total} <T k="topics" />
          </p>
        </div>
        <div className="level-card b1" onClick={() => navigate('/b1')}>
          <h3><T k="b1Intermediate" /></h3>
          <p>{t('b1Desc')}</p>
          <p className="level-progress">
            {b1LessonCount} {t('b1LessonLabel')}
          </p>
        </div>
        <div className="level-card vocab" onClick={() => navigate('/vocab')}>
          <h3><T k="vocabPractice" /></h3>
          <p>{vocabTotal} {t('vocabDesc')}</p>
          <p className="level-progress">
            <T k="progress" />: {vocabCount}/{vocabTotal} <T k="topics" />
          </p>
        </div>
      </div>
    </section>
  );
}
