import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SingleAdd from './SingleAdd'
import * as request from 'superagent'

class SingleAddContainer extends Component {
  state = {
  }

  componentDidMount() {
    const addId = this.props.match.params.id

    request(`http://localhost:4000/adds/${addId}`)
      .then(response => this.props.dispatch({
        type: 'GET_ADD',
        payload: response.body
      })
      )
  }

  render() {
    console.log('check the passed props', this.props.add)
    return <SingleAdd add={this.props.add} />

  }
}

const mapStateToProps = (state) => ({  
    add: state.singleAdd
})

export default connect(mapStateToProps)(SingleAddContainer)