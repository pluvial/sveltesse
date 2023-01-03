export function useCounter(initial: number) {
	const count = writable(initial);

	return {
		count,
		inc() {
			count.update((value) => value + 1);
		},
		dec() {
			count.update((value) => value - 1);
		},
	};
}
