import React, { useMemo } from 'react'
import { goerli } from 'viem/chains'
import {
  erc20ABI,
  useAccount,
  useConnect,
  useContractRead,
  useDisconnect,
  useEnsName,
  useNetwork,
  useSwitchNetwork,
} from 'wagmi'
import social_blocks_abi from '../../abis/social_blocks_abi'
import { AvailableContracts } from '@config/contracts'

export default function Profile() {
  const { address, connector, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { disconnect } = useDisconnect()
  const { data } = useContractRead({
    abi: social_blocks_abi,
    functionName: 'walletOfOwner',
    args: ['0xEBa526a6FfB08F081911b2223bdcC59d3374a32A'],
    address: AvailableContracts.SOCIAL_BLOCKS,
  })

  const { chain } = useNetwork()
  const {
    chains,
    error: switchError,
    isLoading: switchLoading,
    pendingChainId,
    switchNetwork,
  } = useSwitchNetwork()

  const supportedChainIds = useMemo(() => {
    return chains.map(chain => chain.id)
  }, [chains])

  if (chain && !supportedChainIds.includes(chain.id)) {
    return (
      <div>
        <div>Unsupported network</div>
        <button onClick={() => switchNetwork && switchNetwork(goerli.id)}>
          Switch to Goerli
        </button>
      </div>
    )
  }

  if (isConnected) {
    return (
      <div>
        {/* <img src={ensAvatar} alt="ENS Avatar" /> */}
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <div>Connected to {connector?.name}</div>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  }

  return (
    <div>
      {connectors.map(connector => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  )
}
