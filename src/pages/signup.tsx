// // import { AuthButton } from "../web3/wallet.js";
// import React, { useState, useEffect } from 'react';
// import { Settings, FileText } from 'lucide-react';
// import { WalletToggle } from '../components/WalletToggle.js';
// import bgg from '/bgg.jpg';
// import { useLogin } from "@privy-io/react-auth";
// import { PrivyClient } from "@privy-io/server-auth";

// import { usePrivy } from "@privy-io/react-auth";
// import { GetServerSideProps } from "next";
// import Head from "next/head";

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//     const cookieAuthToken = req.cookies["privy-token"];
  
//     // If no cookie is found, skip any further checks
//     if (!cookieAuthToken) return { props: {} };
  
//     const PRIVY_APP_ID = "cm6ot5bqi005hiiiy44bz3vek"
//     const PRIVY_APP_SECRET = process.env.PRIVY_APP_SECRET;
//     const client = new PrivyClient(PRIVY_APP_ID!, PRIVY_APP_SECRET!);
  
//     try {
//       const claims = await client.verifyAuthToken(cookieAuthToken);
//       // Use this result to pass props to a page for server rendering or to drive redirects!
//       // ref https://nextjs.org/docs/pages/api-reference/functions/get-server-side-props
//       console.log({ claims });
  
//       return {
//         props: {},
//         redirect: { destination: "/dashboard", permanent: false },
//       };
//     } catch (error) {
//       return { props: {} };
//     }
//   };

// export function SignupPage() {
//     const [toggles, setToggles] = useState({});
//     const [showAnimation, setShowAnimation] = useState(true);
//     const [username, setUsername] = useState('');
//     const { login } = useLogin({
//         // onComplete: () => router.push("/dashboard"),
//       });

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowAnimation(false);
//         }, 2000);
//         return () => clearTimeout(timer);
//     }, []);

//     const handleToggle = (name) => {
//         setToggles((prev) => ({
//             ...prev,
//             [name]: !prev[name],
//         }));
//     };

//     const handleButtonClick = (walletName) => {
//         console.log(`${walletName} button clicked`);
//     };

//     const walletNames = ['Wallet 1', 'Wallet 2', 'Wallet 3', 'Wallet 4', 'Wallet 5'];

//     return (
//         <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bgg})` }}>
//             {showAnimation && (
//                 <div className="fixed inset-0 z-50 grid grid-cols-8 grid-rows-8 animate-checkerboard">
//                     {[...Array(64)].map((_, index) => (
//                         <div
//                             key={index}
//                             className={`w-full h-full ${index % 2 === (Math.floor(index / 8) % 2) ? 'bg-red-600' : 'bg-black'}`}
//                         ></div>
//                     ))}
//                 </div>
//             )}

//             <div className="absolute top-4 left-4 flex gap-4">
//                 <Settings className="w-8 h-8 text-gray-300" />
//                 <FileText className="w-8 h-8 text-gray-300" />
//             </div>

//             <div className="min-h-screen flex items-center justify-center px-4 backdrop-blur-sm">
//                 <div className="flex gap-4 max-w-2xl w-full">
//                     <div className="bg-gray-900/90 p-8 rounded-lg border-2 border-red-600 shadow-lg flex-1">
//                         <h1 className="text-4xl font-bold mb-8 text-amber-500 font-mono">Login</h1>
//                         <div className="space-y-6">
//                             <div>
//                                 <label className="block text-white mb-2 text-sm">Email</label>
//                                 <input
//                                     type="text"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     className="w-full px-4 py-2 bg-black border border-red-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                                 />
//                             </div>
//                             <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono">
//                                 Login
//                             </button>
//                             <div className="flex flex-col gap-4">
//                                 <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleButtonClick('MetaMask Wallet')}>
//                                     MetaMask Wallet
//                                 </button>
//                                 <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleButtonClick('CoinBase Wallet')}>
//                                     CoinBase Wallet
//                                 </button>
//                                 <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleButtonClick('Rainbow Wallet')}>
//                                     Rainbow Wallet
//                                 </button>
//                                 <button
//                 className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
//                 onClick={login}
//               >
//                 Log in
//               </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="bg-gray-900/90 p-8 rounded-lg border-2 border-red-600 shadow-lg">
//                         <h2 className="text-2xl font-bold mb-6 text-amber-500 font-mono">Or use</h2>
//                         <div className="space-y-4">
//                             {walletNames.map((name) => (
//                                 <WalletToggle key={name} name={name} isEnabled={!!toggles[name]} onToggle={() => handleToggle(name)} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="absolute bottom-0 w-full bg-gray-900/90 border-t-2 border-red-600 p-6">
//                 <p className="text-white text-2xl font-mono text-center">
//                     Log in or create an account to start. No email required!
//                 </p>
//             </div>

