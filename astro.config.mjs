// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import { visualizer } from "rollup-plugin-visualizer";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss(), visualizer({
        emitFile: true,
        filename: "stats.html", // The generated file name
        open: true // Optional: opens the file in your browser automatically after build
      })],
    ssr: {
      noExternal: ['@radix-ui/*', 'lucide-react'],
    },
    
  }
});