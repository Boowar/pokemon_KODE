import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cards from '../components/Cards'
import { getCards } from '../actions/CardsActions'

function mapStateToProps(store) {
  return {
    cards: store.cards,
    set: store.set,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCards: set => dispatch(getCards(set)),
  }
}

class CardsContainer extends Component {
  componentDidMount() {
    console.log(this.props.set)
    this.props.getCards(this.props.set)
  }
  render() {
    console.log(this.props.set)
    const { cards, getCards } = this.props
    return (
      <Cards
        cards={cards}
        isFetching={cards.isFetching}
        error={cards.error}
        getCards={getCards}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsContainer)