//             <style>{`
//                 @keyframes checkerboard {
//                     0% { opacity: 1; transform: scale(1); }
//                     100% { opacity: 0; transform: scale(1.2); }
//                 }
//                 .animate-checkerboard {
//                     animation: checkerboard 2s ease-out forwards;
//                 }
//             `}</style>
//         </div>
//     );
// }


// import React, { useState, useEffect } from 'react';
// import { Settings, FileText } from 'lucide-react';
// import { WalletToggle } from '../components/WalletToggle.js';
// import bgg from '/bgg.jpg';
// import { useLogin, usePrivy } from "@privy-io/react-auth";
// import { GetServerSideProps } from "next";
// import Head from "next/head";

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//     const cookieAuthToken = req.cookies["privy-token"];

//     if (!cookieAuthToken) return { props: {} };

//     const PRIVY_APP_ID = "cm6ot5bqi005hiiiy44bz3vek";
//     const PRIVY_APP_SECRET = process.env.PRIVY_APP_SECRET;

//     // Importing here ensures it only runs server-side
//     const { PrivyClient } = await import("@privy-io/server-auth");
//     const client = new PrivyClient(PRIVY_APP_ID!, PRIVY_APP_SECRET!);

//     try {
//         const claims = await client.verifyAuthToken(cookieAuthToken);
//         console.log({ claims });

//         return {
//             props: {},
//             redirect: { destination: "/dashboard", permanent: false },
//         };
//     } catch (error) {
//         console.error("Token verification failed:", error);
//         return { props: {} };
//     }
// };

// export function SignupPage() {
//     const [toggles, setToggles] = useState({});
//     const [showAnimation, setShowAnimation] = useState(true);
//     const [username, setUsername] = useState('');
//     const { login } = useLogin();

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowAnimation(false);
//         }, 2000);
//         return () => clearTimeout(timer);
//     }, []);

//     const handleToggle = (name) => {
//         setToggles((prev) => ({
//             ...prev,
//             [name]: !prev[name],
//         }));
//     };

//     const handleButtonClick = (walletName) => {
//         console.log(`${walletName} button clicked`);
//     };

//     const walletNames = ['Wallet 1', 'Wallet 2', 'Wallet 3', 'Wallet 4', 'Wallet 5'];

//     return (
//         <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bgg})` }}>
//             {showAnimation && (
//                 <div className="fixed inset-0 z-50 grid grid-cols-8 grid-rows-8 animate-checkerboard">
//                     {[...Array(64)].map((_, index) => (
//                         <div
//                             key={index}
//                             className={`w-full h-full ${index % 2 === (Math.floor(index / 8) % 2) ? 'bg-red-600' : 'bg-black'}`}
//                         ></div>
//                     ))}
//                 </div>
//             )}

//             <div className="absolute top-4 left-4 flex gap-4">
//                 <Settings className="w-8 h-8 text-gray-300" />
//                 <FileText className="w-8 h-8 text-gray-300" />
//             </div>

//             <div className="min-h-screen flex items-center justify-center px-4 backdrop-blur-sm">
//                 <div className="flex gap-4 max-w-2xl w-full">
//                     <div className="bg-gray-900/90 p-8 rounded-lg border-2 border-red-600 shadow-lg flex-1">
//                         <h1 className="text-4xl font-bold mb-8 text-amber-500 font-mono">Login</h1>
//                         <div className="space-y-6">
//                             <div>
//                                 <label className="block text-white mb-2 text-sm">Email</label>
//                                 <input
//                                     type="text"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     className="w-full px-4 py-2 bg-black border border-red-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                                 />
//                             </div>
//                             <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono">
//                                 Login
//                             </button>
//                             <div className="flex flex-col gap-4">
//                                 <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleButtonClick('MetaMask Wallet')}>
//                                     MetaMask Wallet
//                                 </button>
//                                 <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleButtonClick('CoinBase Wallet')}>
//                                     CoinBase Wallet
//                                 </button>
//                                 <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleButtonClick('Rainbow Wallet')}>
//                                     Rainbow Wallet
//                                 </button>
//                                 <button
//                                     className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
//                                     onClick={login}
//                                 >
//                                     Log in
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="bg-gray-900/90 p-8 rounded-lg border-2 border-red-600 shadow-lg">
//                         <h2 className="text-2xl font-bold mb-6 text-amber-500 font-mono">Or use</h2>
//                         <div className="space-y-4">
//                             {walletNames.map((name) => (
//                                 <WalletToggle key={name} name={name} isEnabled={!!toggles[name]} onToggle={() => handleToggle(name)} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="absolute bottom-0 w-full bg-gray-900/90 border-t-2 border-red-600 p-6">
//                 <p className="text-white text-2xl font-mono text-center">
//                     Log in or create an account to start. No email required!
//                 </p>
//             </div>

