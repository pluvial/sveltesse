import { sveltekit } from '@sveltejs/kit/vite';
import unocss from 'unocss/vite';
import autoImport from 'unplugin-auto-import/vite';
import components from 'unplugin-svelte-components/vite';
import inspect from 'vite-plugin-inspect';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		// https://github.com/Mohamed-Kaizen/unplugin-svelte-components
		components({ dirs: ['src/components'], dts: 'src/components.d.ts' }),
		// https://github.com/antfu/unocss
		// see unocss.config.ts for config
		// visit http://localhost:5173/__unocss/ to see the inspector
		unocss(),
		// https://github.com/sveltejs/kit/blob/master/packages/kit/src/exports/vite/index.js
		// https://github.com/sveltejs/vite-plugin-svelte
		// press Ctrl+Shift or Cmd+Shift (Mac) to see the inspector
		sveltekit(),
		// https://github.com/antfu/unplugin-auto-import
		autoImport({
			dirs: ['src/lib'],
			imports: [
				'svelte',
				'svelte/animate',
				'svelte/easing',
				'svelte/motion',
				'svelte/store',
				'svelte/transition',
			],
			dts: 'src/auto-imports.d.ts',
			eslintrc: { enabled: true },
		}),
		// https://github.com/antfu/vite-plugin-inspect
		// visit http://localhost:5173/__inspect/ to see the inspector
		inspect(),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
};

export default config;
