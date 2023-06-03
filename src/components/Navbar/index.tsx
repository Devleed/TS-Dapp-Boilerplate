import React, { useState } from 'react'
import { darken, styled } from '@mui/material/styles'

import Simple from '@components/Buttons/Simple'
import ConnectWalletModal from '@components/ConnectWalletModal'
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi'
import { MenuItem, Select } from '@mui/material'

const Container = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: 100,
  backgroundColor: darken(theme.palette.background.default, 0.2),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 30px 0 30px',
}))

const Navbar = () => {
  const [walletModalVisible, setWalletModalVisible] = useState(false)

  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { chain, chains } = useNetwork()
  const {
    error: switchError,
    isLoading: switchLoading,
    pendingChainId,
    switchNetwork,
  } = useSwitchNetwork()

  return (
    <>
      <Container>
        <div>TS-Web3</div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div>{address}</div>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={chain?.id}
            label="Network"
            onChange={val => {
              switchNetwork && switchNetwork(val.target.value as number)
            }}
            style={{ marginRight: 10, marginLeft: 10 }}
          >
            {chains.map(chain => {
              return (
                <MenuItem key={chain.id} value={chain.id}>
                  {chain.name}
                </MenuItem>
              )
            })}
          </Select>

          <Simple
            height={60}
            width={180}
            onClick={() =>
              isConnected ? disconnect() : setWalletModalVisible(true)
            }
          >
            <div style={{ fontSize: 18 }}>
              {isConnected ? 'Disconnect' : 'Connect Wallet'}
            </div>
          </Simple>
        </div>
      </Container>

      {!isConnected && (
        <ConnectWalletModal
          open={walletModalVisible}
          setOpen={setWalletModalVisible}
        />
      )}
    </>
  )
}

export default Navbar
