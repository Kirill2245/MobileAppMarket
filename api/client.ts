import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { API_CONFIG } from '../config/api.config';
class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API_CONFIG.baseURL,
      timeout: API_CONFIG.timeout,
      headers: API_CONFIG.headers,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(
      async (config) => {
        console.log(`📡 ${config.method?.toUpperCase()} ${config.url}`);
        
        // Получаем userId из безопасного хранилища
        const userId = await SecureStore.getItemAsync('user_id');
        if (userId) {
          // Добавляем userId в заголовок X-User-Id
          config.headers['X-User-Id'] = userId;
          console.log('🔑 User ID added to request headers');
        }
        
        // Добавляем заголовок, указывающий что это мобильное приложение
        config.headers['X-Mobile-App'] = 'true';
        
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      async (response) => {
        console.log(`✅ ${response.config.url} - ${response.status}`);
        
        // Сохраняем userId ТОЛЬКО если это логин
        if (response.config.url?.includes('/auth/login') && response.data?.id) {
          await SecureStore.setItemAsync('user_id', response.data.id);
          console.log('🔒 User ID saved from login:', response.data.id);
        }
        
        return response;
      },
      async (error) => {
        if (error.response?.status === 401) {
          await SecureStore.deleteItemAsync('user_id');
          console.log('🗑️ User ID cleared due to 401');
        }
        return Promise.reject(error);
      }
    );
  }

  // Generic методы
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.get(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.post(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.put(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.delete(url, config);
    return response.data;
  }
}

export const apiClient = new ApiClient();