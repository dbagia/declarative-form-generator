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
      const options = response.data.results.map((r, i) => {
        return {
          value: r[this.props.field.lookupId],
          text: r[this.props.field.lookupDisplay]
        }
      })
      this.setState({
        options: options.map((option, i) => <option key={i} value={option.value}>{option.text}</option>)
      })
    })
  }

  render () {
    return (
      <div className='my2'>
        <label className='mr2'>{this.props.field.label}</label>
        <select required={this.props.field.required} readOnly={this.props.field.readOnly} onChange={this.props.field.onChange}>
          {this.state.options}
        </select>
      </div>
    )
  }
}
