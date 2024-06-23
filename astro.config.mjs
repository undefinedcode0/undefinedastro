import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import rename from 'astro-rename';

export default defineConfig({
  css: ['src/styles/app.css, src/styles/icons.css'],
  integrations: [svelte()],
  output: 'static',
  integrations: [
    rename(),
    // compress()
  ],
});
