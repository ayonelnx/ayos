import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Vite config — https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // `./` keeps every asset URL relative, so the same build works on
  // https://<user>.github.io/<repo>/, on a custom domain and even from disk.
  // Override with VITE_BASE when an absolute path is needed.
  const base = process.env.VITE_BASE ?? './'

  return {
    base,
    build: {
      // GitHub Pages can serve this folder directly
      // (Settings → Pages → Deploy from a branch → main /docs).
      outDir: 'docs',
      sourcemap: mode === 'development' ? 'inline' : false,
      minify: mode !== 'development',
    },
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: process.env.FIGMA_DEV_SERVER_HOST || '0.0.0.0',
      port: parseInt(process.env.PORT || '5173'),
      strictPort: true,
    },
    preview: {
      host: process.env.FIGMA_DEV_SERVER_HOST || '0.0.0.0',
      port: parseInt(process.env.PORT || '5173'),
    },
  }
})
