<script lang="ts">
	export let count: number;

	let times = 2;

	$: result = count * times;
</script>

<div>{count} x {times} = {result}</div>

<button on:click={() => (times += 1)}>x1</button>
