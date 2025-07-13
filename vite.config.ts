import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Simple Vite config, no history fallback here
export default defineConfig({
  plugins: [react()],
})
