<script lang="ts">
	export let initial: number;

	const { count, inc, dec } = useCounter(initial);
</script>

<div>
	{$count}
	<button class="inc" on:click={inc}>+</button>
	<button class="dec" on:click={dec}>-</button>
</div>
