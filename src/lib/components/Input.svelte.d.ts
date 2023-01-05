import { SvelteComponentTyped } from 'svelte'
import { HTMLInputAttributes } from 'svelte/elements'

export type Props = HTMLInputAttributes & {
	value?: string
}

export default class Input extends SvelteComponentTyped<Props> {}
