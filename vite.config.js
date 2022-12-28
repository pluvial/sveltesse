import { sveltekit } from '@sveltejs/kit/vite';
import unocss from 'unocss/vite';
import autoImport from 'unplugin-auto-import/vite';
import components from 'unplugin-svelte-components/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		components({ dirs: ['src/components'], dts: 'src/components.d.ts' }),
		unocss(),
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
