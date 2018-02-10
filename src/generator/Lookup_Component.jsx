import React from 'react'
import axios from 'axios'

export default class LookupComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      options: []
    }
  }

  componentDidMount () {
    axios.get(this.props.field.lookupUrl)
    .then(response => {
      const options =
      response.data
      .map(r =>
        ({
          value: r[this.props.field.lookupId],
          text: r[this.props.field.lookupDisplay]
        })
      )
      .map((option, i) =>
        <option key={i} value={option.value}>{option.text}</option>
      )

      this.setState({
        options:
        [<option key={-1} value={0}>--Select--</option>]
        .concat(options)
      })
    })
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
