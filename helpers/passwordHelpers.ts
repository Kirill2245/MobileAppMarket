type PasswordStrength = 'weak' | 'medium' | 'strong';
 export const getPasswordStrength = (password: string): PasswordStrength => {
    if (!password) return 'weak';
    
    let score = 0;
    
    // Минимум 8 символов
    if (password.length >= 8) score++;
    // Содержит цифры
    if (/\d/.test(password)) score++;
    // Содержит буквы в разных регистрах или спецсимволы
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;
    
    // Возвращаем надежность на основе набранных баллов
    if (score <= 1) return 'weak';
    if (score <= 3) return 'medium';
    return 'strong';
};