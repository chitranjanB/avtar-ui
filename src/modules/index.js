import { combineReducers } from 'redux'
import counter from './counter'
import track from './track'

export default combineReducers({
  counter,
  track,
})
