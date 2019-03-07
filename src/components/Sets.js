import React, { Component } from 'react'

class Sets extends Component {
  renderTemplate() {
    const { sets, isFetching, error } = this.props.sets
    if (error) {
      return <p className='error'>Во время загрузки произошла ошибка</p>
    }
    if (isFetching) {
      return <p>Загрузка...</p>
    } else {
      return sets.map(set => (
        <div key={set.code} className='set'>
          <img src={set.logoUrl} alt={set.name} />
          <p>{set.name}</p>
        </div>
      ))
    }
  }

  render() {
    return <div className='set-list'>{this.renderTemplate()}</div>
  }
}

export default Sets
