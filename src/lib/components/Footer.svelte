<script lang="ts">
	import type { Props } from './Footer.svelte'

	type $$Props = Props

	function toggleDark() {
		// TODO
	}
</script>

<nav class="text-xl mt-6 inline-flex gap-2">
	<button class="icon-btn" on:click={toggleDark}>
		<div class="dark:i-carbon-moon i-carbon-sun" />
	</button>

	<a
		class="icon-btn i-carbon-logo-github"
		rel="noreferrer"
		href="https://github.com/pluvial/sveltesse"
		target="_blank"
		title="GitHub">GitHub</a
	>
</nav>
