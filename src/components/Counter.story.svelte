<script lang="ts">
	import type { Hst as $$Hst } from '@histoire/plugin-svelte'
	import Counter from './Counter.svelte'

	export let Hst: $$Hst
</script>

<Hst.Story>
	<Counter initial={0} />
</Hst.Story>
