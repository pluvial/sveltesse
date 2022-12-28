import { extractorSvelte } from '@unocss/core';
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetUno,
	presetWebFonts
	// transformerDirectives,
	// transformerVariantGroup
} from 'unocss';

// adapted from https://github.com/unocss/unocss/tree/main/examples/sveltekit
export default defineConfig({
	extractors: [extractorSvelte],
	shortcuts: [
		[
			'btn',
			'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'
		],
		[
			'icon-btn',
			'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'
		]
		// { logo: 'i-logos:svelte-icon w-6em h-6em transform transition-800 hover:rotate-180' }
	],
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			scale: 1.2,
			warn: true
			// collections: {
			// 	custom: {
			// 		// do not remove LF: testing trimCustomSvg on universal icon loader
			// 		circle: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
			// <circle cx="60" cy="60" r="50"/>
			// </svg>
			// `
			// 	},
			// 	customfsl: FileSystemIconLoader('./icons', (svg) =>
			// 		svg.replace('<svg ', '<svg fill="currentColor" ')
			// 	)
			// },
			// extraProperties: {
			// 	display: 'inline-block',
			// 	'vertical-align': 'middle'
			// }
		}),
		presetWebFonts({
			fonts: {
				sans: 'DM Sans',
				serif: 'DM Serif Display',
				mono: 'DM Mono'
			}
		})
	]
	// transformers: [
	//   transformerDirectives(),
	//   transformerVariantGroup(),
	// ],
});
