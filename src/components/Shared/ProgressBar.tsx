interface Props {
  percentage: number;
}

export function ProgressBar({ percentage }: Props) {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        {percentage > 0 ? `${percentage}%` : ''}
      </div>
    </div>
  );
}
