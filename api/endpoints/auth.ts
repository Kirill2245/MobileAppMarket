import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { API_ENDPOINTS } from '../../config/api.config';
import { apiClient } from '../client';
import { LoginDto, LoginResponse, RegisterDto, RegistrResponse } from '../types/auth.types';
class AuthApi {

  async login(data: LoginDto): Promise<LoginResponse> {
    try{
      const response = await apiClient.post<LoginResponse>(
        API_ENDPOINTS.AUTH.LOGIN,
        data
      );
      return response;
    }catch(err){
      throw err
    }

  }

  async register(data: RegisterDto): Promise<RegistrResponse> {
      try {
          console.log('📤 Register request data:', JSON.stringify(data, null, 2));
          
          const response = await apiClient.post<RegistrResponse>(
              API_ENDPOINTS.AUTH.REGISTER,
              data
          );
          
          console.log('✅ Register success:', response);
          return response;
          
      } catch (error: any) {
          console.error('❌ Register error caught in service');
        
          let errorMessage = 'Произошла ошибка при регистрации';
          
          if (error.response) {

              const serverData = error.response.data;
              
              if (serverData.message) {
                  if (Array.isArray(serverData.message)) {

                      errorMessage = serverData.message.join('\n');
                  } else {

                      errorMessage = serverData.message;
                  }
              } else if (serverData.error) {
                  errorMessage = serverData.error;
              }
              
              console.log('📋 Server error details:', {
                  status: error.response.status,
                  message: errorMessage
              });
          } else if (error.request) {

              errorMessage = 'Нет соединения с сервером. Проверьте интернет-соединение.';
              console.log('🌐 Network error:', error.message);
          } else {

              errorMessage = error.message || 'Неизвестная ошибка';
          }
          
          const enhancedError: any = new Error(errorMessage);
          enhancedError.originalError = error;
          enhancedError.statusCode = error.response?.status;
          enhancedError.serverData = error.response?.data;
          
          throw enhancedError;
      }
  }

  async getOAuthUrl(method: string): Promise<string> {
      try {
          // Добавляем заголовок, чтобы сервер знал, что это мобильное приложение
          const response = await apiClient.get<{ url: string }>(
              `${API_ENDPOINTS.AUTH.OAUTH_CONNECT}/${method}`,
              {
                  headers: {
                      'X-Mobile-App': 'true'
                  }
              }
          );
          return response.url;
      } catch (err) {
          console.error('Error getting OAuth URL:', err);
          throw err;
      }
    }

    async oAuthLogin(method: string): Promise<any> {
        try {
            const authUrl = await this.getOAuthUrl(method);
            console.log('Opening OAuth URL:', authUrl);

            // Используем кастомную схему для возврата
            const redirectUri = Linking.createURL('auth/callback');
            console.log('Redirect URI:', redirectUri);

            const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUri);
            console.log('Browser result:', result);

            if (result.type === 'success') {
                // Извлекаем код и провайдера из URL
                const { queryParams } = Linking.parse(result.url);
                const code = queryParams?.code as string;
                const provider = queryParams?.provider as string;
                
                console.log('Extracted code:', code);
                console.log('Provider:', provider);
                
                if (code && provider) {
                    // Отправляем код на сервер для получения токена
                    return await this.exchangeCodeForToken(provider, code);
                }
            } else if (result.type === 'cancel') {
                throw new Error('Авторизация была отменена');
            }

            throw new Error('Не удалось получить код авторизации');
        } catch (err) {
            console.error('OAuth login error:', err);
            throw err;
        }
    }

    async exchangeCodeForToken(method: string, code: string): Promise<any> {
        try {
            const response = await apiClient.post(
                `${API_ENDPOINTS.AUTH.OAUTH_CALLBACK}/${method}`,
                { code }
            );
            return response;
        } catch (err) {
            console.error('Error exchanging code for token:', err);
            throw err;
        }
    }
  /**
   * Получение текущего пользователя (проверка сессии)
   */
  async getMe(): Promise<any> {
    const response = await apiClient.get<any>(API_ENDPOINTS.AUTH.ME);
    if (!response) {
      console.log('❌ getMe: response is undefined');
      throw new Error('Response is undefined');
    }
    return response;
  }

  /**
   * Выход из системы
   */
  async logout(): Promise<void> {
    await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
  }


}

export const authApi = new AuthApi();