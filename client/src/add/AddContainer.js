import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Add from './Add'
import * as request from 'superagent'

const adds = [
  {
    title: 'Omafiets',
    description: 'Runs like a butter',
    picture: 'pictureplaceholder'
  },
  {
    title: 'Old Mac Pro',
    description: 'Runs like a butter',
    picture: 'pictureplaceholder'
  },
  {
    title: 'Ford Fiesta',
    description: 'Runs like a butter',
    picture: 'pictureplaceholder'
  },
  {
    title: 'Oven',
    description: 'Runs like a butter',
    picture: 'pictureplaceholder'
  },
  {
    title: 'Last years potatos',
    description: 'Tastes like a butter',
    picture: 'pictureplaceholder'
  },
]

class AddContainer extends Component {
  state = {
    adds: adds
  }

  componentDidMount() {

    request('http://localhost:4000/adds')
      .then(response => this.props.dispatch({
        type: 'GET_ADDS',
        payload: response.body
      })
      )
  }

  // function getAdds() {
  // return function (dispatch) {
  //   request('localhost:4000/adds/1')
  //     .then(response => {
  //       dispatch(response)
  //     })
  // }
  // }



  render() {
    return <Add adds={this.props.adds}></Add>
  }
}

const mapStateToProps = (state) => {
  return {
    adds: state
  }
}
export default connect(mapStateToProps)(AddContainer)