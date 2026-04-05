// components/Toast.tsx
import { COLORS } from '@/constants/color.const';
import { useTimeout } from '@/hooks/useTimeout';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

export type ToastType = 'error' | 'success' | 'info' | 'warning';

interface ToastProps {
    visible: boolean;
    message: string;
    type?: ToastType;
    duration?: number;
    onHide: () => void;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const Toast: React.FC<ToastProps> = ({
    visible,
    message,
    type = 'error',
    duration = 3000,
    onHide,
    position = 'top-right',
}) => {
    const translateX = useRef(new Animated.Value(500)).current;
    const opacity = useRef(new Animated.Value(0)).current;
    const [messageHeight, setMessageHeight] = React.useState(0);

    useTimeout(() => {
        if (visible && duration > 0) {
            onHide();
        }
    }, visible ? duration : null);

    useEffect(() => {
        if (visible) {
            showToast();
        } else {
            hideToast();
        }
    }, [visible]);

    const showToast = () => {
        Animated.parallel([
            Animated.spring(translateX, {
                toValue: 0,
                useNativeDriver: true,
                tension: 50,
                friction: 7,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const hideToast = () => {
        Animated.parallel([
            Animated.timing(translateX, {
                toValue: 500,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const getIconName = () => {
        switch (type) {
            case 'success':
                return 'checkmark-circle';
            case 'error':
                return 'alert-circle';
            case 'warning':
                return 'warning';
            case 'info':
                return 'information-circle';
            default:
                return 'alert-circle';
        }
    };

    const getBackgroundColor = () => {
        switch (type) {
            case 'success':
                return COLORS.SUCCESS || '#4CAF50';
            case 'error':
                return COLORS.ERROR || '#F44336';
            case 'warning':
                return COLORS.WARNING || '#FF9800';
            case 'info':
                return COLORS.INFO || '#2196F3';
            default:
                return COLORS.ERROR || '#F44336';
        }
    };

    const getPositionStyle = () => {
        const positionStyles: any = { position: 'absolute' };
        
        switch (position) {
            case 'top-right':
                positionStyles.top = Platform.OS === 'ios' ? 50 : 40;
                positionStyles.right = 16;
                break;
            case 'top-left':
                positionStyles.top = Platform.OS === 'ios' ? 50 : 40;
                positionStyles.left = 16;
                break;
            case 'bottom-right':
                positionStyles.bottom = 80;
                positionStyles.right = 16;
                break;
            case 'bottom-left':
                positionStyles.bottom = 80;
                positionStyles.left = 16;
                break;
        }
        
        return positionStyles;
    };

    // Ограничиваем максимальную высоту тоста (40% экрана)
    const maxHeight = screenHeight * 0.4;

    if (!visible) return null;

    return (
        <Animated.View
            style={[
                styles.container,
                getPositionStyle(),
                {
                    transform: [{ translateX }],
                    opacity,
                    backgroundColor: getBackgroundColor(),
                },
            ]}
        >
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Ionicons name={getIconName() as any} size={24} color="#FFFFFF" />
                </View>
                <View style={[styles.textContainer, { maxHeight }]}>
                    <Text 
                        style={styles.message}
                        onLayout={(event) => {
                            // Логируем высоту для отладки (опционально)
                            const { height } = event.nativeEvent.layout;
                            setMessageHeight(height);
                        }}
                    >
                        {message}
                    </Text>
                </View>
                <TouchableOpacity onPress={onHide} style={styles.closeButton}>
                    <Ionicons name="close" size={20} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        maxWidth: 350,
        minWidth: 250,
        backgroundColor: '#F44336',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        zIndex: 9999,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Изменено на flex-start для лучшего выравнивания при многострочном тексте
        gap: 12,
    },
    iconContainer: {
        paddingTop: 2, // Небольшой отступ для выравнивания с текстом
    },
    textContainer: {
        flex: 1,
        flexShrink: 1, // Позволяет контейнеру сжиматься
    },
    message: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        flexWrap: 'wrap', // Перенос текста
        flexShrink: 1,
    },
    closeButton: {
        padding: 4,
        alignSelf: 'flex-start', // Выравнивание кнопки по верхнему краю
    },
});

export default Toast;