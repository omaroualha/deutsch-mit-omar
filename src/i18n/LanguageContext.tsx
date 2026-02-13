import { createContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { LangCode } from './translations';

interface LanguageContextValue {
  lang: LangCode;
  hoverLang: LangCode;
  setLang: (code: LangCode) => void;
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'de',
  hoverLang: 'en',
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>('de');
  const hoverLang: LangCode = lang === 'de' ? 'en' : 'de';

  const setLang = useCallback((code: LangCode) => setLangState(code), []);

  return (
    <LanguageContext.Provider value={{ lang, hoverLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
