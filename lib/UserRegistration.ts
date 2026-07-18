export interface UserRepository {
  isUsernameToken(username: string): boolean
}

export interface EmailService {
  sendWelcome(address: string): void
}

export class UserRegistration {
  constructor(
    private repository: UserRepository,
    private email: EmailService
  ) {}

  register(username: string, address: string): boolean {
    if (this.repository.isUsernameToken(username)) {
      return false
    }
    this.email.sendWelcome(address)
    return true
  }
}
