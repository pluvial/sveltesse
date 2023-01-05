<script lang="ts">
	import type { Hst as $$Hst } from '@histoire/plugin-svelte'
	import Hello from './Hello.svelte'

	export let Hst: $$Hst
</script>

<Hst.Story>
	<Hello count={0} />
</Hst.Story>
