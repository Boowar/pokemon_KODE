import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sets from '../components/Sets'
import { getSets } from '../actions/SetsActions'

function mapStateToProps(store) {
  return {
    sets: store.sets,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getSets: () => dispatch(getSets()),
  }
}
class SetsContainer extends Component {
  componentDidMount() {
    this.props.getSets()
  }
  render() {
    const { sets, getSets } = this.props
    return (
      <Sets
        sets={sets}
        isFetching={sets.isFetching}
        error={sets.error}
        getSets={getSets}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetsContainer)
