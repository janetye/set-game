export enum Color {
  RED = "red",
  GREEN = "green",
  PURPLE = "purple"
}

export enum Shape {
  OVAL,
  DIAMOND,
  SQUIGGLE
}

export enum Pattern {
  SOLID,
  EMPTY,
  LINED
}

export enum Quantity {
  ONE,
  TWO,
  THREE
}

const colors = [Color.RED, Color.GREEN, Color.PURPLE]
const shapes = [Shape.OVAL, Shape.DIAMOND, Shape.SQUIGGLE]
const patterns = [Pattern.SOLID, Pattern.EMPTY, Pattern.LINED]
const quantities = [Quantity.ONE, Quantity.TWO, Quantity.THREE]

export function getRandomColor(): Color {
  const n = Math.floor(Math.random() * 3)
  return colors[n]
}

export function getRandomShape(): Shape {
  const n = Math.floor(Math.random() * 3)
  return shapes[n]
}
export function getRandomPattern(): Pattern {
  const n = Math.floor(Math.random() * 3)
  return patterns[n]
}
export function getRandomQuantity(): Quantity {
  const n = Math.floor(Math.random() * 3)
  return quantities[n]
}

export const colorMap = {
  [Color.RED]: '#FF4242',
	[Color.GREEN]: '#6FDE6E',
	[Color.PURPLE]: '#A691AE'
}
