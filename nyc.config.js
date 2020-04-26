'use strict';

module.exports = {
    all: true,
    include: [
        "src/**/*.js"
    ],
	exclude: [
        '*.config.js',
        './node_modules/**',
        './dist/**',
        'coverage'
	],
	reporter: [
		'html',
		'lcov',
		'text'
	]
};