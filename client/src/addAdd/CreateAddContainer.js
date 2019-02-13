import React from 'react'
import {connect} from 'react-redux'
import {createEvent} from '../actions/events'
import AddForm from './AddForm'

class CreateAddContainer extends React.Component {
  state = {
    title: '',
    description: ''
  }

  onChange = (add) => {
    this.setState({
      [add.target.title]: add.target.value
    })
  }

  onSubmit = (add) => {
    add.preventDefault()
    this.setState({
      title: '',
      description: ''
    })
    //this.props.createAdd(this.state)
  }

  render() {
    return (<AddForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null,)(CreateAddContainer)