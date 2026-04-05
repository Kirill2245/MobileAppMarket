// hooks/useFormError.ts
import { useCallback, useState } from 'react';
import { logError, parseServerError } from '../utils/error-handler';

export const useFormError = () => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [generalError, setGeneralError] = useState<string | null>(null);

    const handleError = useCallback((error: any, context?: string) => {
        // Логируем ошибку
        logError(error, context);
        
        // Парсим ошибку
        const parsedError = parseServerError(error);
        
        // Устанавливаем ошибки полей
        setErrors(parsedError.fields);
        
        // Устанавливаем общую ошибку
        setGeneralError(parsedError.general || null);
        
        return parsedError;
    }, []);

    const clearErrors = useCallback(() => {
        setErrors({});
        setGeneralError(null);
    }, []);

    const clearFieldError = useCallback((field: string) => {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[field];
            return newErrors;
        });
    }, []);

    return {
        errors,
        generalError,
        handleError,
        clearErrors,
        clearFieldError,
        setErrors,
        setGeneralError,
    };
};