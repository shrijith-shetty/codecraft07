/**
 * Divides a by b and returns quotient
 * @param a divident
 * @param b divisor
 * @returns the quotient.
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Divide by zero');
  }
  return a / b;
}
