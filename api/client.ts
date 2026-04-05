// services/api-client.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { API_CONFIG } from '../config/api.config';
import { logError } from '../utils/error-handler';

class ApiClient {
  private instance: AxiosInstance;
  private readonly SESSION_KEY = 'session_id';
  
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
        
        const sessionId = await SecureStore.getItemAsync(this.SESSION_KEY);
        if (sessionId) {
          config.headers['X-Session-Id'] = sessionId;
        }
        
        config.headers['X-Mobile-App'] = 'true';
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      async (response) => {
        console.log(`✅ ${response.config.url} - ${response.status}`);
        
        if (response.config.url?.includes('/auth/login') && response.data?.sessionId) {
          await SecureStore.setItemAsync(this.SESSION_KEY, response.data.sessionId);
        }
        
        return response;
      },
      async (error) => {
        // Логируем ошибку
        logError(error, 'API');
        
        if (error.response?.status === 401) {
          await SecureStore.deleteItemAsync(this.SESSION_KEY);
        }
        
        return Promise.reject(error);
      }
    );
  }

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