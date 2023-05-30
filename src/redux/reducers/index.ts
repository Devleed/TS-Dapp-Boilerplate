import { combineReducers } from 'redux'
import { api } from '../../services/api'
import counterReducer from '../slices/counterSlice'
import walletReducer from '../slices/walletSlice'

const reducers = combineReducers({
  counter: counterReducer,
  wallet: walletReducer,
  [api.reducerPath]: api.reducer,
})

export default reducers
