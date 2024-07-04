import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      autoExtension: true,
    },
    {
      format: 'cjs',
      autoExtension: true,
    },
  ],
  source: {
    entry: {
      main: 'src/index.ts',
    },
  },
  output: {
    target: 'node',
    externals: ['dotenv-defaults', '@rspack/core'],
    distPath: {
      root: 'dist-rslib',
    },
  },
});
