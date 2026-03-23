import StyledCheckBox from "@/components/StyledCheckBox";
import StyledInputLable from "@/components/StyledInputLable";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { Role } from "@/types/role.enum";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

interface FormMainInfoProps{
    role:Role
}
const FormMainInfo:React.FC<FormMainInfoProps> = ({role}) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const [onPassword, setOnPassword] = useState<string>('')
    const [isChecked, setIsChecked] = useState(false)
    return (
        <View style = {styles.form}>
            <StyledInputLable 
                customLable="Полное имя" 
                placeholder="Иван Иванов" 
                inputContainerStyle = {{backgroundColor:COLORS.PRIMARY_BORDER_GREY}}
            />
            {role === Role.MASTER && <StyledInputLable 
                customLable="Отображаемое имя(опционально)" 
                placeholder="ivanov_design"
                inputContainerStyle = {{backgroundColor:COLORS.PRIMARY_BORDER_GREY}}
            /> }
            <StyledInputLable 
                customLable="Email" 
                placeholder="ivan@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                inputContainerStyle = {{backgroundColor:COLORS.PRIMARY_BORDER_GREY}}
            />
            <StyledInputLable 
                customLable = "Пароль"
                placeholder = "Минимум 8 символов" 
                secureTextEntry = {!isShowPassword}
                value={onPassword}
                onChangeText={setOnPassword}
                inputContainerStyle = {{backgroundColor:COLORS.PRIMARY_BORDER_GREY}}
                rightIcon = {
                    <Ionicons
                        name={isShowPassword ? "eye-outline":"eye-off-outline"}
                        size={24} 
                        color={COLORS.PRIMARY_PLACEHOLDER}
                        onPress={() => setIsShowPassword(!isShowPassword)}
                    />
                }
                
            />
            <View style = {styles.contain}>
                <StyledCheckBox checked = {isChecked} onCheck={() => setIsChecked(!isChecked)}/>
                <StyledText variant="subtitle-grey" size="ower-small" style = {{width:326}}>
                    Я принимаю <StyledText variant="title" size="ower-small" style = {{textDecorationLine:'underline'}}>
                        Условия использования
                    </StyledText> и <StyledText variant="title" size="ower-small" style = {{textDecorationLine:'underline'}}>
                        Политику конфиденциальности
                    </StyledText>
                </StyledText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    form:{
        flex:1,
        gap:16,
        marginBottom:24
    },
    contain:{
        flexDirection:'row',
        gap:12
    }
});

export default FormMainInfo