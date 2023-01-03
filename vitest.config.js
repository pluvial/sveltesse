import baseConfig from './vite.config'

/** @type {import('vite').UserConfig} */
const config = {
	...baseConfig,
	test: {
		...baseConfig.test,
		globals: true,
		environment: 'jsdom',
	},
}

export default config
