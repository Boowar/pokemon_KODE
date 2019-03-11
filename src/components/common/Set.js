import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * Шаблон набора из галереи наборов
 */

class Set extends Component {
  isLegal(standardLegal, expandedLegal) {
    if (standardLegal === true && expandedLegal === true) {
      return (
        <ul>
          <li>Standard Legal</li>
          <li>Expanded Legal</li>
        </ul>
      )
    } else if (standardLegal === true && expandedLegal === false) {
      return (
        <ul>
          <li>Standard Legal</li>
        </ul>
      )
    } else if (standardLegal === false && expandedLegal === true) {
      return (
        <ul>
          <li>Expanded Legal</li>
        </ul>
      )
    }
  }
  render() {
    const {
      code,
      logoUrl,
      symbolUrl,
      name,
      releaseDate,
      standardLegal,
      expandedLegal,
    } = this.props
    return (
      <div className='set-item'>
        <Link to={code}>
          <div className='set-image'>
            <img src={logoUrl} alt='Placeholder' />
          </div>
          <div className='set-content'>
            <div className='media'>
              <div className='media-left'>
                <div className='image is-48x48'>
                  <img src={symbolUrl} alt='Placeholder' />
                </div>
              </div>
              <div className='media-content'>
                <p className='title is-4'>{name}</p>
                <p className='subtitle is-6'>Released {releaseDate}</p>
              </div>
            </div>
            <div className='content'>
              {this.isLegal(standardLegal, expandedLegal)}
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

Set.propTypes = {
  code: PropTypes.string.isRequired,
  logoUrl: PropTypes.string,
  symbolUrl: PropTypes.string,
  name: PropTypes.string,
  releaseDate: PropTypes.string,
  standardLegal: PropTypes.bool,
  expandedLegal: PropTypes.bool,
}

export default Set
