import { it, expect, vi } from 'vitest'
import { completeOrder } from '../lib/complete-order'

it('注文完了時に通知を送る', () => {
  const mockNotifier = { send: vi.fn() }

  completeOrder('A-1', mockNotifier)

  expect(mockNotifier.send).toHaveBeenCalledWith(
    '注文 A-1 が完了しました'
  )
})
