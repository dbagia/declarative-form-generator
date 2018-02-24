import 'basscss/css/basscss.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import Routes from './routes.jsx'
import './styles.css'
import IO from 'crocks/IO'

const appendDiv =
  IO.of(document.body.appendChild(document.createElement('div')))

appendDiv.map(container => {
  ReactDOM.render(
    <Router>
      {Routes.run()}
    </Router>,
    container
  )
}
)
.run()
