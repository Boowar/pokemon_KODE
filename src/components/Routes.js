import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SetContainer from '../containers/SetContainer'
import CardContainer from '../containers/CardContainer'
import CustomError from './common/CustomError'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={SetContainer} />
      <Route path='/:selectedSet' component={CardContainer} />
      <Route path='/error' component={CustomError} />
    </Switch>
  </BrowserRouter>
)

export default Routes
