import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../../i18n/useTranslation';
import type { TranslationKey } from '../../i18n/translations';

interface Props {
  k: TranslationKey;
}

export function T({ k }: Props) {
  const { t, tHover } = useTranslation();
  const [showTip, setShowTip] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!showTip) return;
    const handleOutside = (e: TouchEvent | MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setShowTip(false);
      }
    };
    document.addEventListener('touchstart', handleOutside);
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('touchstart', handleOutside);
      document.removeEventListener('mousedown', handleOutside);
    };
  }, [showTip]);

  return (
    <span
      ref={wrapRef}
      className={`t-wrap${showTip ? ' t-active' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        setShowTip((prev) => !prev);
      }}
      role="button"
      tabIndex={0}
      aria-label={`${t(k)} — ${tHover(k)}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setShowTip((prev) => !prev);
        }
      }}
    >
      {t(k)}
      <span className="t-tip" role="tooltip">{tHover(k)}</span>
    </span>
  );
}
