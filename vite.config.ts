import { sveltekit } from '@sveltejs/kit/vite'
import unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-svelte-components/vite'
import type { UserConfig } from 'vite'
import inspect from 'vite-plugin-inspect'

export default {
	plugins: [
		// https://github.com/Mohamed-Kaizen/unplugin-svelte-components
		components({
			dirs: ['src/lib/components'],
			// dts: 'src/components.d.ts',
			dts: false,
			// do not consider histoire story components
			exclude: [/\.story\.svelte$/],
		}),
		// https://github.com/antfu/unocss
		// see unocss.config.ts for config
		// visit http://localhost:5173/__unocss/ to see the inspector
		unocss({
			mode: 'global',
			// mode: 'svelte-scoped',
		}),
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
			// dts: 'src/auto-imports.d.ts',
			dts: false,
			eslintrc: {
				// enabled: true,
				enabled: false,
			},
		}),
		// https://github.com/antfu/vite-plugin-inspect
		// visit http://localhost:5173/__inspect/ to see the inspector
		inspect(),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
} satisfies UserConfig
