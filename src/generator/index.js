import 'basscss/css/basscss.min.css'
import R from 'ramda'
import React from 'react'
import LookupComponent from './Lookup_Component.jsx'
import { processInputs } from './processInputs'

let formData = {}

// addOnChange:: (Object) -> (JSON) -> []
const addOnChange = R.curry((fields, schema) =>
  schema.map(field => {
    field.onChange = event => {
      const value = event.target.value
      fields[field.name] = value
    }
    return field
  }))

// inputs:: (JSON) -> []
const inputs = schema =>
  schema
  .map(processInputs)
  .map(maybe =>
    maybe.getOrElse(
      <div className='my2'>This field is missing required properties</div>
    )
  )

// lists:: (JSON) -> []
const lists = schema =>
  schema
    .map((s, i) =>
    s.type === 'list'
    ? <LookupComponent field={s} />
      : s
    )

// log:: IMPURE a -> a
const log = o => {
  console.log(o)
  return o
}

// filter:: (String) -> (JSON) -> []
const filter = R.curry((type, schema) => schema.filter(s => s.type === type))

const generateForm = R.pipe(addOnChange(formData), log, inputs, lists)

export {generateForm, formData, inputs, lists, addOnChange}
