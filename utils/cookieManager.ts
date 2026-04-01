// src/utils/cookieManager.ts
import CookieManager from '@react-native-cookies/cookies';
import { Platform } from 'react-native';

export const setupCookies = async (url: string) => {
  try {
    if (Platform.OS === 'android') {
      // Для Android нужно настроить домен
      await CookieManager.set(url, {
        name: 'session',
        value: '',
        domain: '10.0.2.2',
        path: '/',
        version: '1',
        secure: false,
      });
    }
    console.log('Cookies setup completed');
  } catch (error) {
    console.error('Failed to setup cookies:', error);
  }
};

export const getCookies = async (url: string) => {
  try {
    const cookies = await CookieManager.get(url);
    console.log('Current cookies:', cookies);
    return cookies;
  } catch (error) {
    console.error('Failed to get cookies:', error);
  }
};

export const clearCookies = async () => {
  try {
    await CookieManager.clearAll();
    console.log('All cookies cleared');
  } catch (error) {
    console.error('Failed to clear cookies:', error);
  }
};