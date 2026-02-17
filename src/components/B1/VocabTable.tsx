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

type Person = 'ich' | 'du' | 'er/sie/es' | 'wir' | 'ihr' | 'sie/Sie';

export const PERSONS: Person[] = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];

const AUX_PRESENT: Record<'haben' | 'sein', Record<Person, string>> = {
  haben: {
    ich: 'habe',
    du: 'hast',
    'er/sie/es': 'hat',
    wir: 'haben',
    ihr: 'habt',
    'sie/Sie': 'haben',
  },
  sein: {
    ich: 'bin',
    du: 'bist',
    'er/sie/es': 'ist',
    wir: 'sind',
    ihr: 'seid',
    'sie/Sie': 'sind',
  },
};

const IRREGULAR_FORMS: Record<string, Record<Person, string>> = {
  sein: {
    ich: 'bin',
    du: 'bist',
    'er/sie/es': 'ist',
    wir: 'sind',
    ihr: 'seid',
    'sie/Sie': 'sind',
  },
  haben: {
    ich: 'habe',
    du: 'hast',
    'er/sie/es': 'hat',
    wir: 'haben',
    ihr: 'habt',
    'sie/Sie': 'haben',
  },
  werden: {
    ich: 'werde',
    du: 'wirst',
    'er/sie/es': 'wird',
    wir: 'werden',
    ihr: 'werdet',
    'sie/Sie': 'werden',
  },
  helfen: {
    ich: 'helfe',
    du: 'hilfst',
    'er/sie/es': 'hilft',
    wir: 'helfen',
    ihr: 'helft',
    'sie/Sie': 'helfen',
  },
  fahren: {
    ich: 'fahre',
    du: 'fährst',
    'er/sie/es': 'fährt',
    wir: 'fahren',
    ihr: 'fahrt',
    'sie/Sie': 'fahren',
  },
  nehmen: {
    ich: 'nehme',
    du: 'nimmst',
    'er/sie/es': 'nimmt',
    wir: 'nehmen',
    ihr: 'nehmt',
    'sie/Sie': 'nehmen',
  },
  geben: {
    ich: 'gebe',
    du: 'gibst',
    'er/sie/es': 'gibt',
    wir: 'geben',
    ihr: 'gebt',
    'sie/Sie': 'geben',
  },
  stehen: {
    ich: 'stehe',
    du: 'stehst',
    'er/sie/es': 'steht',
    wir: 'stehen',
    ihr: 'steht',
    'sie/Sie': 'stehen',
  },
  verlieren: {
    ich: 'verliere',
    du: 'verlierst',
    'er/sie/es': 'verliert',
    wir: 'verlieren',
    ihr: 'verliert',
    'sie/Sie': 'verlieren',
  },
  vergessen: {
    ich: 'vergesse',
    du: 'vergisst',
    'er/sie/es': 'vergisst',
    wir: 'vergessen',
    ihr: 'vergesst',
    'sie/Sie': 'vergessen',
  },
  ziehen: {
    ich: 'ziehe',
    du: 'ziehst',
    'er/sie/es': 'zieht',
    wir: 'ziehen',
    ihr: 'zieht',
    'sie/Sie': 'ziehen',
  },
  sehen: {
    ich: 'sehe',
    du: 'siehst',
    'er/sie/es': 'sieht',
    wir: 'sehen',
    ihr: 'seht',
    'sie/Sie': 'sehen',
  },
};

const BASE_IRREGULAR_PARTICIPLE: Record<string, string> = {
  sein: 'gewesen',
  haben: 'gehabt',
  werden: 'geworden',
  helfen: 'geholfen',
  fahren: 'gefahren',
  nehmen: 'genommen',
  geben: 'gegeben',
  stehen: 'gestanden',
  verlieren: 'verloren',
  vergessen: 'vergessen',
  ziehen: 'gezogen',
  sehen: 'gesehen',
  kommen: 'gekommen',
  bringen: 'gebracht',
  schließen: 'geschlossen',
  heben: 'gehoben',
  bekommen: 'bekommen',
  empfehlen: 'empfohlen',
  laufen: 'gelaufen',
};

