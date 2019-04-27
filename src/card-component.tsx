import * as React from 'react';
import Card from './card'
import { colorMap, Pattern, Quantity, Shape } from './enums'

interface IProps {
  card: Card
}

export class CardComponent extends React.Component<IProps, {}> {
  public render() {
    let index: number[] = []
    const card = this.props.card
    switch(card.getQuantity()) {
      case Quantity.ONE:
        index = [1]
        break
      case Quantity.TWO:
        index = [1, 2]
        break
      case Quantity.THREE:
        index = [1, 2, 3]
        break
		}
    return (
      <div>
        {index.map(i => this.renderShape(i))}
      </div>
    )
  }

  private renderShape(index: number) {
    const card = this.props.card
    const color = colorMap[card.getColor()]
    let path
    switch(card.getShape()) {
      case Shape.OVAL:
        path = "M36 149c-19 0-34-15-34-33V35C2 16 17 1 36 1s34 15 34 34v81c0 18-15 33-34 33z"
        break
      case Shape.DIAMOND:
        path = "M1 74L35 2l36 73-36 74z"
        break
      case Shape.SQUIGGLE:
        path = "M9.64,77.38C15.73,63.23,19.46,50.9,12,33.71,6.57,21.25-3.54,13.79,1.84,6.76c7.06-9.19,31.8-10.89,50.79,6.9,18.12,17,13.77,49.45,6.14,64.12-7,13.55-4.38,29.55,8.37,48.23C79.21,143.69,46,156.12,20.42,141.67-1.76,129.1-2.46,105.54,9.64,77.38Z"
        break
    }
    let fill = ''
    switch(card.getPattern()) {
      case Pattern.SOLID:
        fill = color
				break
      case Pattern.EMPTY:
        fill = "none"
        break
      case Pattern.LINED:
        fill = `url(#${card.getColor()}-stripe)`
		} 
    const svg = (
			<svg viewBox="0 0 82 164">
				<path d={path} stroke={color} stroke-width="7" fill={fill}/>
			</svg>
		)
    
    const className = 'Shape'
    return(
      <div className={className} key={index}>
        {svg}
      </div>
    )
  }
}
