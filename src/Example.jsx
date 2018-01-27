import {generateForm, formData} from './generator'
import schema from './schema.json'
import React from 'react'

class Example extends React.Component {
  alert () {
    console.log('formData', formData)
  }
  render () {
    return (
      <div>
        {generateForm(schema)}
        <button onClick={this.alert}>Show formData</button>
      </div>
    )
  }
}

export default Example
