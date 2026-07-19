interface Notifier {
  send(message: string): void
}

export function completeOrder(orderId: string, notifier: Notifier): void {
  notifier.send(`注文 ${orderId} が完了しました`)
}
