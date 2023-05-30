import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@redux/configureStore'
import Web3Provider from '@components/Web3Provider'

// WalletConnect does not work with webpack 5 i.e. react@18+
// This is required to make it work
import { Buffer } from 'buffer'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(window as unknown as any).Buffer = (window as unknown as any).Buffer || Buffer

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Web3Provider />
    </PersistGate>
  </Provider>,
)
