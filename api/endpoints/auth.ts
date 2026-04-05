import { API_ENDPOINTS } from '../../config/api.config';
import { apiClient } from '../client';
import { LoginDto, LoginResponse, RegisterDto, RegistrResponse } from '../types/auth.types';

class AuthApi {
  /**
   * Вход в систему
   * @param data - данные для входа (email, password, optional code)
   * @returns Promise с данными пользователя или сообщением о 2FA
   */
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