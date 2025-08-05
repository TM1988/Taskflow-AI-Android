// Type definitions for Firebase modules
declare module 'firebase/app' {
  import { FirebaseApp, FirebaseOptions } from 'firebase/app';
  
  export function initializeApp(options: FirebaseOptions): FirebaseApp;
  // Add other exports as needed
}

declare module 'firebase/auth' {
  import { Auth } from 'firebase/auth';
  
  export function getAuth(app?: any): Auth;
  // Add other exports as needed
}

declare module 'firebase/firestore' {
  import { Firestore } from 'firebase/firestore';
  
  export function getFirestore(app?: any): Firestore;
  // Add other exports as needed
}
