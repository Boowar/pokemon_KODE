import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SetsContainer from '../containers/SetsContainer'
import CardsContainer from '../containers/CardsContainer'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={SetsContainer} />
      <Route path='/:set' component={CardsContainer} />
    </Switch>
  </BrowserRouter>
)

export default Routes
