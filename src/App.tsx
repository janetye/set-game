import './App.css';

import * as _ from 'lodash';
import * as React from 'react';

import Card from './card'
import { CardComponent } from './card-component'
import { checkSet, Deck } from './deck'

interface IState {
  cards: Card[]
  selectedCards: Card[]
  setFoundMessage: string
  numberSetsFound: number
}

const deck = new Deck()

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      cards: deck.drawCards(12),
      numberSetsFound: 0,
      selectedCards: [],
      setFoundMessage: '',
    }
  }

  public render() {
    return (
      <div className="App">
				<svg>
					<defs>
						<pattern id="red-stripe" 
							width="16" height="4"
							patternUnits="userSpaceOnUse"
							patternTransform="rotate(90)">
							<rect width="6" height="4" transform="translate(0,0)" fill="#FF4242"/>
						</pattern>

						<pattern id="green-stripe" 
							width="16" height="4"
							patternUnits="userSpaceOnUse"
							patternTransform="rotate(90)">
							<rect width="6" height="4" transform="translate(0,0)" fill="#6FDE6E"/>
						</pattern>

						<pattern id="purple-stripe" 
							width="16" height="4"
							patternUnits="userSpaceOnUse"
							patternTransform="rotate(90)">
							<rect width="6" height="4" transform="translate(0,0)" fill="#A691AE"/>
						</pattern>
					</defs>
				</svg>
        <div>
          {`You've found ${this.state.numberSetsFound} sets! Good work!`}
        </div>
        <div>
          {this.state.setFoundMessage}
        </div>
        <div>
          {_.chunk(this.state.cards, 3).map(this.renderRow.bind(this))}
        </div>
      </div>
    );
  }

  private renderRow(cards: Card[]) {
    return (
      <div>
        {cards.map(this.renderCard.bind(this))}
      </div>
    )
  }

  private renderCard(card: Card, index: number) {
    const className = this.isSelected(card) ? 'Card Selected' : 'Card'
    return (
      <div className={className} onClick={this.onCardClicked.bind(this, card)}>
        <div className="innerCard">
					<CardComponent card={card} />
        </div>
      </div>
    )
  }

  private onCardClicked(card: Card) {
    if (this.isSelected(card)) {
      this.setState({
        selectedCards: this.state.selectedCards.filter(
          (c: Card) => !c.equals(card)
        ) 
      })
    } else {
      let selectedCards = this.state.selectedCards.slice()
      if (selectedCards.length === 3) {
        selectedCards = [card]
      } else {
        selectedCards.push(card)
      }

      if (selectedCards.length === 3) {
        const setError = checkSet(selectedCards)
        if (setError === undefined) {
          const newCards = this.state.cards.filter(
            (c: Card) => !this.isSelected(c) && !c.equals(card)
          )

          for (const c of deck.drawCards(3)) {
            newCards.push(c)
          }

          this.setState({
            cards: newCards,
            numberSetsFound: this.state.numberSetsFound + 1,
            selectedCards: [],
            setFoundMessage: 'Found a set!',
          })
        } else {
          this.setState({
            selectedCards,
            setFoundMessage: setError
          })
        }
      } else {
        this.setState({selectedCards})
      }
    }
  }

  private isSelected(card: Card): boolean {
    for (const selected of this.state.selectedCards) {
      if (card.equals(selected)) {
        return true
      }
    }
    return false
  }
}

export default App;
