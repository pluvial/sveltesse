<script lang="ts">
	import { goto } from '$app/navigation'

	let name: string

	function go() {
		if (name) {
			goto(`/hi/${encodeURIComponent(name)}`)
		}
	}
</script>

<div>
	<div i-carbon-campsite text-4xl inline-block />
	<p>
		<a rel="noreferrer" href="https://github.com/pluvial/sveltesse" target="_blank"> Sveltesse </a>
	</p>
	<p>
		<em text-sm op75>Opinionated SvelteKit Starter Template</em>
	</p>

	<div py-4 />

	<Input
		bind:value={name}
		placeholder="What's your name?"
		autocomplete="false"
		on:keydown={({ code }) => code === 'Enter' && go()}
	/>

	<div>
		<button class="m-3 text-sm btn" disabled={!name} on:click={go}>Go</button>
	</div>
</div>
