import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GITHUB_PAGES env var is set in the predeploy script
const base = process.env.GITHUB_PAGES === 'true' ? '/quirin-page/' : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
