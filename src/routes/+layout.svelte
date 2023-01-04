<script>
	// NOTE: uncomment when unocss is in mode: 'global'
	// import '@unocss/reset/tailwind.css'
	import './styles.css'
	// NOTE: uncomment when unocss is in mode: 'global'
	// import 'uno.css'
</script>

<main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
	<slot />
	<Footer />
</main>

<!-- NOTE: can be removed when unocss is in mode: 'global' -->
<style uno:preflights uno:safelist global></style>
