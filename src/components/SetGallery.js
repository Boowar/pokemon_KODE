import React, { Component } from 'react'
import Loading from './common/Loading'
import CustomError from './common/CustomError'
import Set from './common/Set'
import PropTypes from 'prop-types'

/**
 * Отвечает за логику рендера галереи наборов.
 */

class SetGallery extends Component {
  renderTemplate() {
    const { sets, isFetching, error } = this.props.sets
    if (error) {
      return <CustomError />
    }
    if (isFetching) {
      return <Loading />
    } else {
      return sets.map(
        ({
          code,
          logoUrl,
          symbolUrl,
          name,
          releaseDate,
          standardLegal,
          expandedLegal,
        }) => (
          <Set
            key={code}
            code={code}
            logoUrl={logoUrl}
            symbolUrl={symbolUrl}
            name={name}
            releaseDate={releaseDate}
            standardLegal={standardLegal}
            expandedLegal={expandedLegal}
          />
        )
      )
    }
  }

  render() {
    return <div className='set-gallery'>{this.renderTemplate()}</div>
  }
}

SetGallery.propTypes = {
  sets: PropTypes.object.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
}

export default SetGallery
