import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Шаблон изображения одной карты в галерее карт.
 */
class Card extends Component {
  render() {
    const { imageUrl } = this.props
    return (
      <div className='card-item'>
        <div className='card-image'>
          <img src={imageUrl} alt='Placeholder' />
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  imageUrl: PropTypes.string,
}

export default Card
