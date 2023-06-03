import React, { useMemo, useState } from 'react'
import { goerli } from 'viem/chains'
import {
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
import { darken, styled } from '@mui/material/styles'
import Navbar from '@components/Navbar'

const Container = styled('div')<{
  height?: number | string
  width?: number | string
  bgColor?: string
}>(({ theme, height, width, bgColor }) => ({
  height: height || 'auto',
  width: width || 'auto',
  backgroundColor: bgColor || theme.palette.background.default,
}))

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

  return (
    <Container height="100vh" width="100vw">
      <Navbar />

      {error && <div>{error.message}</div>}
    </Container>
  )
}
