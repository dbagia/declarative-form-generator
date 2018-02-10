import { schemaItemHas } from './helpers'

export const processInputs = (s, i) =>
      schemaItemHas(['label', 'readOnly', 'placeholder'], s)
      .map(ms =>
        ms.type === 'string'
        ? <div className='my2' key={i}>
          <label className='mr2 mb2'>{ms.label}</label>
          <input
            type='text'
            required={ms.required}
            readOnly={ms.readOnly}
            placeholder={ms.placeholder}
            onChange={ms.onChange}
            className='mb2'
           />
        </div>
        : ms
      )
