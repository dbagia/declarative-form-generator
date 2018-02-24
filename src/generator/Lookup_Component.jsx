import React from 'react'
import {getData, toOptions} from './helpers'

export default class LookupComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      options: []
    }
  }

  componentDidMount () {
    getData(this.props.field.lookupUrl)
    .map(r => r.data)
    .map(toOptions)
    .fork(
      err => console.log('err', err),
      options => {
        this.setState(
          {options}
        )
      }
    )
  }

  render () {
    const {field} = this.props
    return (
      <div className='my2'>
        <label className='mr2 mb2'>
          {field.label}
        </label>
        <select
          required={field.required}
          readOnly={field.readOnly}
          onChange={field.onChange}
          className='mb2'
        >
          {this.state.options}
        </select>
      </div>
    )
  }
}
