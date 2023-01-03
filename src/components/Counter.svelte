<script lang="ts">
	import type { Props } from './Counter.svelte'

	type $$Props = Props

	export let initial: $$Props['initial']

	const { count, inc, dec } = useCounter(initial)
</script>

<div>
	{$count}
	<button class="inc" on:click={inc}>+</button>
	<button class="dec" on:click={dec}>-</button>
</div>
