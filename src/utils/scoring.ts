export function calculatePoints(attempts: number): number {
  if (attempts === 1) return 10;
  if (attempts === 2) return 5;
  return 0;
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
