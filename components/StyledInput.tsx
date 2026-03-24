    import { COLORS } from "@/constants/color.const";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Input, InputProps } from 'react-native-elements';

    type StyledInputProps = InputProps & {
        variant?: 'forms-input' | 'forms-fill-input';
        multiline?: boolean;
        numberOfLines?: number;
        inputContainerStyle?: any; 
    };

    const StyledInput: React.FC<StyledInputProps> = (
        {
            variant,
            rightIcon,
            leftIcon,
            containerStyle,
            inputContainerStyle,
            inputStyle,
            multiline = false,
            numberOfLines = 4,
            placeholder,
            value,
            onChangeText,
            ...props
        }
    ) => {
        const [isFocused, setIsFocused] = useState(false);
        const hasValue = value && value.length > 0;

        if (multiline) {
            return (
                <View style={[
                    styles.containerBase,
                    containerStyle
                ]}>
                    <View style={[
                        styles.multilineContainer,
                        variant === 'forms-input' ? styles.forms_input : null,
                        inputContainerStyle, 
                        isFocused && styles.focusedContainer
                    ]}>
                        {(!hasValue && !isFocused) && (
                            <Text style={styles.floatingPlaceholder}>
                                {placeholder}
                            </Text>
                        )}
                        <TextInput
                            {...props}
                            style={[
                                styles.multilineInput,
                                inputStyle
                            ]}
                            multiline={true}
                            numberOfLines={numberOfLines}
                            textAlignVertical="top"
                            value={value}
                            onChangeText={(text) => {
                                console.log("Input onChangeText вызван:", text); // Добавьте этот лог
                                if (onChangeText) {
                                    onChangeText(text);
                                }
                            }}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholderTextColor={COLORS.PRIMARY_PLACEHOLDER}
                        />
                    </View>
                </View>
            );
        }

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
                placeholder={placeholder} 
                placeholderTextColor={COLORS.PRIMARY_PLACEHOLDER}
                value={value}  // 👈 ДОБАВИТЬ
                onChangeText={onChangeText}
                underlineColorAndroid="transparent"
            />
        );
    };

    const styles = StyleSheet.create({
        containerBase: {
            width: '100%',
            paddingHorizontal: 0,
            margin: 0,
            padding: 0,
            position: 'relative',
        },
        inputContainerBase: {
            width: '100%',
            height: 48,
            borderWidth: 1,
            borderColor: '#ffffff00',
            borderRadius: 14,
            paddingHorizontal: 16,
            backgroundColor: '#FFFFFF',
            borderBottomWidth: 0,
            margin: 0,
            padding: 0,
            position: 'relative',
            flexDirection: 'row',
            alignItems: 'center',
        },
        inputBase: {
            fontSize: 16,
            color: '#000000',
            textDecorationLine: 'none',
            padding: 0,
            margin: 0,
            flex: 1,
            height: '100%',
        },
        forms_input: {
            borderWidth: 0.8,
            borderColor: COLORS.PRIMARY_BORDER_GREY,
        },

        multilineContainer: {
            width: '100%',
            minHeight: 100,
            borderRadius: 14,
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 16,
            paddingTop: 12,
            paddingBottom: 12,
            position: 'relative',
            justifyContent: 'flex-start',
        },
        focusedContainer: {
            borderColor: COLORS.PRIMARY_BORDER_GREY,
            borderWidth: 1,
        },
        multilineInput: {
            fontSize: 16,
            color: '#000000',
            padding: 0,
            margin: 0,
            minHeight: 80,
            textAlignVertical: 'top',
        },
        floatingPlaceholder: {
            position: 'absolute',
            left: 16,
            top: 12,
            fontSize: 16,
            color: COLORS.PRIMARY_PLACEHOLDER,
            backgroundColor: 'transparent',
            zIndex: 1,
        },
    });

    export default StyledInput;