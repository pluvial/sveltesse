declare namespace svelteHTML {
	interface IntrinsicElements {
		style: HTMLProps<HTMLStyleElement> & {
			'uno:preflights'?: boolean
			'uno:safelist'?: boolean
			global?: boolean
		}
	}
	interface HTMLAttributes<T> {
		'uno:preflights'?: boolean
		'uno:safelist'?: boolean
		global?: boolean
	}
}
