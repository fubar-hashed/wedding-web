import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://example.github.io',
  base: process.env.PUBLIC_SITE_BASE || '/',
  build: {
    format: 'directory',
  },
});
