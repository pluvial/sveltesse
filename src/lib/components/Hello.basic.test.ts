import { tick } from 'svelte'
import { afterEach, describe, expect, it } from 'vitest'
import Hello from './Hello.svelte'

let host: HTMLElement

describe('Hello.svelte basic', () => {
	afterEach(() => {
		host.remove()
	})

	it('mount component', async () => {
		host = document.createElement('div')
		host.setAttribute('id', 'host')
		document.body.appendChild(host)
		const instance = new Hello({ target: host, props: { count: 4 } })
		expect(instance).toBeTruthy()
		expect(host.innerHTML).toContain('4 x 2 = 8')
		expect(host.innerHTML).toMatchSnapshot()
		const btn = host.getElementsByTagName('button')[0]
		btn.click() // or btn.dispatchEvent(new window.Event('click', { bubbles: true }))
		await tick()
		expect(host.innerHTML).toContain('4 x 3 = 12')
		btn.click()
		await tick()
		expect(host.innerHTML).toContain('4 x 4 = 16')
	})
})
