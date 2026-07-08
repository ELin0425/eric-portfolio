// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import rehypeFigureTitle from 'rehype-figure-title';

// https://astro.build/config
export default defineConfig({
  site: 'https://elin0425.github.io',
  base: '/eric-portfolio/',
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-plex-sans',
      weights: [400, 500, 600],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-plex-mono',
      weights: [400, 500],
      subsets: ['latin'],
    },
  ],
  markdown: unified({
    rehypePlugins: [rehypeFigureTitle],
  }),
});
