import { combineReducers } from 'redux'
import { api } from '../../services/api'
import counterReducer from '../slices/counterSlice'
import themeReducer from '../slices/themeSlice'

const reducers = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  [api.reducerPath]: api.reducer,
})

export default reducers
