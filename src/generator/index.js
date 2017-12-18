import 'basscss/css/basscss.min.css'
import R from 'ramda'
import React from 'react'
import cities from '../cities.json'

let fields = {}

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
      s.type === 'string'
      ? <div className='my2'>
        <label className='mr2'>{s.label}</label>
        <input type='text' required={s.required} readOnly={s.readOnly} placeholder={s.placeholder} onChange={s.onChange} />
      </div>
      : s
    )

const lists = R.curry((cities, schema) =>
  schema
    .map((s, i) =>
    s.type === 'list'
    ? <div className='my2'>
      <label className='mr2'>{s.label}</label>
      <select required={s.required} readOnly={s.readOnly} onChange={s.onChange}>
        {
         cities.map((c, i) =>
           <option value={c[s.lookupId]} key={i}>{c[s.lookupDisplay]}</option>
        )
      }
      </select>
    </div>
      : s
    ))

const log = o => {
  console.log(o)
  return o
}
const generateForm = R.pipe(addOnChange(fields), log, inputs, lists(cities), log)

export {generateForm, fields}
