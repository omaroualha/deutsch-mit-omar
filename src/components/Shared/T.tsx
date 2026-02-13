import { useTranslation } from '../../i18n/useTranslation';
import type { TranslationKey } from '../../i18n/translations';

interface Props {
  k: TranslationKey;
}

export function T({ k }: Props) {
  const { t, tHover } = useTranslation();
  return (
    <span className="t-wrap">
      {t(k)}
      <span className="t-tip">{tHover(k)}</span>
    </span>
  );
}