//             <style>{`
//                 @keyframes checkerboard {
//                     0% { opacity: 1; transform: scale(1); }
//                     100% { opacity: 0; transform: scale(1.2); }
//                 }
//                 .animate-checkerboard {
//                     animation: checkerboard 2s ease-out forwards;
//                 }
//             `}</style>
//         </div>
//     );
// }




// import React, { useState, useEffect } from 'react';
// import { Settings, FileText } from 'lucide-react';
// import { WalletToggle } from '../components/WalletToggle.js';
// import bgg from '/bgg.jpg';
// import { useLogin } from "@privy-io/react-auth";
// import Head from "next/head";


// export function SignupPage() {
//     const [toggles, setToggles] = useState({});
//     const [showAnimation, setShowAnimation] = useState(true);
//     const [username, setUsername] = useState('');
//     const { login } = useLogin({
//         onComplete: () => router.push("/dashboard"),
//       });

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowAnimation(false);
//         }, 2000);
//         return () => clearTimeout(timer);
//     }, []);

//     const handleToggle = (name) => {
//         setToggles((prev) => ({
//             ...prev,
//             [name]: !prev[name],
//         }));
//     };

//     const handleButtonClick = (walletName) => {
//         console.log(`${walletName} button clicked`);
//     };

//     const walletNames = ['Wallet 1', 'Wallet 2', 'Wallet 3', 'Wallet 4', 'Wallet 5'];

//     return (
//         <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bgg})` }}>
//             {showAnimation && (
//                 <div className="fixed inset-0 z-50 grid grid-cols-8 grid-rows-8 animate-checkerboard">
//                     {[...Array(64)].map((_, index) => (
//                         <div
//                             key={index}
//                             className={`w-full h-full ${index % 2 === (Math.floor(index / 8) % 2) ? 'bg-red-600' : 'bg-black'}`}
//                         ></div>
//                     ))}
//                 </div>
//             )}

//             <div className="absolute top-4 left-4 flex gap-4">
//                 <Settings className="w-8 h-8 text-gray-300" />
//                 <FileText className="w-8 h-8 text-gray-300" />
//             </div>

//             <div className="min-h-screen flex items-center justify-center px-4 backdrop-blur-sm">
//                 <div className="flex gap-4 max-w-2xl w-full">
//                     <div className="bg-gray-900/90 p-8 rounded-lg border-2 border-red-600 shadow-lg flex-1">
//                         <h1 className="text-4xl font-bold mb-8 text-amber-500 font-mono">Login</h1>
//                         <div className="space-y-6">
//                             <div>
//                                 <label className="block text-white mb-2 text-sm">Email</label>
//                                 <input
//                                     type="text"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     className="w-full px-4 py-2 bg-black border border-red-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                                 />
//                             </div>
//                             <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono">
//                                 Login
//                             </button>
//                             <div className="flex flex-col gap-4">
//                                 <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleButtonClick('MetaMask Wallet')}>
//                                     MetaMask Wallet
//                                 </button>
//                                 <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleButtonClick('CoinBase Wallet')}>
//                                     CoinBase Wallet
//                                 </button>
//                                 <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleButtonClick('Rainbow Wallet')}>
//                                     Rainbow Wallet
//                                 </button>
//                                 <button
//                                     className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
//                                     onClick={login}
//                                 >
//                                     Log in
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="bg-gray-900/90 p-8 rounded-lg border-2 border-red-600 shadow-lg">
//                         <h2 className="text-2xl font-bold mb-6 text-amber-500 font-mono">Or use</h2>
//                         <div className="space-y-4">
//                             {walletNames.map((name) => (
//                                 <WalletToggle key={name} name={name} isEnabled={!!toggles[name]} onToggle={() => handleToggle(name)} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="absolute bottom-0 w-full bg-gray-900/90 border-t-2 border-red-600 p-6">
//                 <p className="text-white text-2xl font-mono text-center">
//                     Log in or create an account to start. No email required!
//                 </p>
//             </div>

//             <style>{`
//                 @keyframes checkerboard {
//                     0% { opacity: 1; transform: scale(1); }
//                     100% { opacity: 0; transform: scale(1.2); }
//                 }
//                 .animate-checkerboard {
//                     animation: checkerboard 2s ease-out forwards;
//                 }
//             `}</style>
//         </div>
//     );
// }




