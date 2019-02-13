import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Add from './Add'
import * as request from 'superagent'


class AddContainer extends Component {
  state = {
  }

  componentDidMount() {

    request('http://localhost:4000/adds')
      .then(response => this.props.dispatch({
        type: 'GET_ADDS',
        payload: response.body
      })
      )
  }

  render() {
    return <Add adds={this.props.adds}></Add>
  }
}

const mapStateToProps = (state) => {
  return {
    adds: state.adds
  }
}
export default connect(mapStateToProps)(AddContainer)