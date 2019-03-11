import React, { Component } from 'react'
import Loading from './common/Loading'
import CustomError from './common/CustomError'
import Button from './common/Button'
import Card from './common/Card'
import PropTypes from 'prop-types'

/**
 * Описан рендеринг галереи карт.
 */
class CardGallery extends Component {
  renderTemplate() {
    const { cards, isFetching, error } = this.props
    if (error) {
      return <CustomError />
    }
    if (isFetching) {
      return <Loading />
    } else {
      return cards.cards.map(({ id, imageUrl }) => (
        <Card key={id} imageUrl={imageUrl} />
      ))
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className='card-gallery'>{this.renderTemplate()}</div>
        <Button />
      </React.Fragment>
    )
  }
}

CardGallery.propTypes = {
  cards: PropTypes.object.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
}

export default CardGallery
