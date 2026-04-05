import { authApi } from '@/api/endpoints/auth';
import { LoginDto, User } from '@/api/types/auth.types';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthUser: boolean;
  login: (dto:LoginDto) => Promise<User>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  setOAuth: (user:User) => void
}

// Создаем контекст с дефолтными значениями
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthUser, setIsAuthUser] = useState<boolean>(false);

  // Проверка авторизации при загрузке
  const checkAuth = async () => {
    console.log('🔍 checkAuth started');
    try {
      setLoading(true);
      setUser(null)
      const userData = await authApi.getMe();
      
      if (userData && userData.email) {
        setUser(userData);
        setIsAuthUser(true);
        console.log('✅ isAuthUser set to TRUE', userData);
      } else {
        console.log('❌ Invalid user data');
        setUser(null);
        setIsAuthUser(false);
      }
    } catch (error) {
      console.log('❌ checkAuth error:', error);
      setUser(null);
      setIsAuthUser(false);
    } finally {
      setLoading(false);
    }
  };

  const setOAuth = (user:User) => {
    setUser(user)
    setIsAuthUser(true)
  }

  // Вход
  const login = async (dto:LoginDto): Promise<User> => {
    try {
      setLoading(true);
      const response = await authApi.login(dto);
      
      if (response.user) {
        setUser(response.user);
        setIsAuthUser(true);
        return response.user;
      }
      
      throw new Error(response.message || 'Login failed');
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Выход
  const logout = async () => {
    try {
      setLoading(true);
      await authApi.logout();
      setUser(null);
      setIsAuthUser(false);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Проверяем авторизацию при монтировании
  useEffect(() => {
    checkAuth();
  }, []);

  const value: AuthContextType = {
    user,
    loading,
    isAuthUser,
    login,
    logout,
    checkAuth,
    setOAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};