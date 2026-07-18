import { it, expect, vi } from 'vitest'
import { UserRegistration } from '../lib/UserRegistration'
import type { UserRepository, EmailService } from "../lib/UserRegistration.ts"

it('既に使われている名前の場合、登録は失敗する', () => {
  const stubRepository: UserRepository = {
    isUsernameToken: () => true
  }
  const dummyEmail: EmailService = {
    sendWelcome: () => {}
  }
  const registration = new UserRegistration(stubRepository, dummyEmail)

  const result = registration.register('taro', 'taro@example.com')

  expect(result).toBe(false)
})

it('登録に成功した場合、ウェルカムメールを送信する', () => {
  const stubRepository: UserRepository = {
    isUsernameToken: () => false
  }
  const mockEmail = {
    sendWelcome: vi.fn()
  }
  const registration = new UserRegistration(stubRepository, mockEmail)

  registration.register('taro', 'taro@example.com')

  expect(mockEmail.sendWelcome).toHaveBeenCalledWith('taro@example.com')
})
