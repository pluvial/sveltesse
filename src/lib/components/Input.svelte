<script lang="ts">
	import type { Props } from './Input.svelte'

	type $$Props = Props

	export let value: $$Props['value'] = ''
</script>

<input
	bind:value
	{...$$restProps}
	on:keydown
	type="text"
	p="x-4 y-2"
	w="250px"
	text="center"
	bg="transparent"
	border="~ rounded gray-200 dark:gray-700"
	outline="none active:none"
/>
