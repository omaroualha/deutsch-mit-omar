import { NavLink } from 'react-router-dom';
import { T } from '../Shared/T';
import type { TranslationKey } from '../../i18n/translations';

const TABS: { to: string; k: TranslationKey }[] = [
  { to: '/', k: 'navHome' },
  { to: '/a1', k: 'navA1' },
  { to: '/a2', k: 'navA2' },
  { to: '/b1', k: 'navB1' },
  { to: '/vocab', k: 'navVocab' },
  { to: '/grammar', k: 'navGrammar' },
  { to: '/tricks', k: 'navTricks' },
];

export function Navigation() {
  return (
    <nav>
      <div className="nav-tabs">
        {TABS.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.to === '/'}
            className={({ isActive }) => `nav-tab${isActive ? ' active' : ''}`}
          >
            <T k={tab.k} />
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
