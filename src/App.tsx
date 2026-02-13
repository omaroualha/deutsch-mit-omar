import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/Layout/Header';
import { Navigation } from './components/Layout/Navigation';
import { HomePage } from './components/Home/HomePage';
import { TopicGrid } from './components/Quiz/TopicGrid';
import { QuizPage } from './components/Quiz/QuizPage';
import { GrammarPage } from './components/Grammar/GrammarPage';
import { TricksPage } from './components/Tricks/TricksPage';
import { LessonList } from './components/B1/LessonList';
import { LessonPage } from './components/B1/LessonPage';
import { useProgress } from './hooks/useProgress';
import { useTheme } from './hooks/useTheme';
import { getTopics, a1Topics, a2Topics, vocabTopics, b1Lessons, grammarTables, memoryTricks } from './data';

export default function App() {
  const { progress, completeTopic, completeLesson, getCompletedCount, getCompletedLessonCount } = useProgress();
  const { toggleTheme } = useTheme();

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header
          totalPoints={progress.totalPoints}
          streak={progress.streak}
          onToggleTheme={toggleTheme}
        />
        <Navigation />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  a1Count={getCompletedCount('a1')}
                  a2Count={getCompletedCount('a2')}
                  b1LessonCount={b1Lessons.length}
                  b1CompletedCount={getCompletedLessonCount()}
                  vocabCount={getCompletedCount('vocab')}
                  a1Total={a1Topics.length}
                  a2Total={a2Topics.length}
                  vocabTotal={vocabTopics.length}
                />
              }
            />
            <Route
              path="/a1"
              element={
                <TopicGrid
                  level="a1"
                  levelKey="a1Topics"
                  topics={a1Topics}
                  completedTopics={progress.completedTopics}
                />
              }
            />
            <Route
              path="/a2"
              element={
                <TopicGrid
                  level="a2"
                  levelKey="a2Topics"
                  topics={a2Topics}
                  completedTopics={progress.completedTopics}
                />
              }
            />
            <Route
              path="/b1"
              element={<LessonList lessons={b1Lessons} completedLessons={progress.completedLessons} />}
            />
            <Route
              path="/b1/lesson/:lessonId"
              element={<LessonPage lessons={b1Lessons} onCompleteLesson={completeLesson} />}
            />
            <Route
              path="/vocab"
              element={
                <TopicGrid
                  level="vocab"
                  levelKey="vocabTopics"
                  topics={vocabTopics}
                  completedTopics={progress.completedTopics}
                />
              }
            />
            <Route
              path="/:level/quiz/:topicIndex"
              element={<QuizPage getTopics={getTopics} onComplete={completeTopic} />}
            />
            <Route path="/grammar" element={<GrammarPage tables={grammarTables} />} />
            <Route path="/tricks" element={<TricksPage tricks={memoryTricks} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
