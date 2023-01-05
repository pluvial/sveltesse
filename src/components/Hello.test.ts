import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Hello from './Hello.svelte';

describe('Hello.svelte', () => {
	it('mounts', () => {
		const { container } = render(Hello, { count: 4 });
		expect(container).toBeTruthy();
		expect(container.innerHTML).toContain('4 x 2 = 8');
		expect(container.innerHTML).toMatchSnapshot();
	});

	it('updates on button click', async () => {
		render(Hello, { count: 4 });
		const btn = screen.getByRole('button');
		const div = screen.getByText('4 x 2 = 8');
		await fireEvent.click(btn);
		expect(div.innerHTML).toBe('4 x 3 = 12');
		await fireEvent.click(btn);
		expect(div.innerHTML).toBe('4 x 4 = 16');
	});
});
