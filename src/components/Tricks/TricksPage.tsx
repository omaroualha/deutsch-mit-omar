import type { MemoryTrick } from '../../types';
import { T } from '../Shared/T';

interface Props {
  tricks: MemoryTrick[];
}

export function TricksPage({ tricks }: Props) {
  return (
    <section className="section active">
      <h2 className="mb-20"><T k="memoryTricks" /></h2>
      <div className="tricks-grid">
        {tricks.map((trick, index) => (
          <div className="trick-card" key={index}>
            <div className="trick-title">{trick.title}</div>
            <div className="trick-mnemonic">{trick.mnemonic}</div>
            <div className="trick-explanation">{trick.explanation}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
