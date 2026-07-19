export function priceAfterDiscount(price: number, isMember: boolean): number {
  return isMember ? price - 100 : price
}
