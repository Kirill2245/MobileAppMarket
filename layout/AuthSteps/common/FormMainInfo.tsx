import StyledCheckBox from "@/components/StyledCheckBox";
import StyledInputLable from "@/components/StyledInputLable";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { getPasswordStrength } from "@/helpers/passwordHelpers";
import { Role } from "@/types/role.enum";
import { Ionicons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

interface FormMainInfoProps {
    role: Role;
    formData: {
        firstName: string;
        lastName:string;
        middleName:string;
        displayName?:string;
        email: string;
        password: string;
        passwordReapeat:string;
        role: Role;
    };
    setFormData: React.Dispatch<React.SetStateAction<{
        firstName: string,
        lastName:string,
        middleName:string,
        email: string;
        password: string;
        passwordReapeat:string;
        role: Role;
        displayName?:string;
    }>>;
}

// Типы надежности пароля


const FormMainInfo: React.FC<FormMainInfoProps> = ({ role, formData, setFormData  }) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const [onPassword, setOnPassword] = useState<string>('');
    const [isChecked, setIsChecked] = useState(false);
    
    // Мемоизируем надежность пароля для оптимизации
    const passwordStrength = useMemo(() => getPasswordStrength(formData.password), [formData.password]);

    const updateField = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    return (
        <View style={styles.form}>
            <StyledInputLable 
                customLable="Полное имя" 
                placeholder="Иван Иванов" 
                inputContainerStyle={{ backgroundColor: COLORS.SVG_BG }}
                onChangeText={(text) => {
                    // Разделяем текст по пробелам и фильтруем пустые строки
                    const parts = text.trim().split(' ').filter(part => part.length > 0);
                    if (parts.length === 1){
                        updateField('firstName', parts[0]);
                    }
                    else{
                        if (parts.length >= 1) {
                            updateField('firstName', parts[1]);
                        } else {
                            updateField('firstName', '');
                        }
                        
                        if (parts.length >= 2) {
                            updateField('lastName', parts[0]);
                        } else {
                            updateField('lastName', '');
                        }
                        
                        if (parts.length >= 3) {
                            updateField('middleName', parts[2]);
                        } else {
                            updateField('middleName', '');
                        }
                    }
                    
                }}
            />
            {role === Role.MASTER && <StyledInputLable 
                customLable="Отображаемое имя(опционально)" 
                placeholder="ivanov_design"
                inputContainerStyle={{ backgroundColor: COLORS.SVG_BG }}
                onChangeText={(text) => updateField('email', text)}
            />}
            <StyledInputLable 
                customLable="Email" 
                placeholder="ivan@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                inputContainerStyle={{ backgroundColor: COLORS.SVG_BG }}
                onChangeText={(text) => updateField('email', text)}
            />
            <View>
                <StyledInputLable 
                    customLable="Пароль"
                    placeholder="Минимум 8 символов" 
                    secureTextEntry={!isShowPassword}
                    value={formData.password}
                    // onChangeText={setOnPassword}
                    onChangeText={(text) => updateField('password', text)}
                    inputContainerStyle={{ backgroundColor: COLORS.SVG_BG }}
                    rightIcon={
                        <Ionicons
                            name={isShowPassword ? "eye-outline" : "eye-off-outline"}
                            size={24} 
                            color={COLORS.PRIMARY_PLACEHOLDER}
                            onPress={() => setIsShowPassword(!isShowPassword)}
                        />
                    }
                />
                {/* Индикатор надежности пароля */}
                {formData.password.length > 0 && (
                    <View style={styles.strengthWrapper}>
                        <PasswordStrengthIndicator strength={passwordStrength} />
                        <StyledText 
                            variant="subtitle-grey" 
                            size="ower-small" 
                            style={styles.strengthText}
                        >
                            {passwordStrength === 'weak' && 'Слабый'}
                            {passwordStrength === 'medium' && 'Средний'}
                            {passwordStrength === 'strong' && 'Хороший'}
                        </StyledText>
                    </View>
                )}
                {formData.password.length > 0 && <StyledInputLable 
                    customLable="Подтвердите пароль"
                    placeholder="" 
                    secureTextEntry={!isShowPassword}
                    value={formData.passwordReapeat}
                    // onChangeText={setOnPassword}
                    onChangeText={(text) => updateField('passwordReapeat', text)}
                    inputContainerStyle={{ backgroundColor: COLORS.SVG_BG }}
                    rightIcon={
                        <Ionicons
                            name={isShowPassword ? "eye-outline" : "eye-off-outline"}
                            size={24} 
                            color={COLORS.PRIMARY_PLACEHOLDER}
                            onPress={() => setIsShowPassword(!isShowPassword)}
                        />
                    }
                />}
                
            </View>
            <View style={styles.contain}>
                <StyledCheckBox checked={isChecked} onCheck={() => setIsChecked(!isChecked)} />
                <StyledText variant="subtitle-grey" size="ower-small" style={{ width: 326 }}>
                    Я принимаю <StyledText variant="title" size="ower-small" style={{ textDecorationLine: 'underline' }}>
                        Условия использования
                    </StyledText> и <StyledText variant="title" size="ower-small" style={{ textDecorationLine: 'underline' }}>
                        Политику конфиденциальности
                    </StyledText>
                </StyledText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flex: 1,
        gap: 16,
        marginBottom: 24
    },
    contain: {
        flexDirection: 'row',
        gap: 12
    },
    strengthWrapper: {
        marginTop: 8,
    },
    strengthText: {
        marginTop: 4,
    }
});

export default FormMainInfo;