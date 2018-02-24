import React from 'react'
import {asyncAxiosGet} from './helpers'

const getData = url =>
asyncAxiosGet(url)

const toOptions = options =>
  options
  .map((option, i) =>
    <option key={i} value={option.id}>{option.name}</option>
  )

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
    return (
      <div className='my2'>
        <label className='mr2 mb2'>{this.props.field.label}</label>
        <select
          required={this.props.field.required}
          readOnly={this.props.field.readOnly}
          onChange={this.props.field.onChange}
          className='mb2'
        >
          {this.state.options}
        </select>
      </div>
    )
  }
}
