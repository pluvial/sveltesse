import { SvelteComponentTyped } from 'svelte';

export type Props = {
	initial: number;
};

export default class Counter extends SvelteComponentTyped<Props> {}
