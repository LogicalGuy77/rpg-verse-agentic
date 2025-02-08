import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RpgGame } from '@rpgjs/client/react';
import { RpgClientEngine } from '@rpgjs/client';
import { RpgServerEngine } from '@rpgjs/server';
import { SignupPage } from './pages/signup.js';
import { useStore } from '@nanostores/react';
// import { isConnected } from './store/auth.js';

function App() {
  // const $isConnected = useStore(isConnected);

  const onReady = ({ server, client }: { server: RpgServerEngine, client: RpgClientEngine }) => {}

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to login/signup */}
        <Route path="/" element={<SignupPage /> } />

        {/* RPG Game Route */}
        <Route path="/dashboard" element={<RpgGame onReady={onReady} />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
