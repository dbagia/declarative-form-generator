import 'basscss/css/basscss.min.css'
import R from 'ramda'
import React from 'react'

const inputs = (schema) => {
  return schema
    .filter(s => s.type === 'string')
    .map((s, i) =>
      <div className='my2'>
        <label className='mr2'>{s.label}</label>
        <input type='text' required={s.required} readOnly={s.readOnly} placeholder={s.placeholder} />
      </div>
    )
}

const lists = (schema) => {
  return schema
    .filter(s => s.type === 'list')
    .map((s, i) =>
      <div className='my2'>
        <label className='mr2'>{s.label}</label>
        <select required={s.required} readOnly={s.readOnly}>
          <option value='0'>val0</option>
          <option value='1'>val1</option>
          <option value='2'>val2</option>
        </select>
      </div>
    )
}

const log = o => {
  console.log(o)
  return o
}
const generateForm = R.pipe(log, inputs, lists, log)

export default generateForm
