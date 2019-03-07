import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import SetsContainer from '../containers/SetsContainer'

const Routes = () => (
  <BrowserRouter>
    <Route path='/' exact component={SetsContainer} />
  </BrowserRouter>
)

export default Routes
