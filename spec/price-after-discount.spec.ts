import { it, expect } from 'vitest'
import { priceAfterDiscount } from '../lib/price-after-discount'

it('会員の場合、100を引いた価格を返す', () => {
  const result = priceAfterDiscount(1000, true)
  expect(result).toBe(900)
})
