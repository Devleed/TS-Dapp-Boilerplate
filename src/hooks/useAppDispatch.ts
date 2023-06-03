import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@redux/configureStore'

export default () => useDispatch<AppDispatch>() // eslint-disable-line