const BASE_IRREGULAR_PRAETERITUM_ICH: Record<string, string> = {
  sein: 'war',
  haben: 'hatte',
  werden: 'wurde',
  helfen: 'half',
  fahren: 'fuhr',
  nehmen: 'nahm',
  geben: 'gab',
  stehen: 'stand',
  verlieren: 'verlor',
  vergessen: 'vergaß',
  ziehen: 'zog',
  sehen: 'sah',
  kommen: 'kam',
  bringen: 'brachte',
  schließen: 'schloss',
  heben: 'hob',
  bekommen: 'bekam',
  empfehlen: 'empfahl',
  laufen: 'lief',
};

const BASE_IRREGULAR_PRAETERITUM: Record<string, Record<Person, string>> = {
  sein: {
    ich: 'war',
    du: 'warst',
    'er/sie/es': 'war',
    wir: 'waren',
    ihr: 'wart',
    'sie/Sie': 'waren',
  },
  haben: {
    ich: 'hatte',
    du: 'hattest',
    'er/sie/es': 'hatte',
    wir: 'hatten',
    ihr: 'hattet',
    'sie/Sie': 'hatten',
  },
  werden: {
    ich: 'wurde',
    du: 'wurdest',
    'er/sie/es': 'wurde',
    wir: 'wurden',
    ihr: 'wurdet',
    'sie/Sie': 'wurden',
  },
  helfen: {
    ich: 'half',
    du: 'halfst',
    'er/sie/es': 'half',
    wir: 'halfen',
    ihr: 'halft',
    'sie/Sie': 'halfen',
  },
  fahren: {
    ich: 'fuhr',
    du: 'fuhrst',
    'er/sie/es': 'fuhr',
    wir: 'fuhren',
    ihr: 'fuhrt',
    'sie/Sie': 'fuhren',
  },
  nehmen: {
    ich: 'nahm',
    du: 'nahmst',
    'er/sie/es': 'nahm',
    wir: 'nahmen',
    ihr: 'nahmt',
    'sie/Sie': 'nahmen',
  },
  geben: {
    ich: 'gab',
    du: 'gabst',
    'er/sie/es': 'gab',
    wir: 'gaben',
    ihr: 'gabt',
    'sie/Sie': 'gaben',
  },
  stehen: {
    ich: 'stand',
    du: 'standst',
    'er/sie/es': 'stand',
    wir: 'standen',
    ihr: 'standet',
    'sie/Sie': 'standen',
  },
  verlieren: {
    ich: 'verlor',
    du: 'verlorst',
    'er/sie/es': 'verlor',
    wir: 'verloren',
    ihr: 'verlort',
    'sie/Sie': 'verloren',
  },
  vergessen: {
    ich: 'vergaß',
    du: 'vergaßt',
    'er/sie/es': 'vergaß',
    wir: 'vergaßen',
    ihr: 'vergaßt',
    'sie/Sie': 'vergaßen',
  },
  ziehen: {
    ich: 'zog',
    du: 'zogst',
    'er/sie/es': 'zog',
    wir: 'zogen',
    ihr: 'zogt',
    'sie/Sie': 'zogen',
  },
  sehen: {
    ich: 'sah',
    du: 'sahst',
    'er/sie/es': 'sah',
    wir: 'sahen',
    ihr: 'saht',
    'sie/Sie': 'sahen',
  },
  kommen: {
    ich: 'kam',
    du: 'kamst',
    'er/sie/es': 'kam',
    wir: 'kamen',
    ihr: 'kamt',
    'sie/Sie': 'kamen',
  },
  bringen: {
    ich: 'brachte',
    du: 'brachtest',
    'er/sie/es': 'brachte',
    wir: 'brachten',
    ihr: 'brachtet',
    'sie/Sie': 'brachten',
  },
  schließen: {
    ich: 'schloss',
    du: 'schlossest',
    'er/sie/es': 'schloss',
    wir: 'schlossen',
    ihr: 'schlosst',
    'sie/Sie': 'schlossen',
  },
  heben: {
    ich: 'hob',
    du: 'hobst',
    'er/sie/es': 'hob',
    wir: 'hoben',
    ihr: 'hobt',
    'sie/Sie': 'hoben',
  },
  bekommen: {
    ich: 'bekam',
    du: 'bekamst',
    'er/sie/es': 'bekam',
    wir: 'bekamen',
    ihr: 'bekamt',
    'sie/Sie': 'bekamen',
  },
  empfehlen: {
    ich: 'empfahl',
    du: 'empfahlst',
    'er/sie/es': 'empfahl',
    wir: 'empfahlen',
    ihr: 'empfahlt',
    'sie/Sie': 'empfahlen',
  },
  laufen: {
    ich: 'lief',
    du: 'liefst',
    'er/sie/es': 'lief',
    wir: 'liefen',
    ihr: 'lieft',
    'sie/Sie': 'liefen',
  },
};

