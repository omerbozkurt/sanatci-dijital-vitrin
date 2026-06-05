import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages proje sitesi alt yolda yayınlanır:
// https://<kullanici>.github.io/sanatci-dijital-vitrin/
// Bu yüzden üretimde base'i depo adına ayarlıyoruz; geliştirmede '/'.
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/sanatci-dijital-vitrin/' : '/',
  plugins: [react()],
}))
