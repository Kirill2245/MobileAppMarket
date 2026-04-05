// utils/error-handler.ts
import { AxiosError } from 'axios';

export interface ValidationErrors {
    [key: string]: string;
}

export interface ErrorResponse {
    general?: string;
    fields: ValidationErrors;
    statusCode?: number;
}

export class ApiError extends Error {
    statusCode?: number;
    serverData?: any;
    
    constructor(message: string, statusCode?: number, serverData?: any) {
        super(message);
        this.statusCode = statusCode;
        this.serverData = serverData;
        this.name = 'ApiError';
    }
}

/**
 * Парсит ошибку от сервера и возвращает понятное сообщение
 */
export const parseServerError = (error: any): ErrorResponse => {
    const result: ErrorResponse = {
        fields: {},
    };
    
    // Если ошибка от axios
    if (error.isAxiosError) {
        const axiosError = error as AxiosError;
        
        if (axiosError.response) {
            // Сервер ответил с ошибкой
            const statusCode = axiosError.response.status;
            const serverData = axiosError.response.data as any;
            
            result.statusCode = statusCode;
            
            if (serverData?.message) {
                if (Array.isArray(serverData.message)) {
                    // Валидационные ошибки (массив)
                    result.fields = parseValidationErrors(serverData.message);
                    
                    // Если нет полевых ошибок, показываем первую как общую
                    if (Object.keys(result.fields).length === 0 && serverData.message.length > 0) {
                        result.general = serverData.message[0];
                    }
                } else {
                    // Одиночное сообщение об ошибке
                    result.general = serverData.message;
                }
            } else if (serverData?.error) {
                result.general = serverData.error;
            } else {
                result.general = `Ошибка сервера: ${statusCode}`;
            }
        } else if (axiosError.request) {
            // Нет ответа от сервера
            result.general = 'Нет соединения с сервером. Проверьте интернет-соединение.';
        } else {
            // Ошибка при настройке запроса
            result.general = axiosError.message || 'Произошла неизвестная ошибка';
        }
    } else if (error instanceof Error) {
        // Обычная JavaScript ошибка
        result.general = error.message;
    } else {
        result.general = 'Произошла неизвестная ошибка';
    }
    
    return result;
};

/**
 * Парсит массив валидационных ошибок в объект с ключами полей
 */
export const parseValidationErrors = (messages: string[]): ValidationErrors => {
    const errors: ValidationErrors = {};
    
    messages.forEach((message) => {
        // Сопоставляем сообщения с полями
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('firstName') || lowerMessage.includes('name')) {
            errors.firstName = message;
        } else if (lowerMessage.includes('email')) {
            errors.email = message;
        } else if (lowerMessage.includes('password')) {
            if (lowerMessage.includes('match')) {
                errors.passwordReapeat = message;
            } else {
                errors.password = message;
            }
        } else if (lowerMessage.includes('lastName')) {
            errors.lastName = message;
        } else if (lowerMessage.includes('middleName')) {
            errors.middleName = message;
        } else {
            // Если не можем определить поле, сохраняем как общую ошибку
            if (!errors.general) {
                errors.general = message;
            }
        }
    });
    
    return errors;
};

/**
 * Логирует ошибку в консоль с деталями
 */
export const logError = (error: any, context?: string): void => {
    const prefix = context ? `[${context}]` : '[Error]';
    
    if (error.isAxiosError) {
        const axiosError = error as AxiosError;
        
        if (axiosError.response) {
            console.error(`${prefix} Server Error:`);
            console.error(`   Status: ${axiosError.response.status}`);
            console.error(`   URL: ${axiosError.response.config?.url}`);
            console.error(`   Data:`, axiosError.response.data);
        } else if (axiosError.request) {
            console.error(`${prefix} Network Error:`, axiosError.message);
        } else {
            console.error(`${prefix} Request Error:`, axiosError.message);
        }
    } else {
        console.error(`${prefix}`, error);
    }
};