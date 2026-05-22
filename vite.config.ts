import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';
import createHtaccessPlugin from 'vite-plugin-htaccess';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    TanStackRouterVite(),
    react(),
    tailwindcss(),
    createHtaccessPlugin(),
    babel({ presets: [reactCompilerPreset()] })

  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },


})
