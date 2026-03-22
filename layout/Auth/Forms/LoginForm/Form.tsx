import StyledButton from "@/components/StyledButton";
import StyledInputLable from "@/components/StyledInputLable";
import { COLORS } from "@/constants/color.const";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const Form = () => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const [onPassword, setOnPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('');
    return (
        <View style={styles.form}>
            <View style={styles.inputContain}>
                <StyledInputLable
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                
                <StyledInputLable
                    placeholder="Пароль"
                    value={onPassword}
                    onChangeText={setOnPassword}
                    secureTextEntry={!isShowPassword}
                    rightIcon={
                        <Ionicons
                            name={isShowPassword ? "eye-outline" : "eye-off-outline"}
                            size={22}
                            color={COLORS.ICON_GREY_COLOR}
                            onPress={() => setIsShowPassword(!isShowPassword)}
                        />
                    }
                />
            </View>
            <View style = {styles.contain}>
                <StyledButton variant="txt-btn" lable="Забыли пароль?" variantText="blue-btn-text" style = {{width:144}}/>
            </View>
            <StyledButton lable="Войти" variant="forms-btn" />
            
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        width: '100%',
        backgroundColor: 'transparent'
    },
    inputContain: {
        width: '100%',
        flexDirection: 'column', // Явно указываем колонку
        gap:16,
        marginBottom:18.4
    },
    contain:{
        width:'100%',
        justifyContent:'flex-end',
        flexDirection:'row',
        marginBottom:16
    }
})

export default Form;