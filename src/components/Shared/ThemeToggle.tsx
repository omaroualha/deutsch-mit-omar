interface Props {
  onToggle: () => void;
}

export function ThemeToggle({ onToggle }: Props) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme">
      🌓
    </button>
  );
}
