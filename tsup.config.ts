import { defineConfig } from 'tsup'
export default defineConfig({
  entry: {
    'jsx-dev-runtime': 'src/react/jsx/ReactJSXElement.ts',
    shared: 'src/shared/index.ts'
  },
  format: 'esm'
})
