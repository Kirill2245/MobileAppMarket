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
    role: Role
}

// Типы надежности пароля


const FormMainInfo: React.FC<FormMainInfoProps> = ({ role }) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const [onPassword, setOnPassword] = useState<string>('');
    const [isChecked, setIsChecked] = useState(false);
    
    // Мемоизируем надежность пароля для оптимизации
    const passwordStrength = useMemo(() => getPasswordStrength(onPassword), [onPassword]);

    return (
        <View style={styles.form}>
            <StyledInputLable 
                customLable="Полное имя" 
                placeholder="Иван Иванов" 
                inputContainerStyle={{ backgroundColor: COLORS.SVG_BG }}
            />
            {role === Role.MASTER && <StyledInputLable 
                customLable="Отображаемое имя(опционально)" 
                placeholder="ivanov_design"
                inputContainerStyle={{ backgroundColor: COLORS.SVG_BG }}
            />}
            <StyledInputLable 
                customLable="Email" 
                placeholder="ivan@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                inputContainerStyle={{ backgroundColor: COLORS.SVG_BG }}
            />
            <View>
                <StyledInputLable 
                    customLable="Пароль"
                    placeholder="Минимум 8 символов" 
                    secureTextEntry={!isShowPassword}
                    value={onPassword}
                    onChangeText={setOnPassword}
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
                {onPassword.length > 0 && (
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