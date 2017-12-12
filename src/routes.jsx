import { Route } from 'react-router-dom'
import Example from './Example.jsx'
import React from 'react'

const Routes = () => {
  return (
    <div>
      <Route exact path='/' component={Example} />
    </div>
  )
}

export default Routes
