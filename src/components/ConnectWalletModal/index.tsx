import React, { useEffect, useMemo, useState } from 'react'
import { CircularProgress, Modal } from '@mui/material'

import ModalBody from '@components/ModalBody'
import Simple from '@components/Buttons/Simple'
import { MetamaskIcon, WalletConnectIcon } from '@assets/'
import { useConnect } from 'wagmi'

type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ConnectWalletModal: React.FC<Props> = ({ open, setOpen }) => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

  const walletIcons = useMemo(() => {
    return {
      MetaMask: <MetamaskIcon height={50} width={50} />,
      WalletConnect: <WalletConnectIcon height={70} width={70} />,
    }
  }, [])

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBody style={{ padding: 50 }}>
        {connectors.map((connector, indx) => (
          <Simple
            key={connector.id}
            height={80}
            width={250}
            style={{ marginBottom: indx !== connectors.length - 1 ? 10 : 0 }}
            onClick={() => {
              setOpen(false)
              connect({ connector })
            }}
          >
            {walletIcons[connector.name as keyof typeof walletIcons]}
            <div
              style={{
                marginLeft: connector.name === 'WalletConnect' ? 0 : 10,
                fontSize: 16,
              }}
            >
              {connector.name}
            </div>
          </Simple>
        ))}
      </ModalBody>
    </Modal>
  )
}

export default ConnectWalletModal
