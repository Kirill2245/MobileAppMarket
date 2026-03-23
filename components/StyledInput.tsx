import { COLORS } from "@/constants/color.const";
import React from "react";
import { StyleSheet } from "react-native";
import { Input, InputProps } from 'react-native-elements';

type StyledInputProps = InputProps & {
    variant?: 'forms-input'|'forms-fill-input'
}

const StyledInput: React.FC<StyledInputProps> = (
    {
        variant,
        rightIcon,
        leftIcon,
        containerStyle,
        inputContainerStyle,
        inputStyle,
        ...props
    }
) => {
    return (
        <Input
            {...props}
            containerStyle={[
                styles.containerBase,
                containerStyle,
            ]}
            leftIcon={leftIcon}
            inputContainerStyle={[
                styles.inputContainerBase,
                inputContainerStyle,
                variant === 'forms-input' ? styles.forms_input : null
            ]}
            inputStyle={[
                styles.inputBase,
                inputStyle
            ]}
            rightIcon={rightIcon}
            placeholderTextColor={COLORS.PRIMARY_PLACEHOLDER}
            underlineColorAndroid="transparent"
        />
    );
};

const styles = StyleSheet.create({
    containerBase: {
        width: '100%',
        paddingHorizontal: 0,
        margin: 0, // Убираем все margin
        padding: 0, // Убираем все padding
        position: 'relative', // Явно указываем относительное позиционирование
    },
    inputContainerBase: {
        width: '100%',
        height: 48, // Фиксированная высота вместо minHeight
        borderWidth: 1,
        borderColor: '#ffffff00',
        borderRadius: 14,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0,
        margin: 0, // Убираем margin
        padding: 0, // Убираем padding
        position: 'relative', // Относительное позиционирование
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputBase: {
        fontSize: 16,
        color: '#000000',
        textDecorationLine: 'none',
        padding: 0, // Убираем внутренние отступы
        margin: 0, // Убираем margin
        flex: 1,
        height: '100%', // Занимает всю высоту
    },
    forms_input: {
        borderWidth: 0.8,
        borderColor: COLORS.PRIMARY_BORDER_GREY
    }
});

export default StyledInput;