import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import svelte from '@astrojs/svelte';

import vue from '@astrojs/vue';

import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte(), vue(), tailwind()],
  output: 'server',

  adapter: node({
    mode: 'standalone'
  })
});