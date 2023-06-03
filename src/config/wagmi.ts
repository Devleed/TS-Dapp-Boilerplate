import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import { APPLICATION_NAME } from '../constant'
import { goerli } from 'viem/chains'
import supportedChains from './chains'

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, publicClient, webSocketPublicClient } = configureChains(
  supportedChains,
  [
    alchemyProvider({ apiKey: 'O7jBgoF0DPQ2eZ3YP_NEomobfK1MFC-B' }),
    alchemyProvider({ apiKey: 'ZqhSAi2wNYqa-p41EWrdKNXeBbh7Z5Cf' }),
    publicProvider(),
  ],
)

// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //     appName: APPLICATION_NAME,
    //   },
    // }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: '...',
      },
    }),
    // new InjectedConnector({
    //   chains,
    //   options: {
    //     name: 'Injected',
    //     shimDisconnect: true,
    //   },
    // }),
  ],
  publicClient,
  webSocketPublicClient,
})

export default config
