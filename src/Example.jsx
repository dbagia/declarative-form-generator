import {generateForm, fields} from './generator'
import schema from './schema.json'
import React from 'react'

class Example extends React.Component {
  alert () {
    console.log('fields', fields)
  }
  render () {
    return (
      <div>
        {generateForm(schema)}
        <button onClick={this.alert}>Show fields</button>
      </div>
    )
  }
}

export default Example