import React, { useState, useEffect } from 'react';
import { Settings, FileText } from 'lucide-react';
import { WalletToggle } from '../components/WalletToggle.js';
import bgg from '/bgg.jpg';
import { useLogin, usePrivy } from "@privy-io/react-auth";
import Head from "next/head";
// import {useNavigate} from 'react-router-dom'
export function SignupPage() {
    const [toggles, setToggles] = useState({});
    const [showAnimation, setShowAnimation] = useState(true);
    const [username, setUsername] = useState('');
    // const navigate = useNavigate();
    const { login } = useLogin({
        // onComplete: () => (window.location.href = "/dashboard"),
    });

    const { ready, authenticated, user } = usePrivy();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnimation(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (ready && authenticated && user) {
            console.log("Wallet Address:", user.wallet?.address);
        }
    }, [ready, authenticated, user]);

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
                                <button
                                    className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
                                    onClick={login}
                                >
                                    Log in
                                </button>
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




// import React, { useState, useEffect } from 'react';
// import { Settings, FileText } from 'lucide-react';
// import { WalletToggle } from '../components/WalletToggle.js';
// import bgg from '/bgg.jpg';
// import { useLogin } from "@privy-io/react-auth";
// import { setAuthStatus } from '../store/auth.js'; // Importing setAuthStatus

// export function SignupPage() {
//     const [toggles, setToggles] = useState({});
//     const [showAnimation, setShowAnimation] = useState(true);
//     const [username, setUsername] = useState('');
//     const { login } = useLogin();

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowAnimation(false);
//         }, 2000);
//         return () => clearTimeout(timer);
//     }, []);

//     const handleToggle = (name) => {
//         setToggles((prev) => ({
//             ...prev,
//             [name]: !prev[name],
//         }));
//     };

//     const handleLogin = async () => {
//         try {
//             await login();
//             setAuthStatus('authenticated'); // Set authenticated after successful login
//         } catch (error) {
//             console.error('Login failed:', error);
//         }
//     };

//     const walletNames = ['Wallet 1', 'Wallet 2', 'Wallet 3', 'Wallet 4', 'Wallet 5'];

//     return (
//         <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bgg})` }}>
//             {showAnimation && (
//                 <div className="fixed inset-0 z-50 grid grid-cols-8 grid-rows-8 animate-checkerboard">
//                     {[...Array(64)].map((_, index) => (
//                         <div
//                             key={index}
//                             className={`w-full h-full ${index % 2 === (Math.floor(index / 8) % 2) ? 'bg-red-600' : 'bg-black'}`}
//                         ></div>
//                     ))}
//                 </div>
//             )}

//             <div className="absolute top-4 left-4 flex gap-4">
//                 <Settings className="w-8 h-8 text-gray-300" />
//                 <FileText className="w-8 h-8 text-gray-300" />
//             </div>

//             <div className="min-h-screen flex items-center justify-center px-4 backdrop-blur-sm">
//                 <div className="flex gap-4 max-w-2xl w-full">
//                     <div className="bg-gray-900/90 p-8 rounded-lg border-2 border-red-600 shadow-lg flex-1">
//                         <h1 className="text-4xl font-bold mb-8 text-amber-500 font-mono">Login</h1>
//                         <div className="space-y-6">
//                             <div>
//                                 <label className="block text-white mb-2 text-sm">Email</label>
//                                 <input
//                                     type="text"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     className="w-full px-4 py-2 bg-black border border-red-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                                 />
//                             </div>
//                             <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono">
//                                 Login
//                             </button>
//                             <div className="flex flex-col gap-4">
//                                 <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleLogin()}>
//                                     MetaMask Wallet
//                                 </button>
//                                 <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleLogin()}>
//                                     CoinBase Wallet
//                                 </button>
//                                 <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded border-2 border-red-600 font-mono" onClick={() => handleLogin()}>
//                                     Rainbow Wallet
//                                 </button>
//                                 <button
//                                     className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
//                                     onClick={handleLogin}
//                                 >
//                                     Log in
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="bg-gray-900/90 p-8 rounded-lg border-2 border-red-600 shadow-lg">
//                         <h2 className="text-2xl font-bold mb-6 text-amber-500 font-mono">Or use</h2>
//                         <div className="space-y-4">
//                             {walletNames.map((name) => (
//                                 <WalletToggle key={name} name={name} isEnabled={!!toggles[name]} onToggle={() => handleToggle(name)} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="absolute bottom-0 w-full bg-gray-900/90 border-t-2 border-red-600 p-6">
//                 <p className="text-white text-2xl font-mono text-center">
//                     Log in or create an account to start. No email required!
//                 </p>
//             </div>

//             <style>{`
//                 @keyframes checkerboard {
//                     0% { opacity: 1; transform: scale(1); }
//                     100% { opacity: 0; transform: scale(1.2); }
//                 }
//                 .animate-checkerboard {
//                     animation: checkerboard 2s ease-out forwards;
//                 }
//             `}</style>
//         </div>
//     );
// }
