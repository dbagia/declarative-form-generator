import 'basscss/css/basscss.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import Routes from './routes.jsx'
import './styles.css'
import {$} from './generator/helpers'

$('#app')
.map(x => x[0])
.map(container => {
  ReactDOM.render(
    <Router>
      {Routes.run()}
    </Router>,
    container
  )
})
.run()
