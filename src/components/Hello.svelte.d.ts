import { SvelteComponentTyped } from 'svelte'

export type Props = {
	count: number
}

export default class Hello extends SvelteComponentTyped<Props> {}
