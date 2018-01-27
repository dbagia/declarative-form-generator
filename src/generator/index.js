import 'basscss/css/basscss.min.css'
import R from 'ramda'
import React from 'react'
import LookupComponent from './Lookup_Component.jsx'
import Maybe from 'folktale/maybe'

let formData = {}

const schemaItemHas = (props, schemaItem) => {
  const hasProp = R.has(R.__, schemaItem)

  return R.contains(false, props.map(prop => hasProp(prop))) ? Maybe.Nothing() : Maybe.Just(schemaItem)
}

const addOnChange = R.curry((fields, schema) =>
schema.map(field => {
  field.onChange = event => {
    const value = event.target.value
    fields[field.name] = value
  }
  return field
}))

const inputs = schema =>
    schema
    .map((s, i) =>
      schemaItemHas(['label', 'readOnly', 'placeholder'], s)
      .map(ms =>
        ms.type === 'string'
        ? <div className='my2' key={i}>
          <label className='mr2'>{ms.label}</label>
          <input type='text' required={ms.required} readOnly={ms.readOnly} placeholder={ms.placeholder} onChange={ms.onChange} />
        </div>
        : ms
      )
    )
    .map(maybe =>
      maybe.getOrElse(
        <div className='my2'>This field is missing required properties</div>
      )
    )

const lists = schema =>
  schema
    .map((s, i) =>
    s.type === 'list'
    ? <LookupComponent field={s} />
      : s
    )

const log = o => {
  console.log(o)
  return o
}

const filter = R.curry((type, schema) => schema.filter(s => s.type === type))
const generateForm = R.pipe(addOnChange(formData), filter('string'), log, inputs)

export {generateForm, formData, inputs, lists, addOnChange}
