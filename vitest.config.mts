/// <reference types="vitest/config" />
/// <reference types="@vitest/browser/providers/playwright" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
    browser: {
      enabled: false,
      provider: 'preview',
      ui: true,
      instances: [
        {
          browser: 'chromium',
          launch: {
            devtools: true,
            handleSIGHUP: false,
            handleSIGTERM: false,
            timeout: 0
          }
        },
        {
          browser: 'firefox',
          launch: {
            devtools: true,
            handleSIGHUP: false,
            handleSIGTERM: false,
            timeout: 0
          }
        },
      ],
    }
  },
});