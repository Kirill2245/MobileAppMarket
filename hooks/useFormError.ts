// hooks/useApiError.ts
import { useToast } from '@/context/ToastContext';
import { logError, parseServerError } from '../utils/error-handler';

export const useApiError = () => {
    const { showToast } = useToast();

    const handleApiError = (error: any, context?: string) => {
        logError(error, context);
        const parsedError = parseServerError(error);
        
        if (parsedError.general) {
            showToast(parsedError.general, 'error');
        } else if (Object.keys(parsedError.fields).length > 0) {
            // Показываем первую ошибку валидации
            const firstError = Object.values(parsedError.fields)[0];
            showToast(firstError, 'error');
        }
        
        return parsedError;
    };

    const showSuccess = (message: string) => {
        showToast(message, 'success');
    };

    const showInfo = (message: string) => {
        showToast(message, 'info');
    };

    const showWarning = (message: string) => {
        showToast(message, 'warning');
    };

    return {
        handleApiError,
        showSuccess,
        showInfo,
        showWarning,
    };
};