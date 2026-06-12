import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';

const AuthContext = createContext(null);

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

export function AuthProvider({ children }) {
  const { isLoaded: isClerkLoaded, isSignedIn, getToken } = useAuth();
  const { user: clerkUser } = useUser();
  const [dbUser, setDbUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sync Clerk user with MongoDB backend
  const syncUserData = async () => {
    if (!isSignedIn || !clerkUser) return null;

    try {
      setLoading(true);
      setError(null);
      const token = await getToken();
      
      const response = await fetch(`${API_BASE_URL}/auth/sync-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          firstName: clerkUser.firstName || '',
          lastName: clerkUser.lastName || '',
          email: clerkUser.primaryEmailAddress?.emailAddress || '',
          imageUrl: clerkUser.imageUrl || ''
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || `Failed to sync user: ${response.status}`);
      }

      const result = await response.json();
      const userData = result.data;
      setDbUser(userData);
      return userData;
    } catch (err) {
      console.error('Error syncing user data:', err);
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Fetch current user profile from MongoDB backend
  const fetchUserData = async () => {
    if (!isSignedIn) return null;

    try {
      setError(null);
      const token = await getToken();
      
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || `Failed to fetch user data: ${response.status}`);
      }

      const result = await response.json();
      const userData = result.data;
      setDbUser(userData);
      return userData;
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError(err.message);
      return null;
    }
  };

  // Sync user profile on mount / auth state change
  useEffect(() => {
    if (!isClerkLoaded) {
      setLoading(true);
      return;
    }

    if (!isSignedIn) {
      setDbUser(null);
      setLoading(false);
      setError(null);
      return;
    }

    // Call syncUserData when signed in
    syncUserData();
  }, [
    isClerkLoaded,
    isSignedIn,
    clerkUser?.id,
    clerkUser?.firstName,
    clerkUser?.lastName,
    clerkUser?.imageUrl,
    clerkUser?.primaryEmailAddress?.emailAddress
  ]);

  const value = {
    dbUser,
    loading: !isClerkLoaded || loading,
    error,
    syncUserData,
    fetchUserData
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthStore() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthStore must be used within an AuthProvider');
  }
  return context;
}

export function useAuthContext() {
  return useAuthStore();
}
