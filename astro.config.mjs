import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  css: ['src/styles/app.css, src/styles/icons.css'],
  integrations: [svelte()]
});
