import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Host production build under /deutschfit/ while keeping local dev at /
  base: mode === 'production' ? '/deutschfit/' : '/',
}));
