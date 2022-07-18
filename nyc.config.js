'use strict';

module.exports = {
  all: true,
  include: ['src/**/*.js'],
  exclude: [
    '*.config.js',
    './node_modules/**',
    './dist/**',
    'coverage',
    '/demo/',
  ],
  reporter: ['html', 'lcov', 'text'],
};
