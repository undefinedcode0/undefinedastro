import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  css: ['src/styles/app.scss', 'src/styles/icons.scss'],
  integrations: [svelte()]
});
