declare module 'unplugin-svelte-components/vite' {
	import type { Options, PublicPluginAPI } from 'unplugin-svelte-components'
	import type { Plugin } from 'vite'

	export default function (options?: Options | undefined): Plugin & { api: PublicPluginAPI }
}
