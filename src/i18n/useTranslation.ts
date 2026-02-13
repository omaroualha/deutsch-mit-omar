import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from './translations';
import type { TranslationKey, LangCode } from './translations';

export function useTranslation() {
  const { lang, hoverLang } = useContext(LanguageContext);

  const t = (key: TranslationKey): string => translations[key][lang];
  const tHover = (key: TranslationKey): string => translations[key][hoverLang];

  return { t, tHover, lang, hoverLang };
}
