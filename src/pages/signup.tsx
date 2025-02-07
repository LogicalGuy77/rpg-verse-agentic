import { AuthButton } from "../web3/wallet.js";
import React, { useState, useEffect } from 'react';
import { Settings, FileText } from 'lucide-react';
import { WalletToggle } from '../components/WalletToggle.js';
import bgg from '/bgg.jpg';

export function SignupPage() {
    const [toggles, setToggles] = useState({});
    const [showAnimation, setShowAnimation] = useState(true);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnimation(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleToggle = (name) => {
        setToggles((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const handleButtonClick = (walletName) => {
        console.log(`${walletName} button clicked`);
    };

    const walletNames = ['Wallet 1', 'Wallet 2', 'Wallet 3', 'Wallet 4', 'Wallet 5'];

    return (
        <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bgg})` }}>
            {showAnimation && (
                <div className="fixed inset-0 z-50 grid grid-cols-8 grid-rows-8 animate-checkerboard">
                    {[...Array(64)].map((_, index) => (
                        <div
                            key={index}
                            className={`w-full h-full ${index % 2 === (Math.floor(index / 8) % 2) ? 'bg-red-600' : 'bg-black'}`}
                        ></div>
                    ))}
                </div>
            )}

            <div className="absolute top-4 left-4 flex gap-4">
                <Settings className="w-8 h-8 text-gray-300" />
                <FileText className="w-8 h-8 text-gray-300" />
            </div>

            <div className="min-h-screen flex items-center justify-center px-4 backdrop-blur-sm">
                <div className="flex gap-4 max-w-2xl w-full">
                    <div className="bg-gray-900/90 p-8 rounded-lg border-2 border-red-600 shadow-lg flex-1">
                        <h1 className="text-4xl font-bold mb-8 text-amber-500 font-mono">Login</h1>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-white mb-2 text-sm">Email</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-4 py-2 bg-black border border-red-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                />
                            </div>
                            <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono">
                                Login
                            </button>
                            <div className="flex flex-col gap-4">
                                <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleButtonClick('MetaMask Wallet')}>
                                    MetaMask Wallet
                                </button>
                                <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleButtonClick('CoinBase Wallet')}>
                                    CoinBase Wallet
                                </button>
                                <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleButtonClick('Rainbow Wallet')}>
                                    Rainbow Wallet
                                </button>
                                <AuthButton />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-900/90 p-8 rounded-lg border-2 border-red-600 shadow-lg">
                        <h2 className="text-2xl font-bold mb-6 text-amber-500 font-mono">Or use</h2>
                        <div className="space-y-4">
                            {walletNames.map((name) => (
                                <WalletToggle key={name} name={name} isEnabled={!!toggles[name]} onToggle={() => handleToggle(name)} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 w-full bg-gray-900/90 border-t-2 border-red-600 p-6">
                <p className="text-white text-2xl font-mono text-center">
                    Log in or create an account to start. No email required!
                </p>
            </div>

            <style>{`
                @keyframes checkerboard {
                    0% { opacity: 1; transform: scale(1); }
                    100% { opacity: 0; transform: scale(1.2); }
                }
                .animate-checkerboard {
                    animation: checkerboard 2s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
