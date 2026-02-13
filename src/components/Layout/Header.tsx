import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../Shared/ThemeToggle';
import { T } from '../Shared/T';

interface Props {
  totalPoints: number;
  streak: number;
  onToggleTheme: () => void;
}

export function Header({ totalPoints, streak, onToggleTheme }: Props) {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-content">
        <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <span>🇩🇪</span> <T k="appTitle" />
        </div>
        <div className="stats-bar">
          <div className="stat-item">
            <span>⭐</span>
            <span className="stat-value">{totalPoints}</span>
          </div>
          <div className="stat-item">
            <span>🔥</span>
            <span className="stat-value">{streak}</span>
          </div>
          <ThemeToggle onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
