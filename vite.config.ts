import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    env: loadEnv('', process.cwd(), ''),
    environmentMatchGlobs: [
      ['src/http/controllers/**', './vitest-environment-prisma/prisma.ts'],
    ],
    dir: 'src',
  },
})
