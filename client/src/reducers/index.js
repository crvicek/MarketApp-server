import { combineReducers } from 'redux'
import adds from './adds'
import add from './add'

export default combineReducers({
  adds: adds,
  singleAdd: add
})