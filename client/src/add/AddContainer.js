import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Add from './Add'

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


  render() {  
  return  <Add adds={this.state}></Add>
  }
}

const mapStateToProps = (state) => {
  return {
    adds: state
  }
}
export default connect (mapStateToProps)(AddContainer)