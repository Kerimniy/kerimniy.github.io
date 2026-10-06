import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	 server: {
    host: '192.168.0.100',
    port: 5173,
  },
  plugins: [react(),tailwindcss()],
  build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes("node_modules/@tsparticles") || id.includes("node_modules/tsparticles")) {
          return "tsparticles";
        }
      },
    },
  },
},
})
