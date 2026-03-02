import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Se o seu repositório se chama exatamente "Hugo-Nascimento748.github.io", a base é "/"
  // Se for qualquer outro nome, use "/nome-do-repo/"
  base: "/", 
})