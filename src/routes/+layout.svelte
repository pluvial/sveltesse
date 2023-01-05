<script>
	// NOTE: uncomment when unocss is in mode: 'global'
	// NOTE: comment when unocss is in mode: 'svelte-scoped'
	import '@unocss/reset/tailwind.css'

	import './styles.css'

	// NOTE: uncomment when unocss is in mode: 'global'
	// NOTE: comment when unocss is in mode: 'svelte-scoped'
	import 'uno.css'
</script>

<main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
	<slot />
	<Footer />
</main>

<!-- NOTE: comment when unocss is in mode: 'global' -->
<!-- NOTE: uncomment when unocss is in mode: 'svelte-scoped' -->
<!-- <style uno:preflights uno:safelist global></style> -->
