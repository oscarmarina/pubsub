import filesize from 'rollup-plugin-filesize';
import {terser} from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: 'dist/pubsub.bundled.js',
    format: 'esm',
  },
  plugins: [
    resolve(),
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
    filesize({
      showBrotliSize: true,
    }),
  ],
};
