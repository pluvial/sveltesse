<script lang="ts">
	import type { Props } from './Footer.svelte'

	type $$Props = Props

	function toggleDark() {
		// TODO
	}
</script>

<nav text-xl mt-6 inline-flex gap-2>
	<button icon-btn on:click={toggleDark}>
		<div dark:i-carbon-moon i-carbon-sun />
	</button>

	<a
		icon-btn
		i-carbon-logo-github
		rel="noreferrer"
		href="https://github.com/pluvial/sveltesse"
		target="_blank"
		title="GitHub"
	/>
</nav>
