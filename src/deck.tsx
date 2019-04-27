import * as _ from 'lodash';
import Card from './card'
import { getRandomColor, getRandomPattern, getRandomQuantity, getRandomShape } from './enums'

export class Deck {
  public drawnCards: Card[]

  constructor() {
    this.drawnCards = [] as any
  }

  public drawCards(n: number): Card[] {
    const cards = []

    let numberOfCards = 0
    while (numberOfCards < n) {
      const card = new Card(getRandomColor(), getRandomShape(), getRandomPattern(), getRandomQuantity())
      if (this.isDrawn(card)) {
        continue
      } else {
        cards.push(card)
        this.drawnCards.push(card)
        numberOfCards++
      }
    }

    return cards
  }

  private isDrawn(card: Card): boolean {
    for (const drawn of this.drawnCards) {
      if (card.equals(drawn)) {
        return true
      }
    }
    return false
  }
}

export function checkSet(arr: Card[]): string | undefined {
  const uniqueColors = _.uniq(arr.map(x => x.getColor()))
  if (uniqueColors.length === 2) {
    return 'Colors do not match.'
  }

  const uniqueShapes = _.uniq(arr.map(x => x.getShape()))
  if (uniqueShapes.length === 2) {
    return 'Shapes do not match.'
  }

  const uniquePatterns = _.uniq(arr.map(x => x.getPattern()))
  if (uniquePatterns.length === 2) {
    return 'Patterns do not match.'
  }

  const uniqueQuantities = _.uniq(arr.map(x => x.getQuantity()))
  if (uniqueQuantities.length === 2) {
    return 'Quantities do not match.'
  }

  return undefined
}
