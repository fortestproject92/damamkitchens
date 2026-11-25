import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.damamkitchens.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
