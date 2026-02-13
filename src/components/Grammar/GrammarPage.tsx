import { useState } from 'react';
import type { GrammarTable } from '../../types';
import { T } from '../Shared/T';

interface Props {
  tables: GrammarTable[];
}

export function GrammarPage({ tables }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section active">
      <h2 className="mb-20"><T k="grammarRef" /></h2>
      {tables.map((table, index) => (
        <div className="grammar-section" key={index}>
          <div className="grammar-header" onClick={() => toggle(index)}>
            <h3>{table.title}</h3>
            <span>{openIndex === index ? '▲' : '▼'}</span>
          </div>
          {openIndex === index && (
            <div
              className="grammar-content show"
              dangerouslySetInnerHTML={{ __html: table.content }}
            />
          )}
        </div>
      ))}
    </section>
  );
}
