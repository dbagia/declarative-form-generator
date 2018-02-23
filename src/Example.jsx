import {generateForm, formData} from './generator'
import schema from './schema.json'
import React from 'react'
import List from 'crocks/List'
import {prop} from 'crocks/Maybe'
import LookupComponent from './generator/Lookup_Component.jsx'
import when from 'crocks/logic/when'
import propOr from 'crocks/helpers/propOr'

const textToReact = item =>
  <div className='my2'>
    <label className='mr2 mb2'>{item.label}</label>
    <input
      type='text'
      required={item.required}
      readOnly={item.readOnly}
      placeholder={item.placeholder}
      className='mb2'
    />
  </div>

const listToReact = item =>
  <LookupComponent field={item} />

const defProp = propOr('string')
const isText = i => defProp('type', i) === 'string'
const isList = i => defProp('type', i) === 'list'

const whenText = when(isText, textToReact)
const whenList = when(isList, listToReact)

const Example =
  List
    .fromArray(schema)
    .map(whenText)
    .map(whenList)

/* class Example extends React.Component {
  log () {
    console.log(
    List
      .fromArray(schema)
      .map(whenText)
      .map(whenList)
      .toArray()
    )
      // .map(i => console.log('text ', i))
  }
  render () {
    return (
      <div>
        {generateForm(schema)}
        <button onClick={this.log}>Log Form Data in Console</button>
      </div>
    )
  }
} */

export default Example
