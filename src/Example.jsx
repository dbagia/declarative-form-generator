import generateForm from './generator'
import schema from './schema.json'
import React from 'react'

class Example extends React.Component {
  render () {
    return (
      <div>
        {generateForm(schema)}
      </div>
    )
  }
}

export default Example
