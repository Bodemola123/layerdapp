'use client'

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, http, useAccount, useDisconnect, useEnsAvatar, useEnsName  } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import React from 'react'
import SideNav from './SideNav';
import { Account } from './account'
import { WalletOptions } from './wallet-options'

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: 'LayerDapp',
  projectId: '43993a91d56339c1773d88b87b91c21f',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  transports: {
    [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/...'),
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/...'),
  },
});

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
}

const provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
        <div className="flex justify-stretch">
                <div>
                 <SideNav/>
                </div>
                <div className="w-4/6">
                {children}
                </div>
              </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    </div>
  )
}

export default provider
