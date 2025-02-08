import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PrivyProvider } from '@privy-io/react-auth';
import { base, polygon, arbitrum, mantle } from 'viem/chains';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PrivyProvider
    appId="cm6ot5bqi005hiiiy44bz3vek"
    config={{
      embeddedWallets: {
        createOnLogin: "all-users",
      },
    }}
  >
    <App />
  </PrivyProvider>
);
