import adapterAuto from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const auto =
	!!process.env.VERCEL ||
	!!process.env.CF_PAGES ||
	!!process.env.NETLIFY ||
	process.env.GITHUB_ACTION_REPOSITORY === 'Azure/static-web-apps-deploy';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: auto ? adapterAuto() : adapterStatic()
	}
};

export default config;