import { HstSvelte as svelteHst } from '@histoire/plugin-svelte'
import { defineConfig } from 'histoire'

export default defineConfig({
	plugins: [svelteHst()],
	setupFile: 'src/histoire.setup.ts',
	tree: { groups: [{ id: 'top', title: '' }] },
})
