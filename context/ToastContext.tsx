
import React, { createContext, useCallback, useContext, useState } from 'react';
import Toast, { ToastType } from '../components/Toast';

interface ToastContextType {
    showToast: (message: string, type?: ToastType, duration?: number) => void;
    hideToast: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    return context;
};

interface ToastProviderProps {
    children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState<ToastType>('error');
    const [duration, setDuration] = useState(3000);

    const showToast = useCallback((msg: string, toastType: ToastType = 'error', toastDuration = 3000) => {
        setMessage(msg);
        setType(toastType);
        setDuration(toastDuration);
        setVisible(true);
    }, []);

    const hideToast = useCallback(() => {
        setVisible(false);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast, hideToast }}>
            {children}
            <Toast
                visible={visible}
                message={message}
                type={type}
                duration={duration}
                onHide={hideToast}
                position="top-right"
            />
        </ToastContext.Provider>
    );
};