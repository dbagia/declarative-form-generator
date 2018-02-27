import LookupComponent from './generator/Lookup_Component.jsx'
import assign from 'crocks/helpers/assign'
import curry from 'crocks/helpers/curry'

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
