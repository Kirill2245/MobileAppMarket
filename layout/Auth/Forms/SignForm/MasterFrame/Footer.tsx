import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import React from "react";
import { StyleSheet, View } from "react-native";

interface FooterProps {
    onSwitchToLogin: () => void;
    onOpenSignUp:() => void;
}
const Footer:React.FC<FooterProps> = ({onSwitchToLogin, onOpenSignUp}) => {
    return (
        <View style = {styles.footer}>
            <StyledButton lable="Начать регистрацию" variant="forms-btn" onPress={onOpenSignUp}/>
            <View style = {styles.contain}>
                <StyledText variant="subtitle-grey" size="small">Уже есть аккаунт?</StyledText>
                <StyledButton lable="Войти" variant="txt-btn" style = {{minHeight:21}} sizeText="small" onPress={onSwitchToLogin}/>
            </View>
            <View style = {styles.textBox}>
                <StyledText variant="subtitle-grey" size="ower-small" style = {{textAlign:'center'}}>
                    Регистрируясь, вы соглашаетесь с <StyledText variant="title" size="ower-small" style = {{textDecorationLine:'underline'}}>
                        Условиями использования
                    </StyledText> и <StyledText variant="title" size="ower-small" style = {{textDecorationLine:'underline'}}>
                        Политикой конфиденциальности
                    </StyledText>
                </StyledText>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footer:{
        marginTop:48
    },
    contain:{
        flexDirection:'row',
        justifyContent:'center',
        gap:4,
        marginTop:14
    },
    textBox:{
        marginTop:24,
        flexDirection:'row',
    }
})

export default Footer