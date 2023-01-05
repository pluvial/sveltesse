<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
</script>

<div>
	<div i-carbon-pedestrian text-4xl inline-block />
	<p>
		Hi, {$page.params.name}
	</p>
	<p text-sm op50>
		<em>Dynamic route!</em>
	</p>

	<div>
		<button btn m-3 text-sm mt-8 on:click={() => goto('/')}>Back</button>
	</div>
</div>
