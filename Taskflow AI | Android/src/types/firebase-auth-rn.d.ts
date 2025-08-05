// Type definitions for @firebase/auth/react-native

declare module 'firebase/auth/react-native' {
  import { Auth, Persistence } from 'firebase/auth';
  
  export function initializeAuth(
    app: any,
    deps?: {
      persistence?: Persistence[];
      popupRedirectResolver?: any;
    }
  ): Auth;
  
  export function getReactNativePersistence(
    storage: any
  ): Persistence;
}
