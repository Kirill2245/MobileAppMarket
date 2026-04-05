import { Platform } from 'react-native';

const getBaseUrl = (): string => {
  if (__DEV__) {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:80/api'; // Android эмулятор
    }
    return 'http://localhost:80/api'; // iOS симулятор
  }
  return 'https://your-api-domain.com/api';
};

export const API_CONFIG = {
  baseURL: getBaseUrl(),
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER:'/auth/register',
    ME: '/user-profile/my-profile',
  },
  USER: {
    PROFILE: '/user-profile',
    TEST: '/user-profile/test',
  },
};