import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      name: 'template-tag-loader',
    },
  },
});