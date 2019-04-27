import { Color, Pattern, Quantity, Shape } from './enums'

export default class Card {
  private color: Color
  private pattern: Pattern
  private quantity: Quantity
  private shape: Shape

  constructor(c: Color, s: Shape, p: Pattern, q: Quantity) {
    this.color = c
    this.shape = s
    this.pattern = p
    this.quantity = q
  }

  public getColor(): Color {
    return this.color
  }

  public getShape(): Shape {
    return this.shape
  }

  public getPattern(): Pattern {
    return this.pattern
  }

  public getQuantity(): Quantity {
    return this.quantity
  }

  public toString(): string {
    return `c: ${this.color}, s: ${this.shape}, p: ${this.pattern}, q: ${this.quantity}`  
  }
  
  public equals(other: Card): boolean {
    return this.color === other.color && this.shape === other.shape && this.pattern === other.pattern && this.quantity === other.quantity
  }
}
