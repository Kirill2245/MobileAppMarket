// utils/globalErrorHandler.ts
import { Alert } from 'react-native';
import { parseServerError } from './error-handler';

let globalToastCallback: ((message: string, type?: 'error' | 'success' | 'info' | 'warning') => void) | null = null;

export const setGlobalToastCallback = (callback: typeof globalToastCallback) => {
    globalToastCallback = callback;
};

export const handleGlobalError = (error: any, context?: string) => {
    const parsedError = parseServerError(error);
    const errorMessage = parsedError.general || 'Произошла неизвестная ошибка';
    
    console.error(`[${context || 'Global Error'}]`, error);
    
    // Показываем Toast уведомление
    if (globalToastCallback) {
        globalToastCallback(errorMessage, 'error');
    } else {
        // Fallback на Alert если Toast еще не инициализирован
        Alert.alert('Ошибка', errorMessage);
    }
    
    return parsedError;
};

// Перехват необработанных Promise ошибок для React Native
export const setupGlobalErrorHandlers = () => {
    // Перехват необработанных Promise rejections в React Native
    if (typeof ErrorUtils !== 'undefined') {
        const originalErrorHandler = ErrorUtils.getGlobalHandler();
        
        ErrorUtils.setGlobalHandler((error, isFatal) => {
            console.error('Global error handler caught:', error);
            handleGlobalError(error, 'Unhandled Error');
            
            // Вызываем оригинальный обработчик если нужно
            if (originalErrorHandler) {
                originalErrorHandler(error, isFatal);
            }
        });
    }
    
    // Перехват Promise rejection (для React Native)
    const rejectionHandler = (event: any) => {
        if (event && event.reason) {
            handleGlobalError(event.reason, 'Unhandled Promise Rejection');
        }
    };
    
    // Для React Native используем глобальный обработчик
    if (typeof global !== 'undefined') {
        // @ts-ignore
        if (!global.HermesInternal) {
            // @ts-ignore
            global.addEventListener?.('unhandledrejection', rejectionHandler);
        }
    }
    
    // Перехват ошибок в консоли (только для development)
    if (__DEV__) {
        const originalError = console.error;
        console.error = (...args) => {
            originalError(...args);
            // Не показываем Toast для каждой ошибки в dev режиме
            const firstArg = args[0];
            if (firstArg && typeof firstArg === 'string') {
                if (firstArg.includes('Warning:') || firstArg.includes('Warning:')) {
                    return;
                }
            }
        };
    }
};

// Обработка ошибок React Native компонентов
export const handleComponentError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Component Error:', error);
    console.error('Component Error Info:', errorInfo);
    handleGlobalError(error, 'Component Error');
};