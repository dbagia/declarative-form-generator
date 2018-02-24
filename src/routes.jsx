import { Route } from 'react-router-dom'
import Example from './Example.jsx'
import React from 'react'
import IO from 'crocks/IO'

const Routes = IO.of(
  <div>
    <Route exact path='/' component={() => Example.toArray()} />
  </div>
  )

export default Routes
