import { describe, expect, it } from 'vitest'
import { add, subtract, multiply, divide } from '../lib/calculator.js'

describe('Calculator', () => {
  it('adderar två tal', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('subtraherar två tal', () => {
    expect(subtract(5, 2)).toBe(3)
  })

  it('multiplicerar två tal', () => {
    expect(multiply(4, 3)).toBe(12)
  })

  it('dividerar två tal', () => {
    expect(divide(10, 2)).toBe(5)
  })

})
