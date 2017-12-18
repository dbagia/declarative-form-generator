import 'basscss/css/basscss.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import Routes from './routes.jsx'
import './styles.css'

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.body.appendChild(document.createElement('div'))
)
