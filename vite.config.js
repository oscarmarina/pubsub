import {defineConfig} from 'vite';
import {terser} from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import path from 'path';

export default defineConfig({
  plugins: [
    terser({
      warnings: true,
      ecma: 2017,
      compress: {
        unsafe: true,
      },
      output: {
        comments: false,
      },
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    filesize(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.js'),
      name: 'pubsub',
      fileName: (format) => `pubsub.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['rxjs'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          rxjs: 'rxjs',
        },
      },
    },
  },
});
