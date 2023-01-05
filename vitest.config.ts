import type { UserConfig } from 'vite'
// NOTE: import required because vitest extends vite's UserConfig interface
import type {} from 'vitest'
import baseConfig from './vite.config'

export default {
	...baseConfig,
	test: {
		...baseConfig.test,
		globals: true,
		environment: 'jsdom',
	},
} satisfies UserConfig
