import * as request from 'superagent'
const initState = []

export default (state = initState, action = {}) => {
  switch (action.type) {
    // case 'ADD_ADDS':
    //   // console.log('add album reducer is responding')
    //   return [
    //     ...state,
    //     action.payload
    //   ]
    case 'GET_ADDS':
      return state.adds = action.payload
      
      

    // case 'GET_ALBUMS':
    //   console.log('called get_albums')
    //   return true

    default:
      return state
  }
}