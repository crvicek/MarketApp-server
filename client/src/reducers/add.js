import * as request from 'superagent'

const initState = {}

export default (state = initState, action = {}) => {
  switch (action.type) {
   
    case 'GET_ADD':
      return state = action.payload

    default:
      return state
  }
}