import React, { Component } from 'react'
import { connect } from 'react-redux'
import SetGallery from '../components/SetGallery'
import { getSets } from '../actions/SetsActions'
import PropTypes from 'prop-types'

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

/**
 * Отвечает за получение информации из API о наборах карт.
 * Всю информацию передает в галерею для дальнейшего построения страницы.
 */
class SetContainer extends Component {
  componentDidMount() {
    this.props.getSets()
  }

  render() {
    const { sets } = this.props
    return (
      <SetGallery sets={sets} isFetching={sets.isFetching} error={sets.error} />
    )
  }
}
SetContainer.propTypes = {
  sets: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetContainer)
