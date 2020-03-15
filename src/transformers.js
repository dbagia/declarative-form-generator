import React from 'react'
import curry from 'crocks/helpers/curry'
import assign from 'crocks/helpers/assign'
import LookupComponent from './generator/Lookup_Component.jsx'

export const textToReact = item =>
  <div className='my2'>
    <label className='mr2 mb2'>{item.label}</label>
    <input
      type='text'
      required={item.required}
      readOnly={item.readOnly}
      placeholder={item.placeholder}
      onChange={item.onChange}
      className='mb2'
    />
  </div>

export const listToReact = item =>
  <LookupComponent field={item} />

export const addChangeListener = curry((userInput, item) =>
  assign(item, {
    onChange: event => {
      userInput[item.name] = event.target.value
      console.log(userInput)
    }
  }))
