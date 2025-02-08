// import { AuthenticationStatus } from '@rainbow-me/rainbowkit'
// import { atom, computed } from 'nanostores'

// export const authStatus = atom<AuthenticationStatus>('unauthenticated')
// export const setAuthStatus = (status: AuthenticationStatus) => authStatus.set(status)
// export const isConnected = computed(authStatus, (status) => status === 'authenticated')

// authStore.js
let authStatus = 'unauthenticated'; // Default status

export const setAuthStatus = (status) => {
    authStatus = status;
    console.log(`Auth Status updated to: ${authStatus}`);
};

export const getAuthStatus = () => authStatus;
