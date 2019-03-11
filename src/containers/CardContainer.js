import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCards } from '../actions/CardsActions'
import CardGallery from '../components/CardGallery'
import PropTypes from 'prop-types'

function mapStateToProps(store) {
  return {
    cards: store.cards,
    set: store.sets,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCards: set => dispatch(getCards(set)),
  }
}
/**
 * Отвечает за получение информации о выбранном наборе и передаччи информации в галерею карт.
 */
class CardContainer extends Component {
  componentDidMount() {
    this.props.getCards(this.props.match.params.selectedSet)
  }
  render() {
    const { cards } = this.props
    return (
      <CardGallery
        cards={cards}
        isFetching={cards.isFetching}
        error={cards.error}
      />
    )
  }
}

CardContainer.propTypes = {
  cards: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer)
