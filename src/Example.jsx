import {generateForm, formData} from './generator'
import schema from './schema.json'
import React from 'react'

class Example extends React.Component {
  log () {
    console.log('formData', formData)
  }
  render () {
    return (
      <div>
        {generateForm(schema)}
        <button onClick={this.log}>Log Form Data in Console</button>
      </div>
    )
  }
}

export default Example
