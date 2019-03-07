import React, { Component } from 'react'

class Cards extends Component {
  renderTemplate() {
    const { cards, isFetching, error } = this.props
    if (error) {
      return <p className='error'>Во время загрузки произошла ошибка</p>
    }
    if (isFetching) {
      return <p>Загрузка...</p>
    } else {
      return cards.map(card => (
        <div key={card.id} className='card'>
          <img src={card.imageUrlHiRes} alt={card.name} />
        </div>
      ))
    }
  }

  render() {
    return <div className='card-list'>{this.renderTemplate()}</div>
  }
}

export default Cards
