import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import vercel from '@astrojs/vercel/edge';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [vue()],
});
