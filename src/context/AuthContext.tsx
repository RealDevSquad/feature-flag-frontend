import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContextType } from '../types/auth';
import { User } from '../types/user';
import { fetchUserProfile, signOut } from '../services/api';
import {
  AUTHENTICATION_FAILED_MESSAGE,
  SIGN_OUT_FAILED_MESSAGE,
  USE_AUTH_ERROR_MESSAGE,
} from '../constants/appConstants';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const userProfile = await fetchUserProfile();
        setUser(userProfile);
      } catch (err) {
        setError(AUTHENTICATION_FAILED_MESSAGE);
        console.error('Authentication error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const signout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (err) {
      setError(SIGN_OUT_FAILED_MESSAGE);
      console.error('Sign out error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, setUser, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(USE_AUTH_ERROR_MESSAGE);
  }
  return context;
};
