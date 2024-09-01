import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  site: 'https://JoArDiTo.github.io/twenty-one-pilots-web',
  base: '/twenty-one-pilots-web',
});