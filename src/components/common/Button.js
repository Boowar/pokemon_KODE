import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/**
 * Кнопка вернуться на главную.
 */
class Button extends Component {
  render() {
    return (
      <div className='home-button'>
        <Link to='/'>
          <button className='home-button__button'>На главную</button>
        </Link>
      </div>
    )
  }
}

export default Button
