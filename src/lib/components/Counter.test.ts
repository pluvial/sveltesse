import { fireEvent, render, screen } from '@testing-library/svelte'
import { describe, expect, it } from 'vitest'
import Counter from './Counter.svelte'

describe('Counter.svelte', () => {
	it('should render', () => {
		const { container } = render(Counter, { initial: 10 })
		expect(container.textContent).toContain('10')
		expect(container.innerHTML).toMatchSnapshot()
	})

	it('should be interactive', async () => {
		const { container } = render(Counter, { initial: 0 })
		expect(container.textContent).toContain('0')

		const button = screen.getByText('+')
		expect(button).toBeTruthy()

		await fireEvent.click(button)

		expect(container.textContent).toContain('1')
	})
})