const SEIN_VERBS = new Set<string>([
  'sein',
  'werden',
  'gehen',
  'fahren',
  'kommen',
  'ziehen',
  'einziehen',
  'umziehen',
  'stuerzen',
  'stürzen',
]);

function cleanupVerbLabel(raw: string): string {
  return raw
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\betw\.\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function pickInfinitive(raw: string): string | null {
  const cleaned = cleanupVerbLabel(raw).replace(/^sich\s+/i, '').trim();
  if (!cleaned) return null;

  const tokens = cleaned.split(/\s+/);
  const infinitiveToken = tokens.find((token) => /(?:en|ern|eln)$/i.test(token));
  if (infinitiveToken) return infinitiveToken.toLowerCase();

  return tokens[tokens.length - 1]?.toLowerCase() ?? null;
}

function splitPrefixInfinitive(infinitive: string): { prefix: string; base: string } {
  const prefixes = [
    'ab', 'an', 'auf', 'aus', 'bei', 'ein', 'fort', 'her', 'hin', 'los', 'mit', 'nach', 'vor', 'weg', 'zu', 'zurueck',
    'zurück', 'zusammen',
  ];
  for (const prefix of prefixes.sort((a, b) => b.length - a.length)) {
    if (infinitive.startsWith(prefix) && infinitive.length > prefix.length + 2) {
      const base = infinitive.slice(prefix.length);
      if (/(?:en|ern|eln)$/i.test(base)) return { prefix, base };
    }
  }
  return { prefix: '', base: infinitive };
}

function regularConjugation(infinitive: string): Record<Person, string> {
  const stem = infinitive.replace(/(?:en|ern|eln)$/i, '');
  return {
    ich: `${stem}e`,
    du: `${stem}st`,
    'er/sie/es': `${stem}t`,
    wir: infinitive,
    ihr: `${stem}t`,
    'sie/Sie': infinitive,
  };
}

function regularPraeteritumIch(infinitive: string): string {
  const stem = infinitive.replace(/(?:en|ern|eln)$/i, '');
  return `${stem}te`;
}

function regularPraeteritumAll(infinitive: string): Record<Person, string> {
  const stem = infinitive.replace(/(?:en|ern|eln)$/i, '');
  return {
    ich: `${stem}te`,
    du: `${stem}test`,
    'er/sie/es': `${stem}te`,
    wir: `${stem}ten`,
    ihr: `${stem}tet`,
    'sie/Sie': `${stem}ten`,
  };
}

function regularParticiple(infinitive: string): string {
  const lower = infinitive.toLowerCase();
  const inseparablePrefixes = ['be', 'emp', 'ent', 'er', 'ge', 'miss', 'ver', 'zer'];
  const stem = infinitive.replace(/(?:en|ern|eln)$/i, '');

  if (lower.endsWith('ieren')) return `${stem}t`;
  if (inseparablePrefixes.some((prefix) => lower.startsWith(prefix))) return `${stem}t`;

  return `ge${stem}t`;
}

export type VerbDetails = {
  infinitive: string;
  present: Record<Person, string>;
  praeteritum: Record<Person, string>;
  futurI: Record<Person, string>;
  perfectIch: string;
  praeteritumIch: string;
  konjunktivIIIch: string;
  participle: string;
  auxiliary: 'haben' | 'sein';
};

export function conjugateVerb(rawVerb: string): VerbDetails | null {
  const infinitive = pickInfinitive(rawVerb);
  if (!infinitive) return null;

  const directPresent = IRREGULAR_FORMS[infinitive];
  const directParticiple = BASE_IRREGULAR_PARTICIPLE[infinitive];
  const directPraeteritumIch = BASE_IRREGULAR_PRAETERITUM_ICH[infinitive];

  if (directPresent) {
    const auxiliary = SEIN_VERBS.has(infinitive) ? 'sein' : 'haben';
    const participle = directParticiple ?? regularParticiple(infinitive);
    const praeteritum = BASE_IRREGULAR_PRAETERITUM[infinitive] ?? regularPraeteritumAll(infinitive);
    const futurI = PERSONS.reduce((acc, person) => {
      acc[person] = `${IRREGULAR_FORMS.werden[person]} ${infinitive}`;
      return acc;
    }, {} as Record<Person, string>);
    return {
      infinitive,
      present: directPresent,
      praeteritum,
      futurI,
      participle,
      auxiliary,
      perfectIch: `${AUX_PRESENT[auxiliary].ich} ${participle}`,
      praeteritumIch: praeteritum.ich ?? directPraeteritumIch ?? regularPraeteritumIch(infinitive),
      konjunktivIIIch: `wuerde ${infinitive}`,
    };
  }

  const { prefix, base } = splitPrefixInfinitive(infinitive);
  const basePresent = IRREGULAR_FORMS[base] ?? regularConjugation(base);
  const present = PERSONS.reduce((acc, person) => {
    const form = basePresent[person];
    acc[person] = prefix ? `${form} ${prefix}` : form;
    return acc;
  }, {} as Record<Person, string>);

  const baseParticiple = BASE_IRREGULAR_PARTICIPLE[base] ?? regularParticiple(base);
  const participle = prefix ? `${prefix}${baseParticiple}` : baseParticiple;
  const basePraeteritum = BASE_IRREGULAR_PRAETERITUM[base] ?? regularPraeteritumAll(base);
  const praeteritum = PERSONS.reduce((acc, person) => {
    const form = basePraeteritum[person];
    acc[person] = prefix ? `${form} ${prefix}` : form;
    return acc;
  }, {} as Record<Person, string>);
  const futurI = PERSONS.reduce((acc, person) => {
    acc[person] = `${IRREGULAR_FORMS.werden[person]} ${infinitive}`;
    return acc;
  }, {} as Record<Person, string>);
  const auxiliary = SEIN_VERBS.has(infinitive) ? 'sein' : 'haben';

  return {
    infinitive,
    present,
    praeteritum,
    futurI,
    participle,
    auxiliary,
    perfectIch: `${AUX_PRESENT[auxiliary].ich} ${participle}`,
    praeteritumIch: praeteritum.ich,
    konjunktivIIIch: `wuerde ${infinitive}`,
  };
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
                {e.category === 'Verb' ? (
                  <span className="verb-hover" tabIndex={0}>
                    {e.word}
                    {(() => {
                      const conjugation = conjugateVerb(e.word);
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
                                <tr key={`present-${person}`}>
                                  <td>{person}</td>
                                  <td>{conjugation.present[person]}</td>
                                </tr>
                              ))}
                              <tr className="verb-section-row">
                                <td colSpan={2}>Praeteritum</td>
                              </tr>
                              {PERSONS.map((person) => (
                                <tr key={`past-${person}`}>
                                  <td>{person}</td>
                                  <td>{conjugation.praeteritum[person]}</td>
                                </tr>
                              ))}
                              <tr className="verb-section-row">
                                <td colSpan={2}>Futur I</td>
                              </tr>
                              {PERSONS.map((person) => (
                                <tr key={`future-${person}`}>
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
                ) : (
                  e.word
                )}
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
