import { sveltekit } from '@sveltejs/kit/vite';
import autoImport from 'unplugin-auto-import/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		autoImport({
			imports: [
				'svelte',
				'svelte/animate',
				'svelte/easing',
				'svelte/motion',
				'svelte/store',
				'svelte/transition'
			],
			dts: './src/auto-imports.d.ts',
			eslintrc: { enabled: true }
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
