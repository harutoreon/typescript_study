export class ShoppingCart {
  private items: string[] = []

  add(item: string): void {
    this.items.push(item)
  }

  count(): number {
    return this.items.length
  }
}
