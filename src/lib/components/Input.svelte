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
	class="p-x-4 p-y-2 w-250px text-center bg-transparent border border-rounded border-gray-200 dark:border-gray-700 outline-none active:outline-none"
/>
