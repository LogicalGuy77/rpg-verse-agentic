import { AuthButton } from "../web3/wallet.js";
import React, { useState, useEffect } from 'react';
import { Settings, FileText } from 'lucide-react';
import { WalletToggle } from '../components/WalletToggle.js';
import bgg from '/bgg.jpg';
import logo from "/logo.gif";

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

    return (
        <div
            className="min-h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bgg})` }}
        >
            {showAnimation && (
                <div className="fixed inset-0 z-40 grid grid-cols-8 grid-rows-8 animate-checkerboard">
                    {[...Array(64)].map((_, index) => (
                        <div
                            key={index}
                            className={`w-full h-full ${index % 2 === (Math.floor(index / 8) % 2)
                                    ? 'bg-red-600'
                                    : 'bg-black'
                                }`}
                        ></div>
                    ))}
                </div>
            )}

            {/* 🔥 GIF Logo - Always on Top */}
            <div className="absolute top-4 left-4 w-40 z-50">
                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>

            <div className="absolute top-4 right-4 flex gap-4">
                <Settings className="w-8 h-8 text-gray-300" />
                <FileText className="w-8 h-8 text-gray-300" />
            </div>

            <div className="min-h-screen flex items-center justify-center px-4 backdrop-blur-sm">
                <div className="flex gap-4">
                    <div className="bg-gray-900/90 p-8 rounded-lg border-2 border-red-600 shadow-lg flex-1">
                        <h1 className="text-4xl font-bold mb-8 text-amber-500 font-mono">Login</h1>
                        <div className="space-y-6">
                            <div className="flex flex-col gap-4 w-full items-center">
                                <AuthButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 w-full bg-gray-900/90 border-t-2 border-red-600 p-6">
                <p className="text-white text-2xl font-mono text-center">
                    Welcome to SuriVerse
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