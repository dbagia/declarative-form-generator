import LookupComponent from './generator/Lookup_Component.jsx'

export const textToReact = item =>
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

export const listToReact = item =>
  <LookupComponent field={item} />
