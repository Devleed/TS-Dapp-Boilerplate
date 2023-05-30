import React, { FC, useEffect } from 'react'
import { ConnectionType, SupportedWallets } from '../../connection'
import { Ember, Erc20, Kolnet } from '@contracts/types'
import { useWeb3React } from '@web3-react/core'
import { AvailableContracts } from '../../hooks/useContract/types'
import { useContract } from '../../hooks/useContract'
import WalletButtons from '@components/WalletButtons'

import './styles.scss'
import {
  useFetchOneQuery,
  useLazyFetchOneQuery,
} from '../../services/modules/users'
import Counter from '@components/Counter'

type Props = Record<string, unknown>

const App: FC<Props> = () => {
  const { provider, account } = useWeb3React()
  const tusdtContract = useContract<Erc20>(AvailableContracts.TUSDT)
  const kolnetContract = useContract<Kolnet>(AvailableContracts.KOLNET)
  const emberContract = useContract<Ember>(AvailableContracts.EMBER)

  const { data, isLoading, error } = useFetchOneQuery('9')

  console.log('account -', data, account, provider)

  const tryTransfer = async () => {
    if (tusdtContract) {
      tusdtContract.transfer(
        '0x09050568Ed00123dA7d9250c8A57AD393EeD8307',
        '1000000',
      )
    }
  }

  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <div className="app_container">
      {/* <h4>Counter App</h4>
      <Counter {...counterProps} />
      <Stake />
      <JestDemo id="2" /> */}
      <WalletButtons
        wallets={[ConnectionType.INJECTED, ConnectionType.WALLET_CONNECT]}
      />

      <button onClick={tryTransfer}>send</button>
    </div>
  )
}

export default App
