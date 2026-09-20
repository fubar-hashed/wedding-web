import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://fubar-hashed.github.io/wedding-web',
  base: process.env.PUBLIC_SITE_BASE || '/wedding-web',
  build: {
    format: 'directory',
  },
});
