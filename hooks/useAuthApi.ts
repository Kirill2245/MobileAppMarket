import { authApi } from '@/api/endpoints/auth';
import { useState } from 'react';
import { LoginDto, User } from '../api/types/auth.types';

interface UseAuthReturn {
  user: User | null;
  loading: boolean;
  error: string | null;
  twoFactorRequired: boolean;
  login: (data: LoginDto) => Promise<User>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  clearError: () => void;
}

export const useAuthApi = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [twoFactorRequired, setTwoFactorRequired] = useState(false);

  const clearError = () => setError(null);

  const login = async (data: LoginDto): Promise<User> => {
    setLoading(true);
    setError(null);
    setTwoFactorRequired(false);

    try {
      const response = await authApi.login(data);
      
      // Если есть message и нет user - значит требуется 2FA
      if (response.message && !response.user) {
        setTwoFactorRequired(true);
        throw new Error(response.message);
      }
      
      // Успешный вход
      if (response.user) {
        setUser(response.user);
        setTwoFactorRequired(false);
        return response.user;
      }
      
      throw new Error('Unknown response from server');
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Login failed';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await authApi.logout();
      setUser(null);
      setTwoFactorRequired(false);
    } catch (err: any) {
      console.error('Logout error:', err);
    } finally {
      setLoading(false);
    }
  };

  const checkAuth = async () => {
    setLoading(true);
    try {
      const userData = await authApi.getMe();
      setUser(userData);
    } catch (err: any) {
      // 401 - не авторизован, это нормально
      if (err.response?.status !== 401) {
        console.error('Check auth error:', err);
      }
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    twoFactorRequired,
    login,
    logout,
    checkAuth,
    clearError,
  };
};