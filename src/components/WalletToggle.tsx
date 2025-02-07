import React from 'react';
import { Wallet } from 'lucide-react';

export function WalletToggle({ name, isEnabled, onToggle }) {
  const handleToggle = () => {
    onToggle(name);
    console.log(`${name} is now ${isEnabled ? 'closed' : 'opened'}`);
  };

  return (
    <button 
      onClick={handleToggle}
      className="bg-gray-900 rounded-full px-4 py-2.5 flex items-center justify-between w-[15rem] border border-gray-800"
    >
      <div className="flex items-center gap-2">
        <Wallet className="w-5 h-5 text-gray-400" />
        <span className="text-gray-200 font-medium">{name}</span>
      </div>
      
      {/* Toggle Switch */}
      <div 
        className={`w-10 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
          isEnabled ? 'bg-blue-600' : 'bg-gray-700'
        }`}
      >
        <div 
          className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-200 ease-in-out ${
            isEnabled ? 'translate-x-4' : 'translate-x-0'
          }`}
        />
      </div>
    </button>
  );
}
