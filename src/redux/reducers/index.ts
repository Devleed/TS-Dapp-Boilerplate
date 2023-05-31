import { combineReducers } from 'redux'
import { api } from '../../services/api'
import counterReducer from '../slices/counterSlice'

const reducers = combineReducers({
  counter: counterReducer,
  [api.reducerPath]: api.reducer,
})

export default reducers
