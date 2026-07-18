import { it, expect } from 'vitest'
import { sum } from '../lib/sum'

it('1 + 2 は 3 が返る', (): void => {
  expect(sum(1, 2)).toBe(3)
})
