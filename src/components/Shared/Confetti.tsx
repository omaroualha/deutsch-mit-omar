import { useEffect } from 'react';

const COLORS = ['#4A90E2', '#E91E63', '#4CAF50', '#9C27B0', '#FFD700'];

export function Confetti() {
  useEffect(() => {
    const pieces: HTMLDivElement[] = [];
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const el = document.createElement('div');
        el.className = 'confetti';
        el.style.left = Math.random() * 100 + '%';
        el.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
        el.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(el);
        pieces.push(el);
        setTimeout(() => el.remove(), 3000);
      }, i * 10);
    }
    return () => pieces.forEach((p) => p.remove());
  }, []);

  return null;
}
