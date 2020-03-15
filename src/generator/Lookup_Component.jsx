import React, { useState, useEffect } from 'react'
import { getData, toOptions } from './helpers'

export default function LookupComponent(props) {
  const [options, setOptions] = useState([])

  useEffect(() => {
    getData(props.field.lookupUrl)
      .map(r => r.data)
      .map(toOptions)
      .fork(
        err => console.log('err', err), setOptions
      )
  })

  return (
    <div className='my2'>
      <label className='mr2 mb2'>
        {props.field.label}
      </label>
      <select
        required={props.field.required}
        readOnly={props.field.readOnly}
        onChange={props.field.onChange}
        className='mb2'
      >
        {options}
      </select>
    </div>
  )
}

