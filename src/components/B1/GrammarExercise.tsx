import { useState } from 'react';
import type { Question } from '../../types';

interface Props {
  exercises: Question[];
}

export function GrammarExercise({ exercises }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const handleSelect = (qIndex: number, option: string) => {
    if (revealed[qIndex]) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: option }));

    if (option === exercises[qIndex].correct) {
      setRevealed((prev) => ({ ...prev, [qIndex]: true }));
    }
  };

  return (
    <div className="grammar-exercises">
      {exercises.map((q, qi) => {
        const selected = answers[qi];
        const done = revealed[qi];

        return (
          <div key={qi} className="exercise-card">
            <div className="exercise-number">Übung {qi + 1}</div>
            <div className="exercise-question">{q.question}</div>
            <div className="exercise-options">
              {q.options.map((opt, oi) => {
                let cls = 'exercise-option';
                if (done && opt === q.correct) cls += ' correct';
                else if (selected === opt && opt !== q.correct) cls += ' incorrect';
                if (done) cls += ' disabled';

                return (
                  <button key={oi} className={cls} onClick={() => handleSelect(qi, opt)}>
                    {opt}
                  </button>
                );
              })}
            </div>
            {done && (
              <div className="exercise-feedback success">
                <strong>Richtig!</strong> {q.explanation}
              </div>
            )}
            {selected && !done && (
              <div className="exercise-feedback error">
                <strong>Nicht ganz.</strong> {q.mnemonic}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
