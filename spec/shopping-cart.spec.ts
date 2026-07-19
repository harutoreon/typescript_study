import { it, expect } from 'vitest'
import { ShoppingCart } from '../lib/shopping-cart'

it('商品を 1 つ追加すると、商品数が 1 になる', () => {
  const cart = new ShoppingCart()

  cart.add('ノート')

  expect(cart.count()).toBe(1)
})
