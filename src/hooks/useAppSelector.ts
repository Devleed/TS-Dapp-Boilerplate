import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '@redux/configureStore'
// import { bindActionCreators } from '@reduxjs/toolkit'
// import { ActionCreators } from '@redux/slices/counterSlice'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector

// export const useActions = () => {
//   const dispatch = useDispatch()

//   return bindActionCreators(ActionCreators, dispatch)
// }
