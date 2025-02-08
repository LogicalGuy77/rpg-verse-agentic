import { usePrivy } from '@privy-io/react-auth';

export function AuthButton() {
  const { login, logout, authenticated } = usePrivy();

  if (authenticated) {
    return (
      <button 
        onClick={logout}
        className="px-4 py-2 rounded-lg bg-red-500 text-white"
      >
        Disconnect
      </button>
    );
  }

  return (
    <button 
      onClick={login}
      className="px-4 py-2 rounded-lg bg-blue-500 text-white"
    >
      Connect Wallet
    </button>
  );
}