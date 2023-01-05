<script lang="ts">
	import type { Hst as $Hst } from '@histoire/plugin-svelte'
	import Input from './Input.svelte'

	export let Hst: $Hst
</script>

<Hst.Story>
	<Input />
</Hst.Story>
