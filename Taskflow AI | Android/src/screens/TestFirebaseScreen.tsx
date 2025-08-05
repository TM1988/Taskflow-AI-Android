import React, { useState } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || ''
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Using require to import the auth module
const firebaseAuth = require('firebase/auth');
// Using type assertion to bypass TypeScript errors
const { signInWithEmailAndPassword } = firebaseAuth as any;

const TestFirebaseScreen = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string>('');

  // Test Firebase Auth
  const testFirebaseAuth = async () => {
    setLoading(true);
    setError('');
    
    const testEmail = 'test@example.com';
    const testPassword = 'test1234';
    
    try {
      // Using the imported signInWithEmailAndPassword function
      const userCredential = await signInWithEmailAndPassword(auth, testEmail, testPassword);
      setUser(userCredential.user);
      console.log('User signed in:', userCredential.user);
      
    } catch (err: any) {
      const errorMessage = err.message || 'An unknown error occurred';
      setError(errorMessage);
      console.error('Firebase auth error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Firebase Test Screen</Text>
      
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={{ alignItems: 'center' }}>
          {user ? (
            <Text style={{ color: 'green', marginBottom: 20 }}>
              Success! User ID: {user.uid}
            </Text>
          ) : (
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: 'red', marginBottom: 20, textAlign: 'center' }}>
                {error || 'Not authenticated'}
              </Text>
              <Button 
                title="Test Firebase Auth" 
                onPress={testFirebaseAuth}
                disabled={loading}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default TestFirebaseScreen;
