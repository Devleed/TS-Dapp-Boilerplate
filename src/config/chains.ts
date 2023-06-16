import { goerli, mainnet } from 'viem/chains'
import { Chain } from 'wagmi'

export const mantle_testnet = {
  id: 5001,
  name: 'Mantle Testnet',
  network: 'mantle testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'BIT',
    symbol: 'BIT',
  },
  rpcUrls: {
    public: { http: ['https://rpc.testnet.mantle.xyz'] },
    default: { http: ['https://rpc.testnet.mantle.xyz'] },
  },
  blockExplorers: {
    etherscan: {
      name: 'MantleTestnet',
      url: 'https://explorer.testnet.mantle.xyz/',
    },
    default: {
      name: 'MantleTestnet',
      url: 'https://explorer.testnet.mantle.xyz/',
    },
  },
} as const satisfies Chain

export default [mainnet, goerli, mantle_testnet]
