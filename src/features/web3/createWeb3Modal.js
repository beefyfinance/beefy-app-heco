import Web3Modal, { connectors } from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

export const createWeb3Modal = t =>
  new Web3Modal({
    network: 'heco',
    cacheProvider: true,
    providerOptions: {
      injected: {
        display: {
          name: 'Injected',
          description: t('Home-BrowserWallet'),
        },
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            1: 'https://http-mainnet.hecochain.com',
            128: 'https://http-mainnet.hecochain.com',
          },
        },
      },
      'custom-math': {
        display: {
          name: 'Math',
          description: t('Math Wallet'),
          logo: require(`images/math-wallet.svg`),
        },
        package: 'math',
        connector: connectors.injected,
      },
    },
  });
