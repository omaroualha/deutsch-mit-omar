import type { VocabEntry } from '../../types';

interface Props {
  category: string;
  entries: VocabEntry[];
}

function genderClass(g?: 'm' | 'f' | 'n'): string {
  if (g === 'm') return 'gender-dot-m';
  if (g === 'f') return 'gender-dot-f';
  if (g === 'n') return 'gender-dot-n';
  return '';
}

export function VocabTable({ category, entries }: Props) {
  return (
    <div className="vocab-group">
      <h4 className="vocab-category">{category}</h4>
      <table className="vocab-table">
        <thead>
          <tr>
            <th>Deutsch</th>
            <th>English</th>
            <th>Beispiel</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e, i) => (
            <tr key={i}>
              <td>
                {e.gender && <span className={genderClass(e.gender)}></span>}
                {e.word}
              </td>
              <td>{e.translation}</td>
              <td className="vocab-example">{e.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
