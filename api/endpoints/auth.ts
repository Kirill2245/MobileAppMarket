import { API_ENDPOINTS } from '../../config/api.config';
import { apiClient } from '../client';
import { LoginDto, LoginResponse } from '../types/auth.types';

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